import React, { useContext, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Login.css";
import { Context } from '../../App';
import { loginCall } from '../apiCalls';
import CircularProgress from '@mui/material/CircularProgress';


const Login = () => {

    const navigate = useNavigate();
    let email = useRef();
    let password = useRef();
    const { user, isFetching, error, dispatch } = useContext(Context);

    const loginUser = async (e) => {
        e.preventDefault();
        email = email.current.value;
        password = password.current.value;

        if (!email || !password) {
            alert("Fill the fields properly");
        }
        loginCall({ email, password }, dispatch);
        console.log(user);

        if (user) {
            window.alert("Login successful");
            navigate("/");
        } else {
            window.alert(user);
            navigate("/register");
        }
    };

    return (
        <>
            <section className="loginWrapper">
                <div className="signin-left">
                    <div className="content">
                        <h1><b>FarSocial</b></h1>
                        <h3>Connect with friends and the world around you on FarSocial</h3>
                        <NavLink to="/signup" className="signin-image-link">Signup if not already registered</NavLink>
                    </div>
                </div>
                <div className="signin-right">
                    <div className="rightContent">
                        <h2 className="form-title ">Signin</h2>
                        <form method="POST" className='login-form ' id='login-form' >
                            <label for="basic-url" className="form-label"><i className="zmdi zmdi-email"></i> Your Email</label>
                            <div className="input">
                                <input type="email" name="email"
                                    ref={ email }
                                    required
                                    className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                            </div>
                            <label for="basic-url" className="form-label"><i className="zmdi zmdi-lock"></i> Your password</label>
                            <div className="input">
                                <input type="text" name="password"
                                    ref={ password }
                                    required
                                    className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                            </div>
                            <button type="submit" className="loginBtn" onClick={ loginUser }>{ isFetching ? <CircularProgress color='white' size="20px"></CircularProgress> : "Login" }</button>
                            <span className='loginspan'>or</span>
                            <NavLink to="/register" className="signin-link"><button type="submit" className="Btn">{ isFetching ? <CircularProgress color='white' size="20px"></CircularProgress> : "Signup" }</button></NavLink>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
