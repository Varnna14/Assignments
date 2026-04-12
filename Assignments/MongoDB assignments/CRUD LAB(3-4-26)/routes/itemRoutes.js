const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.post('/', async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.post("/", async (req, res) => {
    res.send("ServerWorking");
});
router.get('/', async (req, res) => {

        const items = await Item.find();
        res.json(items);

});
router.get("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
});


router.put("/:id", async (req, res) => {
  const item = await Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(item);
});


router.delete("/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;