import React from "react";
import "./Sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from '@mui/icons-material/Chat';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import SchoolIcon from '@mui/icons-material/School';
import { Profile } from "../Feed/Profile";

const Sidebar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <>
            <div className="sidebar">
                <div className="iconElements">
                    <div className="elements"><RssFeedIcon></RssFeedIcon><h2>Feed</h2></div>
                    <div className="elements"><ChatIcon></ChatIcon><h2>Chats</h2></div>
                    <div className="elements"> <SlowMotionVideoIcon></SlowMotionVideoIcon><h2>Videos</h2></div>
                    <div className="elements"> <GroupsIcon></GroupsIcon><h2>Groups</h2></div>
                    <div className="elements">  <BookmarkIcon></BookmarkIcon><h2>Bookmarks</h2></div>
                    <div className="elements"><HelpOutlineOutlinedIcon></HelpOutlineOutlinedIcon><h2>Questions</h2></div>
                    <div className="elements"><WorkOutlineOutlinedIcon></WorkOutlineOutlinedIcon><h2>Jobs</h2></div>
                    <div className="elements"><InsertInvitationOutlinedIcon></InsertInvitationOutlinedIcon><h2>Events</h2></div>
                    <div className="elements"><SchoolIcon></SchoolIcon><h2>Courses</h2></div>
                    <button className="btn" >Show More</button>
                </div>
                <hr />
                <div className="friends_List">
                    { Profile.map((val) => {
                        return (<>
                            <div className="elements"><img src={ PF + val.img } alt="profileImg" /><h2 className="name">{ val.name }</h2></div>

                        </>);
                    }) }
                </div>
            </div>
        </>
    );
};

export default Sidebar;
