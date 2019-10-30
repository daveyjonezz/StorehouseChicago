const db = require("../models");

// Defining methods for the notesController
module.exports = {
  newRecord: function(req, res) {
    console.log("Controller Notes")
    db.Note
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};