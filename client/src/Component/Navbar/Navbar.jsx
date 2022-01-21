import React, { useState, useContext } from 'react';
import "./Navbar.css";
import profile from "../../images/Profile/download.jpg";
import { NavLink } from 'react-router-dom';
import { Context } from '../../App';

const Navbar = () => {
    const [search, setsearch] = useState("");
    const { user } = useContext(Context);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div>
            <nav className="navbar">
                <div className="link">
                    <NavLink to='/' className="navlink"><span className='navlinkspan'>FarSocial</span></NavLink>
                </div>
                <div className="search_bar">
                    <i class="zmdi zmdi-search"></i> <input type="text" name="search" value={ search } onChange={ (e) => {
                        setsearch(e.target.value);
                    } } placeholder="Search for friend,post or video" />

                </div>
                <div className="heading"><h3>Homepage</h3>
                    <h3>Timeline</h3></div>
                <div className="icons">
                    <i class="zmdi zmdi-account"></i>
                    <i class="zmdi zmdi-comment-text"></i>
                    <i class="zmdi zmdi-notifications"></i>
                    <figure>
                        { console.log(user) }
                        {/* <NavLink to='/profile/farhan'><img src={ user ? PF + user.profilePicture : profile } alt="" /></NavLink> */ }
                        <NavLink to={ `/profile/${user.username}` }><img src={ user ? PF + user.profilePicture : profile } alt="" /></NavLink>

                    </figure>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;
