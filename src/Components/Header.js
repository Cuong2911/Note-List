import React from "react";
import { MdModeNight, MdLightMode } from "react-icons/md";
import './Header.css';
const Header = ({ handleToggleDarkMode, darkMode }) => {
    return (
        <header className="header">
            <h1 className="header-title">
                <img src="https://logos-world.net/wp-content/uploads/2021/08/Among-Us-Logo.png" alt="logo" />
                Notes
            </h1>
            <button className="toggle-btn" onClick={() => {
                handleToggleDarkMode((prev) => !prev)
            }}>
                {darkMode || <MdModeNight className="toggle-icon" size="1.5em"/>}
                {darkMode && <MdLightMode className="toggle-icon" size="1.5em"/>}
            </button>
        </header>
    )
};

export default Header;