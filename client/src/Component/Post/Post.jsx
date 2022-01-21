import React, { useState, useEffect, useContext } from 'react';
import "./Post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import axios from 'axios';
import { format } from 'timeago.js';
import { NavLink } from 'react-router-dom';
import { Context } from '../../App';

const Post = ({ post }) => {
    const [likes, setlikes] = useState(post.likes.length);
    const [isLiked, setisLiked] = useState(false);
    const [love, setlove] = useState(post.love.length);
    const [isLove, setisLove] = useState(false);
    const [user, setuser] = useState({});
    const { user: currentUser } = useContext(Context);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        setisLiked(post.likes.includes(currentUser._id));
    }, [currentUser._id, post.likes]);
    useEffect(() => {
        setisLove(post.love.includes(currentUser._id));
    }, [currentUser._id, post.love]);
    const likeHandler = async (e) => {
        try {
            const res = await axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
        if (!isLiked) {
            setlikes(likes + 1);
            setisLiked(true);
        } else {
            setlikes(likes - 1);
            setisLiked(false);
        }
    };
    const loveHandler = async (e) => {
        try {
            const res = await axios.put("/posts/" + post._id + "/love", { userId: currentUser._id });
            console.log(res.data);

        } catch (error) {
            console.log(error);
        }
        setlove(isLove ? love - 1 : love + 1);
        setisLove(!isLove);

    };

    const getUser = async () => {
        try {
            const res = await axios.get(`/oper?userId=${post.userId}`);
            setuser(res.data);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser();
    }, [post.userId]);

    return (
        <div className='postWrapper'>
            <div className="postprofileInfo">
                <div className="profileleft">
                    <NavLink to={ `/profile/${user.username}` }><figure> <img src={ PF + user.profilePicture } alt="profileImg" /></figure></NavLink> <b>{ user.username }</b> <h5>{ format(user.createdAt) }</h5>
                </div>
                <div className="profileright"> <MoreVertIcon></MoreVertIcon> </div>
            </div>
            <div className="postprofileDesc">{ user.desc }</div>
            <div className="profilePost"><img src={ PF + post.img } alt="" /></div>
            <div className="likes">
                <div className="likesLeft">
                    <figure><img src="../../images/Extra/3670153.png" alt="" onClick={ likeHandler } /></figure>
                    <figure><img src="../../images/Extra/3670159.png" alt="" onClick={ loveHandler } /></figure>
                    <figure><CommentIcon></CommentIcon></figure>
                    <span>{ post.likes.length } people like it & { post.love.length } love it</span>
                </div>
                <div className="likesRight">
                    <span>9 comments</span>
                </div>
            </div>
        </div>
    );
};

export default Post;
