import React, {useContext, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import homeIcon from '../assets/icons/home.svg'
import dashIcon from '../assets/icons/dashboard.svg'
import aboutIcon from '../assets/icons/aboutdk.svg'
import searchIcon from '../assets/icons/search.svg'
import searchIconDark from '../assets/icons/searchdk.svg'
import settingIcon from '../assets/icons/setting.svg'
import settingIconDark from '../assets/icons/settingdk.svg'
import closeIcon from '../assets/icons/close.svg'
import closeIconDark from '../assets/icons/closedk.svg'
import DataContext from '../context/dataContext'

const Nav = () => {
  const { theme, logo, query, setQuery, isSearching, handleButtonClick, handleInputClick } = useContext(DataContext);
  const date = new Date();
  const iconSrc = isSearching
  ? (theme === 'light' ? closeIcon : closeIconDark)
  : (theme === 'light' ? settingIcon : settingIconDark);
  
  return (
    <nav className="Nav">
      <h1>{logo}</h1>
      <ul>
        <NavLink to='/' 
        className={({isActive}) => (isActive ? 'activeSideLink' : 'sideLink')}><img 
        src={homeIcon} 
        width={24} 
        height={24} alt="" /> 
          <p>Home</p>
        </NavLink>

        <NavLink to='/contest' 
        className={({isActive}) => (isActive ? 'activeSideLink' : 'sideLink')}><img 
        src={dashIcon} 
        width={24} 
        height={24} alt="" /> 
          <p>Contest</p>
        </NavLink>

        <NavLink to='/aboutPg' 
        className={({isActive}) => (isActive ? 'activeSideLink' : 'sideLink')}><img 
        src={aboutIcon} 
        width={24} 
        height={24} alt="" /> 
          <p>About</p>
        </NavLink>
        
      </ul>
      <p>Copyright &copy; {date.getFullYear()}</p>

        <form >
          {theme == 'light' ? (<img src={searchIcon} width={24} height={24} alt="" />) : (<img src={searchIconDark} width={24} height={24} alt="" />)}
          
          <input 
            type="text"
            placeholder='Search for Contests, Posts...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
             onClick={handleInputClick}
          />
        </form>

        <button 
        onClick={handleButtonClick}>
          <img src={iconSrc} width={24} height={24} alt="" />
        </button>

    </nav>
  )
}

export default Nav