const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const companyRoutes = require("./company-routes");
const adRoutes = require("./ad-routes");

router.use("/user", userRoutes);
router.use("/company", companyRoutes);
router.use("/ad", adRoutes);

module.exports = router;
