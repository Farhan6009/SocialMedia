import React from 'react';
import Navbar from '../Navbar/Navbar';
import Feed from '../Feed/Feed';
import Rightbar from '../Rightbar/Rightbar';
import Sidebar from '../Sidebar/Sidebar';
import "./Home.css";
const Home = () => {

    return (
        <>
            <Navbar></Navbar>
            <div className="homeContainer">
                <Sidebar ></Sidebar>
                <Feed></Feed>
                <Rightbar></Rightbar>
            </div>
        </>
    );
};

export default Home;
