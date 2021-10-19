import React from 'react';
import "./SidebarRow.css";
import  {FaUser} from 'react-icons/fa';
function SidebarRow({title}) {
    return (
        <div className="sidebarRow">
            <p>{title}</p>
        </div>
    );
}

export default SidebarRow;
