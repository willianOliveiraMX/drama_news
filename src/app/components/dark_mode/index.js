'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const DarkMode = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
        
        setIsDark(isDarkMode);
        
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        
        if (newIsDark) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');

            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');

            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div>
            <button 
                onClick={toggleTheme}
                className={`cursor-pointer transition-opacity duration-300 ${isDark ? 'hidden' : 'block'}`}
                aria-label="Ativar modo escuro"
            >
                <Image className="w-8" src="/svg/sun.svg" alt="Light Mode" width={32} height={32} />
            </button>
            <button 
                onClick={toggleTheme}
                className={`cursor-pointer transition-opacity duration-300 ${isDark ? 'block' : 'hidden'}`}
                aria-label="Ativar modo claro"
            >
                <Image className="w-8" src="/svg/moon.svg" alt="Dark Mode" width={32} height={32} />
            </button>
        </div>
    );
};

export default DarkMode;