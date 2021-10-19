import React from 'react';
import "./Header.css";
import { MdSearch, MdPeople, MdGroup } from 'react-icons/md';
import { MdFlag } from 'react-icons/md'; 
import { MdHome } from 'react-icons/md'; 
import { MdSubscriptions } from 'react-icons/md'; 
import {MdStore} from 'react-icons/md';
import {FaUser, FaPlus, FaFacebookMessenger,FaBell, FaChevronCircleDown} from 'react-icons/fa';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Akash_rajoriya_Facebook_.png/120px-Akash_rajoriya_Facebook_.png"
                />
                <div className="header__input">
                <MdSearch fontSize="large" className="sidebarIcon"/><input type="text" placeholder="Search facebook..."/>
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option">
                    <button style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><MdHome className="sidebarIcon" fontSize="large" /></button>
                </div>
                <div className="header__option">
                <button style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><MdFlag className="sidebarIcon" fontSize="large" /></button>
                </div>
                <div className="header__option">
                <button style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><MdSubscriptions className="sidebarIcon" fontSize="large" /></button>
                </div>
                <div className="header__option">
                <button style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><MdStore className="sidebarIcon" fontSize="large" /></button>
                </div>
                <div className="header__option">
                <button style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><MdGroup className="sidebarIcon" fontSize="large" /></button>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                <button className="imgpro" style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><FaUser className="sidebarIcon" /> <h4 className="username">Tard la nuit</h4></button>
                </div>
                <button style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><FaPlus  fontSize= "large"/></button>
                <button style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><FaFacebookMessenger fontSize= "large"/></button>
                <button style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><FaBell fontSize= "large"/></button>
                <button style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><FaChevronCircleDown fontSize= "large"/></button>
            </div>
        </div>
    );
}

export default Header
