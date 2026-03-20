import { useState } from "react";

const Registration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        course: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage("Registration successful");
                setFormData({ name: "", email: "", course: "" });
            } else {
                setMessage(data.error || "Something went wrong");
            }
        } catch (error) {
            setMessage("Server error");
        }
    };

    return (
        <div style={styles.container}>
            <h2>SPC Registration Portal</h2>

            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                <input
                name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input
                name="course" placeholder="Course" value={formData.course} onChange={handleChange} required />

                <button type="submit">Register</button>
            </form>

            <p>{message}</p>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        marginTop: "50px"
    },
    form: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "10px",
        width: "300px",
    }
};

export default Registration;