import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();
    const [user, setuser] = useState({
        username: "", email: "", password: "", cpassword: ""
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value });
    };

    const PostData = async (e) => {
        e.preventDefault();
        const { username, email, password, cpassword } = user;
        if (!username || !email || !password || !cpassword) {
            console.log("Fields cannot be empty");
        }
        if (password === cpassword) {
            const res = await axios.post("/users/register", user, { validateStatus: false });
            if (res.status === 422 || res.data === "") {
                window.alert(res.data);
                console.log(res.data);
            } else {
                window.alert(res.data);
                console.log(res.data);
                navigate("/login");
            }
        }
    };


    return (
        <>
            <section className="signupWrapper">
                <div className="signup-left">
                    <div className="content">
                        <h1><b>FarSocial</b></h1>
                        <h3>Connect with friends and the world around you on FarSocial</h3>
                        <NavLink to="/login" className="signin-link">I am already registerd</NavLink>
                    </div>
                </div>;
                <div className="signup-right">
                    <div className="rightContent">
                        <h2 className="form-title ">Signup</h2>
                        <form method="POST" className='register-form ' id='register-form' >
                            <label for="basic-url" class="form-label"><i class="zmdi zmdi-pin-account"></i> Your name</label>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" id="basic-url"
                                    name="username"
                                    value={ user.username }
                                    onChange={ handleInputs }
                                    aria-describedby="basic-addon3" />
                            </div>

                            <label for="basic-url" class="form-label"><i class="zmdi zmdi-email"></i> Your Email</label>
                            <div class="input-group mb-3">
                                <input type="email" class="form-control" id="basic-url"
                                    name="email"
                                    value={ user.email }
                                    onChange={ handleInputs }
                                    aria-describedby="basic-addon3" />
                            </div>
                            <label for="basic-url" class="form-label"><i class="zmdi zmdi-lock"></i> Your password</label>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" id="basic-url"
                                    name="password"
                                    value={ user.password }
                                    onChange={ handleInputs }
                                    aria-describedby="basic-addon3" />
                            </div>
                            <label for="basic-url" class="form-label"><i class="zmdi zmdi-lock"></i> Confirm password</label>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" id="basic-url"
                                    name="cpassword"
                                    value={ user.cpassword }
                                    onChange={ handleInputs }
                                    aria-describedby="basic-addon3" />
                            </div>
                            <button type="submit" className="loginBtn" onClick={ PostData }>Register</button>
                            <span className='registerspan'>or</span>
                            <NavLink to="/login" className="signin-link"><button type="submit" className="Btn">Login </button></NavLink>
                        </form>
                    </div>


                </div>

            </section>
        </>
    );
};

export default Register;
