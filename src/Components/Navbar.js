import React from 'react'
import '../App.css'
import Logo from '../Images/logo.png'
import { Link } from 'react-router-dom'


const Navbar = ({openModal}) => {

    return (
        <nav id='navbar' className="navbar navbar-expand-sm px-1 navbar-dark py-3" style={{background:'black', color:'white', zIndex:'1', position:'sticky', top:'0'}}   >
            <div className="container-fluid"> 
            <Link to="/" className="navbar-brand text-dark bg-info rounded-3 px-1  pb-2 pt-1" >
                <img src={Logo} width='70px' alt="Logo" />
	    </Link>   
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item px-3">
                            <Link className="nav-link " style={(window.innerWidth > 574) ? {backgroundColor:'blue', color:'white', borderRadius:'5px'} : null } to='/'> Home </Link>
                        </li>
                        <li className="nav-item px-3">
                            <button className="nav-link" onClick={openModal} to='/main'> Sign in </button>
                        </li>
                    </ul>
                </div>               
            </div>
        </nav>
    )
}

export default Navbar