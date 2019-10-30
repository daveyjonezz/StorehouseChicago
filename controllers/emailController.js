const db = require("../models")

// Defining methods for the emailController
module.exports = {
    newEmail: function(req,res) {
        console.log("Controller Email")
        db.Email.create(req.body).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
    }
}