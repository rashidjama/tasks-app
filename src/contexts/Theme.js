import React, {useState, createContext} from 'react'
export const ThemeContext = createContext();

function ThemeProvider(props) {
  const [darkMode, setMode] = useState(false);

  const toggleTheme = _ => setMode(!darkMode)

  return (
    <ThemeContext.Provider value={{darkMode, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
