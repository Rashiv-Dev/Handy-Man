const router = require("express").Router();
const { Post, Ad, User } = require("../models/");

// get all posts for homepage
router.get("/", async (req, res) => {
  try {
    const companyData = await Post.findAll({
      include: [User],
    });

    const companies = companyData.map((company) =>
      company.get({ plain: true })
    );

    res.render("all-companies", { companies });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get("/company/:id", async (req, res) => {
  try {
    const companyData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Ad,
          include: [User],
        },
      ],
    });

    if (companyData) {
      const company = companyData.get({ plain: true });

      res.render("single-company", { company });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
