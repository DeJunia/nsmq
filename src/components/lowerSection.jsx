import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import DataContext from '../context/dataContext'
import homeIcon from '../assets/icons/home.svg'
import homeIconD from '../assets/icons/homedk.svg'
import contestIcon from '../assets/icons/dashboard.svg'
import videoIcon from '../assets/icons/video.svg'
import videoIcondk from '../assets/icons/videodk.svg'
import contestIconD from '../assets/icons/dashboarddk.svg'
import aboutIcon from '../assets/icons/about.svg'
import aboutIconD from '../assets/icons/aboutdk.svg'

const LowerSection = () => {
  const { theme } = useContext(DataContext); 

  return (
    <footer className="Footer">
      <NavLink to="/" className= {({isActive}) => (isActive ? "active-link" : 'nav-link')} >
      {theme == 'light' ? (<img src={homeIconD} width={24} height={24} alt="" />) : (<img src={homeIcon} width={24} height={24} alt="" />)}
      <p>Home</p></NavLink>

      <NavLink to="/contest" className= {({isActive}) => (isActive ? "active-link" : 'nav-link')}>
      {theme == 'light' ? (<img src={contestIconD} width={24} height={24} alt="" />) : (<img src={contestIcon} width={24} height={24} alt="" />)}
      <p>Contest</p></NavLink>

      <NavLink to="/video" className= {({isActive}) => (isActive ? "active-link" : 'nav-link')}>
      {theme == 'light' ? (<img src={videoIcon} width={24} height={24} alt="" />) : (<img src={videoIcondk} width={24} height={24} alt="" />)}
      <p>Videos</p></NavLink>

      <NavLink to="/aboutPg" className= {({isActive}) => (isActive ? "active-link" : 'nav-link')}>
      {theme == 'light' ? (<img src={aboutIcon} width={24} height={24} alt="" />) : (<img src={aboutIconD} width={24} height={24} alt="" />)}
      <p>About</p></NavLink>

     
    </footer>
  )
}

export default LowerSection