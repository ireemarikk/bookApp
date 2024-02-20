let router = require("express").Router();
let categoryController = require("./controllers/categoryController")

//http://localhost/api/category
router.route("/category").get(categoryController.list);

module.exports = router;