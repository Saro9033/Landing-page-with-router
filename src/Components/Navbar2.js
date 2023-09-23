import React from 'react'
import '../App.css'
import Logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import  Profile1 from '../Images/profile1.png'
import  Profile2 from '../Images/profile2.png'

const Navbar2 = ({maleProf}) => {

    return (
        <nav id='navbar' className="navbar navbar-expand-sm px-1 navbar-dark py-3" style={{background:'black', color:'white', zIndex:'1', position:'sticky', top:'0'}}   >
            <div className="container-fluid"> 
            <a href="/" className="navbar-brand text-dark bg-info rounded-3 px-1  pb-2 pt-1" >
                <img src={Logo} width='70px' alt="Logo" />
	    </a>   
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item px-3">
                            <Link className="nav-link " style={(window.innerWidth > 574) ? {backgroundColor:'blue', color:'white', borderRadius:'5px'} : null } to='/main'> Home </Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link " to='/movies'> Movies </Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link " to='/sports'> Sports </Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link " to='/about'> About </Link>
                        </li>
                    </ul>
                    <img className='rounded-circle 'style={{width:'50px'}} src={maleProf ? Profile1 : Profile2} alt="" />              

                </div> 
            </div>
        </nav>
    )
}

export default Navbar2