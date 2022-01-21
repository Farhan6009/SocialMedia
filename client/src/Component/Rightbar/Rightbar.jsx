import React from 'react';
import "./Rightbar.css";
import { Profile } from "../Profile";

const Rightbar = () => {

    return (
        <div className="rightbar">
            <div className="top">
                <figure> <img src="../../images/Extra/collection-3d-gift-boxes_91128-1024.jpg" alt="" /></figure><div className="line"> <span>Pola Foster</span> and <span>3 other friends</span> have birthday today</div>
            </div>
            <div className="ads">
                <img src="../../images/Extra/grand-opening-soon-promo_52683-61193.jpg" alt="" />
            </div>
            <hr />
            <div className="friends_List2">
                <h1>Online Friends</h1>
                { Profile.map((val) => {
                    return (<>
                        <div className="elements"><div className="available"><img src={ val.img } alt="profileImg" /> <div className="online"></div></div> <h2 className="name">{ val.name }</h2></div>

                    </>);
                }) }
            </div>
        </div>
    );
};

export default Rightbar;
