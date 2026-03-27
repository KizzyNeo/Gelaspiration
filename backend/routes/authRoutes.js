const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const ADMIN = {
    username: "admin",
    password: "1234"
};

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === ADMIN.username && password === ADMIN.password) {
        const token = jwt.sign({ username }, "secretkey", { expiresIn: "1d" });
        return res.json({ token });
    }

    res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;