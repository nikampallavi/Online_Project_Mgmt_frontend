import React, { useState } from 'react'
import { Button, Form,Input} from 'antd';
import {Link,useNavigate} from 'react-router-dom';
import './Login.css'
import axios from 'axios';
import {assets} from '../../assets/assets'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisible,setPasswordVisible]=useState("")

  

  const navigate = useNavigate()

  const data = {
      email,
      password,
  };

  async function handleSubmit(event) {
      event.preventDefault();
      if(!email ||!password){
        console.log("Please fill in all fields")
      }
      try {
          const result = await axios.post("http://localhost:5001/api/user/login", data);
          // if(response.data.success)
          // {
            await localStorage.setItem("uid",result.data.token)
          navigate("/dashboard")
          //   }
          // else{
            setErrorMessage("Invalid credential");
          // }
      } catch (error) {
        
          if (error.response && error.response.data) {
              setErrorMessage(error.response.data.err || "An error occurred during login.");
          }
          
      }
  }
 
  
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };

      const handleClick=()=>{
        alert("hello")
      }
      
  
    return (
      <div style={{backgroundImage:`url("/login_bg.svg")`,backgroundSize:'100%',height:'310px'}} >
        <img src={assets.logo}alt="" className='logo'></img>
            <h1 className='name'>Online Project Management</h1>    
          <div className='authentication' >
        
          <div className='authentication-form card p-3'>
              <h1 className='card-title'style={{ textAlign: 'center' }}>Login to get started</h1>
              <Form layout='vertical'  onSubmit={handleSubmit}>
                  <Form.Item label='Email' name='email'>
                      <Input placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                  </Form.Item>
                  <Form.Item label='Password' name='password'>
                  <Input placeholder='Password'onChange={(e)=>setPassword(e.target.value)} type={passwordVisible ? 'text' : 'password'} 
                      suffix={
                        <img
                          src={assets.hide_password}
                          alt='Toggle Password Visibility'
                          onClick={togglePasswordVisibility}
                          style={{ cursor: 'pointer', width: '20px', height: '20px' }}
                        />
                      }/>
                      <h6 style={{color:'skyblue',paddingLeft:'220px'}}>Forgot password?</h6>
                  </Form.Item>
                  
                  
                  {/* <Button className='primary-button my-2' htmlType='submit' type='primary'>LOGIN</Button> */}
                  <button  className='primary-button my-2' type='submit' onClick={handleSubmit}>Login</button>
              </Form>
          </div>
  
      </div>
      </div>
    )
}

export default Login