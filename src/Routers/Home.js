import React from 'react'

const Home = ({ openModal }) => {
    return (
        <div >
            <div style={window.innerWidth < 525 ? { textAlign: 'center', fontSize: '16px', paddingLeft: '3px', paddingRight: '3px' } : { paddingLeft: '40px' }} className='text-light d-flex flex-column align-items-start justify-content-center' id='cont1'>

                <h1 style={window.innerWidth < 525 ? { fontSize: '36px' } : { fontSize: '46px' }} className='w-100'>Free Movies & TV</h1>
                <h1 style={window.innerWidth < 525 ? { fontSize: '36px' } : { fontSize: '46px' }} className='w-100'> Fewer Ads than Cable </h1>
                <h1 style={window.innerWidth < 525 ? { fontSize: '36px' } : { fontSize: '46px' }} className='w-100'>No Subscription Required</h1>
                <p className='pt-3  w-100'>Thousands of movies and TV shows. Always Free. 100% Legal.</p>
                <div className='w-100' style={window.innerWidth < 525 ? { alignItems: 'center' } : null}>
                    <button onClick={openModal} className='mt-1 btn btn-success rounded-2'>Start Watching</button>
                </div>
            </div>

            <div className='text-center my-5 text-light'>
                <h1 className='mt-3 mb-5 ' style={{ fontSize: '50px', fontWeight: 'bold' }}>Stream Anywhere</h1>
                <p id='p2' className='mb-3'>Tubi is available for free on Android, iOS, <br /> Roku, Apple TV, Amazon Fire TV, Xfinity X1,<br /> Xbox, Samsung Smart TVs, Sony Smart TVs,<br /> PlayStation and the web.</p>
                <button className='btn btn-dark px-3 py-2'>Supported Device</button>
            </div>

            <div className='text-light text-center mb-5 d-flex flex-column justify-content-center' id='cont2'>
                <div>
                    <h1 style={window.innerWidth < 525 ? { fontSize: '46px' } : { fontSize: '76px' }} className='pt-5 w-100'>Thousands of titles</h1>
                    <p style={{ fontSize: '21px' }} className='pt-5 px-4 w-100'>Watch amazing movies and TV shows for free.<br /> No subscription fees, and no credit cards.<br /> Just thousands of hours of streaming video content from studios<br /> like Paramount, Lionsgate, MGM and more.</p>
                    <img style={{ width: '80px' }} className='pt-5 pb-5' src="//d0.tubitv.com/web-k8s/dist/img/64c09dd623e4.png" alt="MGM logo" />
                </div>
            </div>

        </div>
    )
}

export default Home