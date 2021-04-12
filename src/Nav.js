import React, { useContext } from 'react';
import { Route, NavLink } from "react-router-dom";
import Switch from '@material-ui/core/Switch'
import Notebook from './Notebook';
import TodoApp from './TodoApp';
import './Nav.css'
import { ThemeContext } from './contexts/Theme';


export default function Nav() {
  const { darkMode, toggleTheme} = useContext(ThemeContext);

  const styles = {color: darkMode ? 'black' : 'white', textDecoration: 'none', marginRight: '6px', fontSize: '15px', padding: '0.2rem'}
  
  return (
      <div>
        <nav className={darkMode ? 'nav bg-light p-2 d-flex justify-content-between align-items-center' :
         'nav bg-dark p-2 d-flex justify-content-between align-items-center text-white'}>
          <span className=''>
              <NavLink exact activeClassName={darkMode ? 'active-dark': 'active-light'} to='/' style={styles}>Daily-Tasks</NavLink>
  
              <NavLink style={styles} exact activeClassName={darkMode ? 'active-dark': 'active-light'} to='/notebook'>Note-Book</NavLink>
          </span>
          <span>
            {darkMode ? 'Light' : 'Dark'}
            <Switch onChange={_=> toggleTheme()}/>
          </span>
        </nav>
          <Route exact path='/' component={TodoApp}/>
          <Route exact path='/notebook' component={Notebook}/>
      </div>
  )
}
