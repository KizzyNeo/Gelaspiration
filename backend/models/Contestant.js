const mongoose = require("mongoose");
const XLSX = require("xlsx");

const counterSchema = new mongoose.Schema({
    name: String,
    seq: { type: Number, default: 0 }
});

const Counter = mongoose.model("Counter", counterSchema);

const contestantSchema = new mongoose.Schema({
    contestantId: Number,
    name: String,
    phone: String,
    gender: String,
    location: String,
    photo: String
}, { timestamps: true });

contestantSchema.pre("save", async function () {

    if (this.isNew) {
        const counter = await Counter.findOneAndUpdate(
            { name: "contestantId" },
            { $inc: { seq: 1 } },
            { returnDocument: "after", upsert: true }
        );

        this.contestantId = counter.seq;
    }
});

module.exports = mongoose.model("Contestant", contestantSchema);