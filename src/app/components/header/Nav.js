import { useState, useEffect } from "react";
import Styles from "../../styles/App.module.scss";
import DataJson from "../../data/Data.json";

function getDefaultMode() {
    const savedMode = localStorage.getItem('mode');
    return savedMode ? savedMode : 'light';
}

function getDefaultTextMode() {
    const savedMode = localStorage.getItem('textMode');
    return savedMode === "Dark mode" ? "Light mode" : 'Dark mode';
}

const Nav = () => {
    const navData = DataJson.navbarComponent;
    const [darkMode, setDarkMode] = useState(getDefaultMode());
    const [buttonText, setButtonText] = useState(getDefaultTextMode());

    const toggleTheme = () => {
        darkMode === Styles.dark ? setDarkMode(Styles.light) : setDarkMode(Styles.dark);
        buttonText === "Dark mode" ? setButtonText('Light mode') : setButtonText('Dark mode');
        localStorage.setItem('textMode', buttonText);
    };

    useEffect(() => {
        document.body.className = darkMode;
        localStorage.setItem('mode', darkMode);
    }, [darkMode]);

    return(
        <nav className={Styles.nav}>
            <ul>
                <li>{navData.title}</li>
                <li onClick={toggleTheme}>{buttonText}</li>
            </ul>
        </nav>
    )
}

export default Nav;