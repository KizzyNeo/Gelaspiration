import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { Contestant } from "./Contestant";

dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "API is running"
    });
});

app.get("/api/hello", (req: Request, res: Response) => {
    res.json({
        message: "Hello from Node.js backend"
    });
});

app.post("/api/data", (req: Request, res: Response) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ eror: "Name is required" });
    }

    res.json({
        message: 'Hello, ${name}!'
    });
});

app.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});

mongoose.connect(process.env.MONGO_URI as string)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.post("https://gelaspiration.onrender.com/api/register", async (req, res) => {
    const { name, email, gender, segment } = req.body;

    if (!name || !email || !gender || !segment) {
        return res.status(400).json({ error: "All fields required" });
    }

    try {
        const contestant = new Contestant({ name, email, gender, segment });
        await contestant.save();

        res.json({ message: "Contestant registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
