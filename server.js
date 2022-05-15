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
