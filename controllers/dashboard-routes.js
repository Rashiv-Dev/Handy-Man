const router = require("express").Router();
const { Post, Company } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const companyData = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const comapanies = companyData.map((company) => post.get({ plain: true }));

    res.render("all-companies-admin", {
      layout: "dashboard",
      companies,
    });
  } catch (err) {
    res.redirect("login");
  }
});

router.get("/new", withAuth, (req, res) => {
  res.render("new-company", {
    layout: "dashboard",
  });
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const companyData = await Post.findByPk(req.params.id);

    if (companyData) {
      const company = companyData.get({ plain: true });

      res.render("edit-company", {
        layout: "dashboard",
        company,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
