import React from 'react'
import Logo from '../Images/logo.png'


const Footer = () => {
    return (
            <div className='d-flex flex-wrap text-light pt-5 text-center' style={{ backgroundColor: 'black' }} >
                <div className='col-12 col-lg-4 '>
                    <a href="/"><img width='180px' className='bg-info p-3 rounded-3' src={Logo} alt="" /></a>

                </div>
                <div className='col-12 col-lg-4 pb-5 pt-3'>
                    <ul className='navbar-nav '>
                        <li className="nav-item">
                            <a className="nav-link rounded-2" href='/'>Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link rounded-2" href='/'>About us</a>
                        </li> <li className="nav-item">
                            <a className="nav-link rounded-2" href='/'>Contact us</a>
                        </li> </ul>

                </div>
                <div className='col-12 col-lg-4 '>
  <div className="pb-5  d-flex justify-content-around">     
   <a className="btn text-white btn-floating "
        style={{backgroundColor: '#3b5998'}}
        href="#!"
        role="button"><i className="fab fa-facebook-f"></i></a>

      <a className="btn text-white btn-floating "
        style={{backgroundColor: '#55acee'}}
        href="#!"
        role="button"
        ><i className="fab fa-twitter"></i></a>

      <a className="btn text-white btn-floating "
        style=  {{backgroundColor: '#dd4b39'}}
        href="#!"
        role="button"
        ><i className="fab fa-google"></i></a>

      <a
        className="btn text-white btn-floating "
        style=  {{backgroundColor: '#ac2bac'}}
        href="#!"
        role="button"
        ><i className="fab fa-instagram"></i></a>

  </div>
                </div>

            </div>
    )
}

export default Footer


