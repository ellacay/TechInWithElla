const router = require("express").Router();
const Subscribe = require("../models/Subscribe");

//CREATE POST
router.post("/", async (req, res) => {
  const newSubscription = new Subscribe(req.body);
  try {
    const savedSubscription = await newSubscription.save();
    res.status(200).json(savedSubscription);
  } catch (err) {
    res.status(500).json(err);
  }
});


//DELETE POST
router.delete("/:id", async (req, res) => {
    const subscription = await Subscribe.findById(req.params.id);
    try {
        await subscription.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }

});



module.exports = router;