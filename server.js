var app = express();
app.set("port", 9000);
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    key: "user_sid",
    secret: "somesecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      express: 600000,
    },
  })
);

app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: _dirname + "/views/layouts",
  })
);
app.set("view engine", "hbs");

app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookies("user_sid");
  }
  next();
});

var hbsContent = {
  userName: "",
  loggedin: false,
  title: "You are not logged-in users",
  body: "Welcome",
};

// Middleware function to check for logged in users
var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    res.redirect("/dashboard");
  } else {
    next();
  }
};

// GET Request route for Home-Page
app.get("/", sessionChecker, (req, res) => {
  res.redirect("/login");
});

// GET & POST routes for signup page
app
  .route("/signup")
  .get((req, res) => {
    //res.sendFile (_dirname + '/public/signup.html');
    res.render("signup", hbsContent);
  })
  .post((req, res) => {
    user
      .create({
        username: req.body.username,
        password: req.body.password,
      })
      .then((user) => {
        req.session.user = user.dataValues;
        res.redirect("dashboard");
      })
      .catch((error) => {
        res.redirect("/signup");
      });
  });

// GET & POST routes for user login
app
  .route("/login")
  .get((req, res) => {
    //res.sendFile(_dirname + '/public/login.html');
    res.render("login", hbsContent);
  })
  .post(
    (req,
    (res) => {
      var username = req.body.username;
      var password = req.body.password;

      User.findOne({ where: { username: username } }).then(function (user) {
        if (!user) {
        } else if (!user.validPassword(password)) {
          res.redirect("login");
        } else {
          req.session.user = user.dataValues;
          res.redirect("/dashboard");
        }
      });
    })
  );

// GET route for user's dashboard
app.get("dashboard", (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    hbsContent.loggedin = true;
    hbsContent.userName = req.session.user.username;
    hbsContent.title = " You are logged in ";
    //res.sendFile(_dirname + '/public/dashboard(.html');
    res.render("index", hbsContent);
  } else {
    res.redirect("login");
  }
});

// GET route for user logout
app.get("logout", (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    hbsContent.loggedin = false;
    hbsContent.title = " You are logged out!";
    res.clearCookies("user_sid");
    res.redirect("/");
  }
});

// route for handling 404 requests (unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("Not Found");
});
