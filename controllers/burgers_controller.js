var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var burgerObject = {
      burger: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});
router.post("/api/burgers", function(req, res){
	burger.insertOne(req.body.burgerName, function(result){
		res.json({ id: result.insertId});
	});
});
router.put("/api/burger/:id", function (req, res){
	 var condition = "id = " + req.params.id;
	 console.log("condition", condition);

	 burger.updateOne({ devoured: "1"}, condition, function(result) {
    if (result.changedRows == 0) {
       
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
})
module.exports = router;
