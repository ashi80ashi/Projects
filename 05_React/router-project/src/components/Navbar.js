import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'

function Navbar({isLoggedIn,setIsLoggedIn}) {
  return (
   <div className='bg-slate-800  flex flex-row items-center justify-between h-20  text-white px-5'>
       
       <div><Link to="/"> <img src={Logo} alt="logo" /></Link> </div>

       <div className='flex gap-20 text-xl font-bold'>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
       </div>

       <div className='flex flex-row gap-5' >
       {!isLoggedIn && <Link to="/login"><button>LogIn</button></Link>}
       {!isLoggedIn && <Link to="/singup"><button>SignUp</button></Link>}
       {isLoggedIn && <Link to="/"><button onClick={()=>{setIsLoggedIn(false)}}>LogOut</button></Link>}
       {isLoggedIn && <Link to="/dashboard"><button >Dashboard</button></Link>}
       </div>

   </div>
  )
}

export default Navbar
