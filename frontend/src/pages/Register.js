import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        gender: "",
        location: "",
        photo: null
    });

    const handleChange = (e) => {
        if (e.target.name === "photo") {
            setFormData({ ...formData, photo: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("phone", formData.phone);
        data.append("gender", formData.gender);
        data.append("location", formData.location);
        data.append("photo", formData.photo);

        try {
            const res = await axios.post("http://localhost:5000/api/contestants", data);
            console.log(res.data);
            alert("Registration Successful! ID: " + res.data.contestantId);
        } catch (err) {
            console.error(err);
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <div className="center arrange">
            <Helmet>
                            <meta charset="utf-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <title>Register | SBC 7.0</title>
                            <meta name="description" content="Register for Sing Better Competition (SBC) 7.0. A super competition for 
                            amazing talents." />
                            <meta name="keywords" content="register, join, sing, competition, sbc, music, talent, nigeria" />
                            <meta name="author" content="Gelaspiration" />
                            <meta property="og:title" content="Sing Better Competition (SBC) 7.0" />
                            <meta property="og:description" content="Join now!" />
                            <meta property="og:type" content="website" />
                            <meta property="og:image" content="https://gelaspiration.com/src/assets/2.png" />
                            <meta property="og:url" content="https://gelaspiration.com" />
                            <meta name="twitter:card" content="summary_large_image" />
                        </Helmet>
            <h2 id="reg">Register Contestant</h2>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                <select name="gender" onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <select id="state" name="location" onChange={handleChange} required>
                    <option value="">--Select a State--</option>
                    <option value="Abia">Abia</option>
                    <option value="Adamawa">Adamawa</option>
                    <option value="Akwa Ibom">Akwa Ibom</option>
                    <option value="Anambra">Anambra</option>
                    <option value="Bauchi">Bauchi</option>
                    <option value="Bayelsa">Bayelsa</option>
                    <option value="Benue">Benue</option>
                    <option value="Borno">Borno</option>
                    <option value="Cross River">Cross River</option>
                    <option value="Delta">Delta</option>
                    <option value="Ebonyi">Ebonyi</option>
                    <option value="Edo">Edo</option>
                    <option value="Ekiti">Ekiti</option>
                    <option value="Enugu">Enugu</option>
                    <option value="FCT">Federal Capital Territory</option>
                    <option value="Gombe">Gombe</option>
                    <option value="Imo">Imo</option>
                    <option value="Jigawa">Jigawa</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Kano">Kano</option>
                    <option value="Katsina">Katsina</option>
                    <option value="Kebbi">Kebbi</option>
                    <option value="Kogi">Kogi</option>
                    <option value="Kwara">Kwara</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Nasarawa">Nasarawa</option>
                    <option value="Niger">Niger</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ondo">Ondo</option>
                    <option value="Osun">Osun</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Plateau">Plateau</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Sokoto">Sokoto</option>
                    <option value="Taraba">Taraba</option>
                    <option value="Yobe">Yobe</option>
                    <option value="Zamfara">Zamfara</option>
                </select>
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
                <input type="file" name="photo" onChange={handleChange} required /><span className="info">(Professional Photo)</span>
                <button type="submit" className="btn-two">Submit</button>
            </form>
            <div className="general_footer">
                <small>&copy; <span>{currentYear}</span> Sing Better Competition (SBC). All rights reserved.</small>
            </div>
        </div>
    );
}

export default Register;
