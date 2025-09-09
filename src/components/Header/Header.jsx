import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { DarkModeIcon, HeaderWrapper, LightModeIcon } from './Header.styled';
import {ReactComponent as Logo} from "../../assets/svgs/tic-tac-toe.svg"


function Header() {
    const { theme, toggleTheme} = useContext(ThemeContext)
  return (
    <HeaderWrapper>
      <Logo className="logo"/>
      <span onClick={() => toggleTheme()}>
        {theme ==="light" ? <LightModeIcon/> : <DarkModeIcon/>}
      </span>
      {/* <button onClick={() => toggleTheme()}>Toggle Theme</button> */}
      
      
    </HeaderWrapper>
  )
}

export default Header
