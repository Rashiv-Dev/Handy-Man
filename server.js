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

// GET request route for signup page
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
