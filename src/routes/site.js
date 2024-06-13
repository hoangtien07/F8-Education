const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

router.get("/search", siteController.search);
router.get("/learning-paths", siteController.learning_paths);
router.get(
  "/learning-paths/front-end-development",
  siteController.front_end_learning_paths
);
router.get(
  "/learning-paths/back-end-development",
  siteController.back_end_learning_paths
);

router.get("/", siteController.index);

module.exports = router;
