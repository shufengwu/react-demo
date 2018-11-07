import React from 'react';
export const themes = {
    light: {
        color: '#000000',
        background: '#FFFFFF',
    },
    dark: {
        color: '#FFFFFF',
        background: '#000000',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // 默认值
);