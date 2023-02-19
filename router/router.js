const express = require('express');
const router = express.Router();

var banco = [];

router.get("/", (req, res) => {
    res.status(200).json(banco);
});


router.get("/:id", (req, res) => {
    let id = req.params["id"];
    let obj = banco.find(x => x.id == id);
    if (obj) {
        res.status(200).json({ status: true, data: obj });
    } else {
        res.status(404).json({ status: false, data: null });
    }
});

router.post("/", (req, res) => {
    req.body.id = banco.length + 1;
    banco.push(req.body);
    res.status(201).json({ status: true, data: banco });
});

router.put("/:id", (req, res) => {
    let id = req.params["id"];
    let idx = banco.findIndex(x => x.id == id);
    if (idx) {
        banco[parseInt(idx)] = req.body;
        res.status(201).json({ status: true, data: banco });
    } else {
        res.status(404).json({ status: false, data: null });
    }
});

router.delete("/:id", async (req, res) => {
    let id = req.params["id"];
    let idx = await banco.findIndex(x => x.id == id);
    if (idx != null || idx != undefined) {
        await banco.splice(parseInt(idx),1);
        res.status(201).json({ status: true, data: banco });
    } else {
        res.status(201).json({ status: false, data: banco });
    }

});


module.exports = router