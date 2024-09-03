import React from 'react'
import DashboardGraph from './DashboardGraph'
import DashboardCard from './DashboardCard'
import Sidebar from '../Sidebar/Sidebar'
import './Dashboard.css'
import {assets} from '../../assets/assets'

const MainDashboard = () => {
  return (
    
    <>
    <div className='main-dashboard'>
    <div style={{backgroundImage:`url("/login_bg.svg")`,height:'90px',marginLeft:'60px'}} >
            <h1 className='header-name'>Dashboard</h1></div>
    {/* < div style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between" }}> */}
    <Sidebar />
        <DashboardCard/>
        <DashboardGraph/>
    </div>
    {/* </div> */}
    </>
               
                
  )
}

export default MainDashboard