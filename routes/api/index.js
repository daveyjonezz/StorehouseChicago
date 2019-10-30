const router = require("express").Router();
const noteRoutes = require("./note");
const emailRoutes = require("./email")

// Routes

router.use("/notes", noteRoutes);
router.use("/email", emailRoutes)

module.exports = router;
