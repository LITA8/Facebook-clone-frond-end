import React from 'react';
import  "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { MdGroup } from 'react-icons/md';
import { MdFlag } from 'react-icons/md'; 
import { MdHome } from 'react-icons/md'; 
import { MdSubscriptions } from 'react-icons/md'; 
import {MdStore} from 'react-icons/md';
import {FaUser} from 'react-icons/fa';
function Sidebar() {
    return (
        <div className="sidebar">
           
                <button className="btnsidebar" style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}>
                    <FaUser className="sidebarIcon" fontSize="large" />
                    <SidebarRow title='User'/>
                </button>
                <button  className="btnsidebar" style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><MdHome className="sidebarIcon" fontSize="large" /><SidebarRow title='pages'/></button>
           
                <button  className="btnsidebar" style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><MdFlag className="sidebarIcon" fontSize="large" /><SidebarRow title='Friend'/></button>

            
                <button className="btnsidebar" style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><MdSubscriptions className="sidebarIcon" fontSize="large" /><SidebarRow title='Friend'/></button>

          
                <button className="btnsidebar" style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><MdStore className="sidebarIcon" fontSize="large" /><SidebarRow title='Friend'/></button>

                <button className="btnsidebar" style={{backgroundColor:'transparent', border:'none',cursor:'pointer'}}><MdGroup className="sidebarIcon" fontSize="large" /><SidebarRow title='Friend'/></button>
        </div>
    );
}

export default Sidebar
