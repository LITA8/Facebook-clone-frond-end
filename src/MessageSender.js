import React, {useState} from 'react';
import "./MessageSender.css";
import { FaUser, FaVideo, FaPhotoVideo, FaCreativeCommonsSampling } from 'react-icons/fa';

export default function MessageSender() {
    const{input, setInput}=  useState('');
    const{imageUrl, setImageUrl}=  useState('');


    const handleSubmit=(e)=>{
        e.preventDeafault();
        setInput('');
        setImageUrl('');
    };
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                    <FaUser fontSize="large"/>
                    <form>
                        <input
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                            className="messageSender__input"
                         type="text" placeholder="what is on your mind"/>

                        <input
                        value={imageUrl}
                        onChange={(e)=>setImageUrl(e.target.value)}
                        placeholder="image Url (optional)"/>
                            
                        <button onClick={handleSubmit} type="submit" >
                            Hidden submit
                        </button>
                    </form>
                    <div className="messageSender__botton">
                        <div className="messageSender__option">
                            <FaVideo style={{color:"red"}} />
                            <h3>Live Video</h3>
                        </div>
                        <div className="messageSender__option">
                            <FaPhotoVideo style={{color:"green"}} />
                            <h3>Photo/Video</h3>
                        </div>
                        <div className="messageSender__option">
                            <FaCreativeCommonsSampling style={{color:"orange"}} />
                            <h3>Feeling/Activity</h3>
                        </div>
                    </div>
            </div>
            <div className="messageSender__botton"> </div>
        </div>
    )
}
