import React, { useState } from 'react'
import './ProjectForm.css'
import axios from 'axios'
import { assets } from '../../assets/assets'
import { Header } from 'antd/es/layout/layout'
import Sidebar from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'

function ProjectForm() {
    //  const navigate = useNavigate();

    //  const [projectTheme, setProjectTheme] = useState("")
    //  const [reason, setReason] = useState("Business")
    //  const [types, setTypes] = useState("Internal")
    //  const [division, setDivision] = useState("Filters")
    //  const [category, setCategory] = useState("Quality A")
    //  const [priority, setPriority] = useState("High")
    //  const [department, setDepartment] = useState("Strategy")
    //  const [startDate, setStartDate] = useState("")
    //  const [endDate, setEndDate] = useState("")
    //  const [location, setLocation] = useState("Pune")

    //  const token = localStorage.getItem("uid")

    //  const data = { projectTheme: projectTheme, Reason: reason, Type: types, Division: division, Category: category, Priority: priority, Department: department, start_Date: startDate, End_Date: endDate, Location: location }

    //  async function formSubmit(event) {
    //      event.preventDefault()

    //      await axios.post("http:localhost:5001/projects/newProject", data, {
    //          headers: {
    //              Authorization: `Bearer ${token}`
    //          }
    //      }).then(() => {
    //          return navigate("/createProject")
    //      })

        return (


            <>

                
<div style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between" }}>
                    <div><Sidebar /></div>
 <div style={{ backgroundImage: `url("/login_bg.svg")`, paddingLeft: ' 10px', float: 'left', backgroundSize: '500px', height: '172px', Width: '100%' }} >
    <img src={assets.logo} alt="" className='logo' />
    <h5 className='header'>Create Project</h5>
      <div className="project-form">
      <form action="">
          <div className="project-theme">
              <div class="form-group">
                  <textarea class="form-control" placeholder="Enter Project Theme"></textarea>
              </div>

              <div className="project-submit">
                  <button>Save Project</button>
              </div>
          </div>

          <div className="project-selection">
              <div class="form-group">
                  <label for="exampleFormControlSelect1">Reason</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                      <option>For Business</option>
                      <option>For Personal</option>
                      <option>For Dealership</option>
                      <option>For Transport</option>
                  </select>
              </div>

              <div class="form-group">
                  <label for="exampleFormControlSelect2">Type</label>
                  <select class="form-control" id="exampleFormControlSelect2">
                      <option>Internal</option>
                      <option>External</option>
                      <option>Vendor</option>
                  </select>
              </div>

              <div class="form-group">
                  <label for="exampleFormControlSelect3">Division</label>
                  <select class="form-control" id="exampleFormControlSelect3">
                      <option>Filters</option>
                      <option>Compressor</option>
                      <option>Pumps</option>
                      <option>Glass</option>
                      <option>Water Heater</option>
                  </select>
              </div>

              <div class="form-group">
                  <label for="exampleFormControlSelect4">Category</label>
                  <select class="form-control" id="exampleFormControlSelect4">
                      <option>Quality A</option>
                      <option>Quality B</option>
                      <option>Quality C</option>
                      <option>Quality D</option>
                  </select>
              </div>

              <div class="form-group">
                  <label for="exampleFormControlSelect5">Priority</label>
                  <select class="form-control" id="exampleFormControlSelect5">
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                  </select>
              </div>

              <div class="form-group">
                  <label for="exampleFormControlSelect6">Department</label>
                  <select class="form-control" id="exampleFormControlSelect6">
                      <option>Strategy</option>
                      <option>Finance</option>
                      <option>Quality</option>
                      <option>Maintainance</option>
                      <option>Stores</option>
                      <option>HR</option>
                  </select>
              </div>

              <div class="form-group">
                  <label for="exampleFormControlSelect7">Start Date as per Project Plan</label>
                  <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>

              <div class="form-group">
                  <label for="exampleFormControlSelect8">End Date as per Project Plan</label>
                  <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>

              <div class="form-group">
                  <label for="exampleFormControlSelect9">Location</label>
                  <select class="form-control" id="exampleFormControlSelect9">
                      <option>Pune</option>
                      <option>Delhi</option>
                      <option>Mumbai</option>
                      <option>Banglore</option>
                  </select>
              </div>
          </div>
      </form>
  </div>
  </div>
  </div> 
  </>    

        )
    }


export default ProjectForm