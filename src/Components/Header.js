import React from "react";
import { MdModeNight, MdLightMode } from "react-icons/md";
import './Header.css';
const Header = ({ handleToggleDarkMode, darkMode }) => {
    return (
        <header className="header">
            <h1 className="header-title">Notes</h1>
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