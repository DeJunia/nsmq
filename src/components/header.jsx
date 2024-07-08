import React, { useContext } from 'react'
import DataContext from '../context/dataContext'
import searchIcon from '../assets/icons/search.svg'
import searchIconDark from '../assets/icons/searchdk.svg'
import settingIcon from '../assets/icons/setting.svg'
import settingIconDark from '../assets/icons/settingdk.svg'
import closeIcon from '../assets/icons/close.svg'
import closeIconDark from '../assets/icons/closedk.svg'

const Header = () => {

  const { theme, toggleLightMode, toggleDarkMode, logo, query, setQuery, isSearching, handleButtonClick, handleInputClick } = useContext(DataContext);
  
  const iconSrc = isSearching
  ? (theme === 'light' ? closeIcon : closeIconDark)
  : (theme === 'light' ? settingIcon : settingIconDark);

  return (
    <header>
      <h1>{logo}</h1>
      <div className="searchBar">
          <form
          onSubmit={(e)=> e.preventDefault()}
          >
          {theme == 'light' ? (<img src={searchIcon} width={24} height={24} alt="" />) : (<img src={searchIconDark} width={24} height={24} alt="" />)}
            <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClick={handleInputClick}
            placeholder='Search for Contests, Posts...' />
          </form>
        <button onClick={handleButtonClick}>
          <img src={iconSrc} width={24} height={24} alt="" />
        </button>
      </div>     
      <div className="modes">
        <button className='mode light' onClick={toggleLightMode}></button>
        <button className='mode dark'
        onClick={toggleDarkMode}></button>
      </div>
    </header>
  )
}

export default Header