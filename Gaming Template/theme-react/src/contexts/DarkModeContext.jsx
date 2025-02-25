// src/contexts/DarkModeContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);
    const [gamesList, setGamesList] = useState([]);


    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode) {
            setDarkMode(savedMode === 'true');
            document.documentElement.classList.toggle('dark', savedMode === 'true');
        } else {
            document.documentElement.classList.add('dark'); // Default to dark mode
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', newMode);
            document.documentElement.classList.toggle('dark', newMode);
            return newMode;
        });
    };

    const getGameListFunc = async () => {
        const api_res = await axios.get("https://pub.gamezop.com/v3/games?id=9632&lang=en")
        setGamesList(api_res?.data?.games)
    }
    useEffect(() => {
        getGameListFunc();
    }, []);
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, gamesList }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    return useContext(DarkModeContext);
};
