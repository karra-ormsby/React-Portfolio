import React, { useState, useContext } from 'react';

export const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

// Accepts an argument of "props", here we plucking off the "children" object.
export default function ThemeProvider({ children }) {
  // Creating our state
  const [darkTheme, setDarkTheme] = useState(false);

  // Method to update our state
  const toggleTheme = () => {
    console.log('inside toggle theme');
    return setDarkTheme((prev) => !prev);
  };

  return (
    // Dark theme and toggle theme are getting provided to the child components
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

