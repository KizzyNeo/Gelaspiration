import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    function adminPage() {
        var clickCount = 0;

        clickCount = clickCount + 1;

        if (clickCount >= 5) {
            alert("Hello");
            navigate("./register");
            clickCount = 0;
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div id="sbc_header">
                <img src={require("../assets/2.png")} alt="gelaspiration_logo" id="logo" />
            </div>
            <div id="sbc">
                <h1 className="center sbc_text">Sing Better Competition (SBC)</h1>
            </div>
            <div id="about_us">
                <h2 id="about_header">About SBC</h2>
                <p id="about_text">
                    The Sing Better Competition stands as a celestial
                    melody in the realm of virtual gospel music contests.
                    Hosted by the esteemed Gela Vocal Conservatory and
                    propelled by the enchanting essence of Gelaspiration 
                    Enterprise, this competition embodies a noble mission
                    to illuminate gospel music through harmonious
                    expressions. Within this ethereal gathering, emerging
                    talents are nurtured akin to delicate blossoms in a 
                    celestial garden. Here, aspiring gospel singers unfurl
                    their voices, creating a vibrant tapestry of passion while
                    being embraced by a global audience from the comfort
                    of their own homes. This enchanted platform not only
                    fosters artistic development but also imparts the 
                    transformative power of digital innovation, empowering
                    participants to master the contemporary art of music
                    production.
                </p>
            </div>
            <div id="mission">
                <h2 id="mission_header">Our Mission</h2>
                <p id="mission_text">
                    Our mission is to spread the gospel
                    through music by discovering,
                    empowering, and celebrating talented
                    singers. We are dedicated to helping
                    young artists overcome stage fright,
                    build self-confidence, and enhance
                    their skills, both on stage and behind
                    the scenes. With a focus on digital
                    expertise and vocal excellence, we
                    ensure that participants are not only
                    rewarded for their passion but also
                    equipped for a successful future.
                </p>
            </div>
            <div id="vision">
                <h2>Vision</h2>
                <p id="vision_text">
                    We envision becoming Africa's leading
                    platform for promoting gospel music,
                    starting from Nigeria and expanding
                    across the continent. Our goal is to
                    help gospel artists reach their full
                    potential by offering them significant
                    financial rewards, securing record
                    deals, and providing them with long-
                    term career opportunities. By
                    supporting and elevating these voices,
                    we aim to inspire a new generation of
                    gospel music artists across Africa.


                </p>
            </div>
            <div id="why">
                <h3>Why Sing Better Competition (SBC) Stands Out</h3>
                <p id="why_text">
                    <p><span className="point">Global Reach from Home:</span> Singers can participate in the competition without the need to travel,
                    reaching a worldwide audience while staying in their comfort zones. Confidence Building: We
                    focus on helping young artists conquer stage fright and gain the confidence they need to perform
                    at their best, both on stage and in life.
                    </p>
                    <p>
                        <span className="point">Skills Development:</span> Contestants not only develop their vocal talents but also learn essential digital
                    skills, such as audio and video recording and editing, which are crucial in today's music industry.
                    </p>
                    <p>
                    <span className="point">Passion Meets Reward:</span> Participants have the opportunity to share their love for gospel music and
                    be rewarded with financial prizes, record deals, and long-term career support.
                    </p>
                    <p>
                        <span className="point">Powered by Gela Vocal Conservatory & Gelaspiration Enterprise:</span> The Sing Better Competition is a
                    collaboration between Gela Vocal Conservatory, known for its excellence in vocal training and
                    artist development, and Gelaspiration Enterprise, a brand that promotes creativity, innovation, and
                    aspiration in the gospel music space. Together, they are committed to providing young gospel
                    artists with the resources, skills, and opportunities to succeed and make their mark in the music
                    industry.
                    </p>
                </p>
            </div>
            <div id="winners">
                <img src={require("../assets/prizes.png")} id="prizes" alt="prizes" />
            </div>
            <div id="stages">
                <h2>Stages:</h2>
                <ul id="stages_list">
                    <li>Auditioning Stage</li>
                    <li>First Stage</li>
                    <li>Semi-Final Stage</li>
                    <li>Final Stage</li>
                </ul>
                <h3 id="reg_fee">Registration Fee: &#8358;3,000</h3>
                <div className="centralize">
                    <button className="btn-two" onClick={() => navigate("/register")}>
                    Register Now
                </button>
                </div>
                <p id="venue">
                    <img src={require("../assets/location.png")} alt="location_icon" id="location"/>
                    SBC Official Facebook page, extended streaming on Instagram and Tiktok @GelaVocalClasses
                </p>
                <h4 id="note_text">
                    <span id="note">Note: </span> Voting is required at every stage to qualify for the next stage (&#8358;100 per vote).
                </h4>
            </div>
            <div id="prev_winners">
                <h2 id="prev_text">SBC Previous Winners</h2>
                <img src={require("../assets/FLYER6.jpg")} id="face" alt="face_of_sbc" />
                <div id="prev">
                    <div className="winner">
                        <h3 className="specific">SBC 6.0</h3>
                        <div>
                            <img src={require("../assets/One.jpg")} className="image" alt="sbc_winner" />
                            <h6 className="tag">Miss. Blessing Onyeka (1st | 250K | Lagos)</h6>
                            <img src={require("../assets/Two.jpg")} className="image" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Isaac Susan (2nd | 120K | Ebonyi)</h6>
                            <img src={require("../assets/Three.jpg")} className="image" alt="sbc_runnerup" />
                            <h6 className="tag">Mr. Uche Gideon (3rd | 70K | Imo)</h6>
                        </div>
                    </div>
                    <div className="winner">
                        <h3 className="specific">SBC 5.0</h3>
                        <div>
                            <img src={require("../assets/Flyer1.jpg")} className="image" alt="sbc_winner" />
                            <h6 className="tag">Mr. Praise Godwin (1st | 200K | Abuja)</h6>
                            <img src={require("../assets/Flyer21.jpg")} className="image" alt="sbc_runnerup" />
                            <h6 className="tag">Gabriel Abigail (2nd | 100K | Imo)</h6>
                            <img src={require("../assets/Flyer31.jpg")} className="image" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Glory Tokula (3rd | 50K | Abuja)</h6>
                        </div>
                    </div>
                    <div className="winner">
                        <h3 className="specific">SBC 4.0</h3>
                        <div>
                            <img src={require("../assets/Flyer11.jpg")} className="image" alt="sbc_winner" />
                            <h6 className="tag">Miss. Kenechukwu Onah (1st | 150K | Enugu)</h6>
                            <img src={require("../assets/Flyer2.jpg")} className="image" alt="sbc_runnerup" />
                            <h6 className="tag">Mr. Praise Eto (2nd | 70K | Imo)</h6>
                            <img src={require("../assets/Flyer3.jpg")} className="image" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Juliet Mehara (3rd | 30K | Lagos)</h6>
                        </div>
                    </div>
                    <div className="winner">
                        <h3 className="specific">SBC 3.0</h3>
                        <div>
                            <img src={require("../assets/SBC3.jpg")} className="image" alt="sbc_winner" />
                            <h6 className="tag">Mr. Tobias Prince (1st | 100K | Delta)</h6>
                            <img src={require("../assets/NKIRUKA.jpg")} className="image" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Nkiruka Uragwu (2nd | 20K | Ebonyi)</h6>
                            <img src={require("../assets/MIRACLE.jpg")} className="image" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Miracle Nwachukwu (3rd | 10K | Enugu)</h6>
                        </div>
                    </div>
                    <div className="winner">
                        <h3 className="specific">SBC 2.0</h3>
                        <div>
                            <img src={require("../assets/SBC2.jpg")} className="image" alt="sbc_winner" />
                            <h6 className="tag">Miss. Mercy Ezechukwu (1st | 20K | Lagos)</h6>
                            <img src={require("../assets/IYIDA.jpg")} className="image" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Favour Iyida (2nd | 10K | Enugu)</h6>
                        </div>
                    </div>
                    <div className="winner">
                        <h3 className="specific">SBC 1.0</h3>
                        <div>
                            <img src={require("../assets/WINNER.jpg")} className="image" alt="sbc_winner" />
                            <h6 className="tag">Miss. Esther Uchenna (1st | 10K | Lagos)</h6>
                            <img src={require("../assets/FAVOUR.jpg")} className="image" alt="sbc_runnerup" />
                            <h6 className="tag">Miss. Favour Iyida (2nd | 5K | Enugu)</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div id="vote">
                <h2>Vote Your Contestant:</h2>
                <button className="btn-two">
                    Vote
                </button>
                <h4 id="contact">
                    For more enquiries and sponsorship contact us via:
                    <img src={require("../assets/whatsapp.png")} id="whatsapp" alt="whatsapp_icon" />
                    || <a href="tel:+2347033471680">+2347033471680</a>
                    </h4>
            </div>
            <div id="footer" onClick={adminPage}>
                <small>&copy; <span id="year">{currentYear}</span> Sing Better Competition (SBC). All rights reserved.</small>
            </div>
        </div>
    );
}

export default Welcome;