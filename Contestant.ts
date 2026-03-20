import mongoose from "mongoose";

const contestantSchema = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    segment: String,
}, {timestamps: true});

export const Contestant = mongoose.model("Contestant", contestantSchema);