import React, { useContext } from 'react';
import { ThemeContext } from './contexts/Theme';

function PageContent(props) {
  const { darkMode } = useContext(ThemeContext)
  const styles = {
    width: '100vw',
    height: '100vh',
    backgroundColor: darkMode ? '#333' : '#fff',
    overflowY: 'scroll',
  }
  return (
    <div style={styles}>
      {props.children}
    </div>
  )
}
export default PageContent
