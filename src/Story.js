import React from 'react';
import "./Story.css";
import { FaUser } from 'react-icons/fa';

function Story({image,profileSrc, title}){
    return <div style={{ backgroundImage: `url(${image})`}} className="story">
            <img className="pflfeed" src={profileSrc} />
            <h4>{title}</h4>
        </div>;
}


export default Story;