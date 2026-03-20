import { useState, useEffect } from "react";

const Home = () => {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch("http://localhost:5000/api/hello")
        .then(res => res.json())
        .then(data => setMessage(data.message))
        .catch(() => setMessage("Failed to conect to backend"));
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome</h1>
            <p style={styles.subtitle}>Your React</p>

            <div style={styles.card}>
                <h3>Backend Message</h3>
                <p>{message}</p>
            </div>
        </div>
    );

};

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Ariel"
    },
    title: {
        fontSize: "3rem",
        marginBottom: "10px"
    },
    subtitle: {
        color: "#666",
        marginBottom: "20px"
    },
    card: {
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f4f4f4",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
    }
};

export default Home;