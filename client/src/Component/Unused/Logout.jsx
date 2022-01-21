import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const navigate = useNavigate();

    const callLogoutPage = async () => {
        try {
            const res = await axios.get("http://localhost:5000/logout", {
                withCredentials: true,
                validateStatus: false,
            });

            console.log(res.data);
            navigate("/login");

            if (res.status !== 201) {
                throw new Error(res.error);
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        callLogoutPage();
    }, []);
    return (
        <div>
            <h1>Logout ka page</h1>
        </div>
    );
};

export default Logout;
