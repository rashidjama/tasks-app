import React, {useEffect, useState, createContext} from 'react'
export const ThemeContext = createContext();

function ThemeProvider(props) {
  const initialMode = JSON.parse(window.localStorage.getItem('darkMode') || false)
  const [darkMode, setMode] = useState(initialMode);

  useEffect(_=> {
    window.localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [ darkMode])

  const toggleTheme = _ => setMode(!darkMode)

  return (
    <ThemeContext.Provider value={{darkMode, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
