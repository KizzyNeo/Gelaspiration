import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;