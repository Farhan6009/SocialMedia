import React from 'react';
import "./ProfilePage.css";
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import ProfileRight from '../ProfilePage/ProfileRight/ProfileRight';
const ProfilePage = () => {
    return (<>
        <Navbar></Navbar>
        <div className='profileWrapper'>
            <Sidebar></Sidebar>
            <ProfileRight></ProfileRight>
        </div>
    </>
    );
};

export default ProfilePage;
