import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return<div className='Header'>
        <IconButton>
        <PersonIcon fontSize="large" className="header_icon"/>
        </IconButton>

        <img
            className="header_logo"
            src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
            alt=""
            />
    <IconButton>
        <ForumIcon fontSize="large" className="header_icon"/> 
        
    </IconButton>
    </div>;
}

export default Header;

