import React, { useState, useEffect, useContext } from 'react';
import "./Feed.css";
import Share from '../Share/Share';
import Post from '../Post/Post';
import axios from 'axios';
import { Context } from '../../App';

const Feed = ({ username }) => {
    const [post, setpost] = useState([]);
    const { user } = useContext(Context);
    const getPost = async () => {
        try {
            const res = username ? await axios.get("posts/profile/" + username) : await axios.get("posts/timeline/" + user._id);

            setpost(res.data);
            console.log(post);
        } catch (error) {
            console.log(error);
        }

    };
    useEffect(() => {
        getPost();
    }, [username, user._id]);
    useEffect(() => {
        console.log(post);
    }, [post]);

    return (
        <>
            <div className="feed">
                <div className="top_div">
                    <Share></Share>
                </div>
                <div className="lower_div">
                    { post.map((val) => {
                        return <Post key={ val.userId } post={ val } ></Post>;
                    }) }
                </div>
            </div>

        </>
    );
};

export default Feed;
