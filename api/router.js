const express = require("express");
const router = express.Router();
const Data = require("../models/data");
const dbo = require("../config/db");
//get data
router.get("/getAll", async (req, res) => {
  try {
    const dbConnect = dbo.getDb();
    dbConnect
      .collection("data")
      .find({})
        .limit(50)
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching listings!");
        } else {
          res.json(result);
        }
      });
  } catch (error) {
    res.json({ status: error });
  }
});
module.exports = router;
