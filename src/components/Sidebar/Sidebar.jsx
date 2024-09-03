import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    
    <div className="sidebar-content bg-light">
      <ul className='nav flex-column'>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
          <img src={assets.dashboard} alt=''></img>
          <span className='d-block'></span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
          <img src={assets.create_project} alt=''></img>
          <span className='d-block'></span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
          <img src={assets.project_list} alt=''></img>
          <span className='d-block'></span>
          </Link>
        </li>
        
      
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
          <img src={assets.logout} alt='' className='logout'></img>
          <span className='d-block'></span>
          </Link>
        </li>
        </ul>


     
    
    
    </div>
  )
}

export default Sidebar