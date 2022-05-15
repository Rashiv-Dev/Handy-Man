// express application
var app = express();

// set application port
app.set("port", 9000);

// set morgan to log info about our requests for development use.
app.use(morgan("dev"));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
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

// handle bars config
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: _dirname + "/views/layouts",
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
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

// start the express server
app.listen(app.get("port"), () =>
  console.log(`App started on port ${app.get("port")}`)
);
