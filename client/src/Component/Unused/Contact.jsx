import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Contact = () => {

    const [userData, setuserData] = useState({ name: "", email: "", message: "" });

    const userContact = async () => {
        const { name, email, message } = userData;
        try {

            const res = await axios.get("http://localhost:5000/getdata", { withCredentials: true, validateStatus: false });

            console.log(res);

            setuserData({ ...userData, name: res.data.name, email: res.data.email });

            if (!res.status === 201) {
                throw new Error(res.error);
            }

        } catch (error) {
            console.log(error);

        }
    };

    useEffect(() => {
        userContact();
    }, []);

    // we are storing data in states

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserData({
            ...userData,
            [name]: value
        });
    };

    // send the data to backend
    const contactForm = async (e) => {
        try {
            e.preventDefault();

            const { name, email, message } = userData;
            if (!name || !email || !message) {
                console.log("Fields can't be empty");
            } else {
                const res = await axios.post("http://localhost:5000/contact", { name, email, message }, { withCredentials: true, validateStatus: false });

                if (res.status !== 200) {
                    console.log("message not send");
                    alert("message not send");

                } else {
                    alert("Message send");
                    setuserData({ ...userData, message: "" });
                }
            }
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <>
            <div className="contact-info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                            <div className="contact_info_item d-flex justify-content-start align-items-center col-3">
                                <i className="zmdi zmdi-code-smartphone m-3"></i>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Phone
                                    </div>
                                    <div className="contact_info_text">
                                        +91 1111 543 2198
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info_item d-flex justify-content-start align-items-center col-3">

                                <i class="zmdi zmdi-email m-3"></i>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Email
                                    </div>
                                    <div className="contact_info_text">
                                        Farhan@technical.com
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info_item d-flex justify-content-start align-items-center col-3">

                                <i class="zmdi zmdi-pin-drop m-3"></i>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Address
                                    </div>
                                    <div className="contact_info_text">
                                        Delhi,India
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container py-5">
                                <div className="contact_form_title">
                                    Get in Touch
                                </div>
                                <form method="POST" id="contact_form " className="m-4">
                                    <div className="contact_form_name d-flex justify-content-between align-items-center">
                                        <input type="text" id="contact_form_name"
                                            className="contact_form_email input_field"
                                            onChange={ handleInputs }
                                            name="name"
                                            value={ userData.name }
                                            placeholder="Your Name" required="true"
                                        />
                                        <input type="email" id="contact_form_email"
                                            className="contact_form_name input_field"
                                            onChange={ handleInputs }
                                            name="email"
                                            value={ userData.email }
                                            placeholder="Your Email" required="true"
                                        />
                                    </div>
                                    <div className="contact_form_text ">
                                        <textarea className="text_field contact_form_message mt-4 col-12"
                                            onChange={ handleInputs }
                                            name="message"
                                            value={ userData.message }
                                            placeholder="Message" cols="30" rows="10"></textarea>
                                    </div>
                                    <div className="contact_form_button">
                                        <button type="submit" className="btn btn-primary btn-sm"
                                            onClick={ contactForm }
                                        >Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
