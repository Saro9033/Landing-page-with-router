import React from 'react'
import '../App.css'
import Logo from '../Images/logo.png'
import { Link } from 'react-router-dom'


const Navbar = ({ openModal }) => {

    return (
        <nav id='navbar' className="navbar navbar-expand-sm px-1 navbar-dark py-3" style={{ background: 'black', color: 'white', zIndex: '1', position: 'sticky', top: '0' }}   >
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-dark bg-info rounded-3 px-1  pb-2 pt-1" >
                    <img src={Logo} width='70px' alt="Logo" />
                </Link>

                <div className="justify-content-end" >
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <button className="nav-link px-2 bg-success text-light rounded-2" onClick={openModal} to='/main'> Sign In </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar