import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import farhanpic from "./images/Profile/0a53c3bbe2f56a1ddac34ea04a26be98.jpg";
import "./About.css";
const About = () => {

    const navigate = useNavigate();

    const [userData, setuserData] = useState({});

    const callAboutPage = async () => {
        try {
            const res = await axios.get("http://localhost:5000/about", {
                withCredentials: true,
                validateStatus: false,
            });

            console.log(res);

            if (res.status !== 200) {
                throw new Error(res.error);
            }

            setuserData(res.data);

        } catch (error) {
            console.log(error);
            navigate("/login");
        }
    };

    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <div className='about_body'>
            <div className="container about_container">
                <form method="GET" >
                    <div className="row about1">
                        <div className="col-md-4 img_div">
                            <img src={ farhanpic } alt="farhan" className='img-fluid' />
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>{ userData.name }</h5>
                                <h6>{ userData.work }</h6>
                                <p className="profile-rating mt-3 mb-5">
                                    Ranking: <span>1/10</span>
                                </p>

                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a className="nav-link " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn " name="btnAddMore" value="Edit Profile" />
                        </div>
                    </div>

                    <div className="row">
                        {/* left side url */ }

                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>Work Link</p>
                                <a href="https://www.youtube.com" target="_blank" without rel="noreferrer">Youtube</a><br />
                                <a href="https://www.youtube.com" target="_blank" without rel="noreferrer">Youtube</a><br />
                                <a href="https://www.youtube.com" target="_blank" without rel="noreferrer">Youtube</a><br />
                                <a href="https://www.youtube.com" target="_blank" without rel="noreferrer">Youtube</a><br />
                                <a href="https://www.youtube.com" target="_blank" without rel="noreferrer">Youtube</a><br />
                                <a href="https://www.youtube.com" target="_blank" without rel="noreferrer">Youtube</a><br />
                            </div>
                        </div>

                        {/* right side data toggle */ }

                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content " id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            lkaflsalkafslfa755464
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            { userData.name }
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            { userData.email }
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            { userData.work }
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            Expert
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Hourly rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            10$/hr
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            223
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            Expert
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            6 months
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default About;
