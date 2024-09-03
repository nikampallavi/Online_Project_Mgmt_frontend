import React from 'react'

const Header = (props) => {
  return (
    // <div style={{backgroundImage:`url("/login_bg.svg")`,backgroundSize:'100%',height:'320px'}} >
    //     <img src={assets.logo} alt="" className='logo'></img>
        
    //     </div>
    <>
      <div className="homepage-header">
        <div className="homepage-titles">
          <div><p>{props.title}</p></div>
          <div className="homepage-logo"></div>
        </div>
      </div>
    </>
  )
}

export default Header