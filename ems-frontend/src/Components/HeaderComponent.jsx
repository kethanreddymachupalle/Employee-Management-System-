import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
      <nav className='navigation' style={{textAlign: 'center', 
        backgroundColor: 'black', 
        color: 'white', 
        marginBottom: '20px', 
        padding: '10px'
        }}>
        <h2>Employee Management System</h2>
        <h5>(If you are visiting it in mobile Please open in desktop mode)</h5>
      </nav>
    </div>
  )
}

export default HeaderComponent