import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext, BGThemeContext, themes, BGthemes } from "./themeContext";
import App from './App';

interface Props{
    toggleTheme: () => void;
}

export function ToggleTheme({ toggleTheme }: Props) {
    // const [currentTheme, setCurrentTheme] = useState(themes.light);
    // const [backTheme, setBackTheme] = useState(BGthemes.light);
    const currentTheme = useContext(ThemeContext)
    const backTheme = useContext(BGThemeContext)
    
    return (
      
        <button onClick={toggleTheme}> Toggle Theme </button>
        
    );
   }
   
export default ToggleTheme;

// export function ClickCounter() {
//  const [count, setCount] = useState(0);

//  const handleClick = () => {
//    setCount(count + 1);
//  };

//  useEffect(() => {
//    document.title = `You clicked ${count} times`;
//  }, [count]);

//  const theme = useContext(ThemeContext);
//  return (
//    <div
//      style={{
//        background: theme.background,
//        color: theme.foreground,
//        padding: "20px",
//      }}
//    >
//      <p>You clicked {count} times </p>
//      <button
//        onClick={() => setCount(count + 1)}
//        style={{ background: theme.foreground, color: theme.background }}
//      >
//        Click me
//      </button>
//    </div>
//  );
// }

// Wrapper component to provide context


