const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose.js");

class CourseController {
  // [GET] /course/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("../../resources/views/courses/courses.hbs", {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }

  // [GET] /course/:create
  create(req, res, next) {
    res.render("courses/create");
  }
}

module.exports = new CourseController();
