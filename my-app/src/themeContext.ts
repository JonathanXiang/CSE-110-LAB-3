// ThemeContext.ts
import React from 'react';

export const themes = {
 light: {
   foreground: '#000000',
   background: '#f9f9f9',
 },
 dark: {
   foreground: '#ffffff',
   background: '#222222',
 },
};

export const BGthemes = {
    light: {
      foreground: '#000000',
      background: '#d3d3d3',
    },
    dark: {
      foreground: '#ffffff',
      background: '#545454',
 },
};
export const ThemeContext = React.createContext(themes.light);
export const BGThemeContext = React.createContext(BGthemes.light);