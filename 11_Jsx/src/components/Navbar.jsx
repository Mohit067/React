import React from 'react'

const Navbar = () => {
  return (
    <div >
        <div className="h-12 bg-amber-500 w-screen flex gap-23 items-start">
            <p>Logo</p>
            <div>
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
                <span>Service</span>
                <span>Help</span>
            </div>
            <p>Cart</p>
        </div>
    </div>
  )
}

export default Navbar