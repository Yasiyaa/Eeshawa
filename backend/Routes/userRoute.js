const express = require("express");
const router = express.Router();
const CIService = require("../Services/userService");

router
  .route("/user")

  // Get all  inquiry
  .get(function (req, res) {
    const inquiryService = CIService.getCustomerInqueriesInstance();
    const result = inquiryService.getAllData();
    result.then((data) => res.send(data)).catch((err) => console.log(err));

    // res.send(data);
  })

  // Create new inquiry
  .post(function (req, res) {
    const { cusid, type, inquiry, status } = req.body;
    const inquiryService = CIService.getCustomerInqueriesInstance();

    const result = inquiryService.insertNewQuery(cusid, type, inquiry, status);

    result
      .then((data) => res.json({ data: data }))
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ error: "An error occurred while inserting the customer." });
      });
  });

module.exports = router;
