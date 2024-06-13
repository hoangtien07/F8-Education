const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose.js");

class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }

  search(req, res) {
    res.render("search");
  }

  learning_paths(req, res) {
    res.render("../../resources/views/learning-paths/learning-paths.hbs");
  }

  front_end_learning_paths(req, res) {
    res.render(
      "../../resources/views/learning-paths/front-end-development.hbs"
    );
  }

  back_end_learning_paths(req, res) {
    res.render("../../resources/views/learning-paths/back-end-development.hbs");
  }
}

module.exports = new SiteController();
