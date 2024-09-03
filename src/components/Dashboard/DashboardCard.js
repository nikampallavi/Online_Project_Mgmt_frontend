import React, { useState } from 'react'
import './Dashboard.css'

const Dashboard = () => {
  const[userData,setUserData]=useState("");
  const data = [
    { id: 1, name: "Total Projects", total: userData.totalProjects },
    { id: 2, name: "Closed", total: userData.totalClosed },
    { id: 3, name: "Running", total: userData.totalRunning },
    { id: 4, name: "Closure", total: userData.closureDelay },
    { id: 5, name: "Cancelled", total: userData.totalCancelled }
]
  return (
    <>
            <div className="card-container">
                {
                    data.map((value,index) => {
                        return (
                            <>
                                <div className="dashboard-card" key={index}>
                                    <p className="card-name">{value.name}</p>
                                    <p className="card-total">{value.total}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
  )
}

export default Dashboard