import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';


const Header = () => {
    return (
        <div className="flex justify-between">
            <div className="">
                <h1>Dashboard</h1>
            </div>
            <div className='flex'>
                <div className="">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="px-3">
                    <i className="fas fa-bell"></i>
                </div>
                <div className="header__profile">
                    <img src="path-to-profile-image" alt="Profile" />
                </div>
            </div>
        </div>
    );
};

export default Header;
