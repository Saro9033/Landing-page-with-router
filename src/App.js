import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Routers/Home';
import Main from './Routers/Main';
import { useLocation } from 'react-router-dom';
import Navbar2 from './Components/Navbar2';
import Movies from './Routers/Movies';
import Sports from './Routers/Sports';
import About from './Routers/About';
import { useState } from 'react';
import Profile1 from './Images/profile1.png'
import Profile2 from './Images/profile2.png'


function App() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [maleProf, setMaleProf] = useState(false)


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleProfile1 = () => {
    setShowModal(false);
    setMaleProf(true)
  };


  return (
    <div style={{ background: 'black' }}>
      {location.pathname === '/' && <Navbar openModal={openModal} />}
      {location.pathname !== '/' && <Navbar2 maleProf={maleProf} />}

      {showModal && (
        <div className="modal fade show d-flex align-items-center justify-content-center " tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header" style={{ height: '50px' }}>
                <h5 className="modal-title text-center">Choose profile</h5>
                <button type="button" className="close" style={{ fontSize: '25px', background: 'black', color: 'white' }} onClick={closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body bg-dark shadow-lg ">
                <div className=" d-flex justify-content-around mt-2 mb-2 border py-5 rounded-4" style={{ width: '300px' }}>
                  <div> <Link to='/main' onClick={handleProfile1}> <img className='rounded-circle ' style={{ width: '100px' }} src={Profile1} alt="Pro1" /> </Link> </div>
                  <div>   <Link to='/main' onClick={closeModal}> <img className='rounded-circle ' style={{ width: '100px' }} src={Profile2} alt="Pro2" /></Link> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route path='/' element={<Home openModal={openModal} />} />
        <Route path='/main' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
