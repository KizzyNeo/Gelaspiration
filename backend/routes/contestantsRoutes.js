const express = require("express");
const router = express.Router();
const multer = require("multer");
const Contestant = require("../models/Contestant");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        const cleanName = file.originalname.replace(/\s+/g, "-");
        cb(null, Date.now() + "-" + cleanName);
    }
});

const upload = multer({ storage });

router.post("/", upload.single("photo"),
async (req, res) => {
    try {
        console.log("BODY:", req.body);
        console.log("FILE:", req.file);

        const { name, phone, gender, location } = req.body;

        const newContestant = new Contestant({
            name,
            phone,
            gender,
            location,
            photo: req.file ? req.file.filename : null
        });

        const saved = await newContestant.save();

        res.json(saved);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const contestants = await Contestant.find().sort({ contestantId: 1 });
        res.json(contestants);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updated = await Contestant.findOneAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after" }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Contestant.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/export", async (req, res) => {
    const contestants = await Contestant.find();

    const data = contestants.map(c => ({
        ID: c.contestantId,
        Name: c.name,
        Phone: c.phone,
        Gender: c.gender
    }));

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, "Contestants");

    XLSX.writeFile(wb, "contestants.xlsx");

    res.download("contestants.xlsx");
});

module.exports = router;