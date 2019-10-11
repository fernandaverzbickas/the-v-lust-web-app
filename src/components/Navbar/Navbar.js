import React from 'react'

import Link from 'next/link'
import './Navbar.css'

const Navbar = () => ( 
    <div className="navbar">
        <p className='navItem' id="Submit"><Link href='/submit'><a>SUBMIT YOUR LOOK</a></Link></p>
        <h1 className='navItem' id="Title"><Link href='/'><a>V-LUST</a></Link></h1>
        <p className='navItem' id="Results"><Link href='/results'><a>TOP 10 MOST POPULAR</a></Link></p>
    </div>
)
export default Navbar