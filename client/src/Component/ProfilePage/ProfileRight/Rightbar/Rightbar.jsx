import React from 'react';
import "./Rightbar.css";
import { Profile } from '../../../Feed/Profile';
const Rightbar = ({ user }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="rightbar">
            <div className="userInfo">
                <h1>User Information</h1>
                <h3>City:  { user.city }</h3>
                <h3>From:  { user.from }</h3>
                <h3>Relationship: { user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "Complicated" }</h3>
            </div>

            <hr />
            <div className="friends_List2">
                <h1>User Friends</h1>
                { Profile.map((val) => {
                    return (<>
                        <div className="elements"><div className="available"><img src={ PF + val.img } alt="profileImg" /> <div className="online"></div></div> <h2 className="name">{ val.name }</h2></div>

                    </>);
                }) }
            </div>
        </div>
    );
};

export default Rightbar;
