const express = require("express");
const router = express.Router();
const List = require("../models/list");

router.post("/", async (req, res) => {
    try {
        const item = req.body.item;
        const itemExist = await List.findOne({ item });

        if (itemExist) {
            res.status(404).send("Item already exist");
        } else {
            const newList = await new List({ item });
            await newList.save();
            res.status(200).send("item added");
        }
    } catch (error) {
        console.log(error);
    }

})

router.get("/", async (req, res) => {
    try {
        const data = await List.find();
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
    }

})
router.get("/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const list = await List.findById({ _id });
        res.status(200).send(list);
    } catch (error) {
        console.log(error);
    }
})
router.put("/:id", async (req, res) => {
    try {
        const item = req.body.item;
        const _id = req.params.id;
        console.log(_id)
        console.log(item)
        const list = await List.updateOne({ _id }, { item });
        res.status(200).send("Item updated");
    } catch (error) {
        console.log(error);
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        console.log(_id)
        const list = await List.deleteOne({ _id });
        res.status(200).send("Item deleted");
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;