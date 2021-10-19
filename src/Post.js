import React from 'react';
import "./Post.css";
import {FaUser, FaComment, FaShare,FaUserCircle} from 'react-icons/fa';
import {AiFillLike} from 'react-icons/ai';

function Post({profilePic,username,message,image}) {
    return (
        <div className="post">
            <div className="post__top"></div>
            <div className="">
                <FaUser scr={profilePic}
                className="post__avatar"/>
                <div  className="post__topInfo">
                    <h3>{username}</h3>
                    <p>Timestamp...</p>
                </div>
            </div>
            <div className="post__botton">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt=""/>
            </div>
            <div className="post__options">
                <div className="post__option">
                <AiFillLike />
                <p>Like</p>
                </div>
                <div className="post__option">
                <FaComment />
                <p>Comment</p>
                </div>
                <div className="post__option">
                <FaShare />
                <p>Share</p>
                </div>
                <div className="post__option">
                <FaUserCircle />
                <p>Like</p>
                </div>
            </div>
        </div>
    )
}

export default Post;
