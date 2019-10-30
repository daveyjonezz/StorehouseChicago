const router = require("express").Router();
const emailController = require("../../controllers/emailController");

// Matches with "/api/email"
console.log("routes")
router.route("/").post(emailController.newEmail);

module.exports = router;