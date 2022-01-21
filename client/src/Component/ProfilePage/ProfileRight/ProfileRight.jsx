import React, { useEffect, useState, useContext } from 'react';
import './ProfileRight.css';
import Feed from '../../Feed/Feed';
import Rightbar from './Rightbar/Rightbar';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Context } from '../../../App';


const ProfileRight = () => {
    const { user, dispatch } = useContext(Context);
    const username = useParams().username;
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    useEffect(() => {
        const getProfile = async () => {
            try {
                const res = await axios.get(`/oper?username=${user.username}`);
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
                console.log(user);
            } catch (error) {
                console.log(error);
            }
        };
        getProfile();
    }, []);

    return (
        <div className='profileRight'>
            <div className="profile">
                <div className="coverImg">
                    <img src={ PF + user.coverPicture } alt="" />
                    {/* <img src="ABT21192E2A5E5EDEC000348EB2D75AC226E0D55E743AFF292B278F75E563E02408" alt="" /> */ }
                    <div className="profileImg"><img src={ PF + user.profilePicture } alt="" /></div>
                </div>
                <div className="profileInfo"><h1>{ user.username }</h1></div>
            </div>
            <div className="twoParts">
                <Feed username={ username }></Feed>
                <Rightbar user={ user }></Rightbar>
            </div>
        </div>
    );
};

export default ProfileRight;
