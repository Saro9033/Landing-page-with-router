import React from 'react'
import ImageHover from '../Components/ImageHover';


const Sports = () => {

  const asiaCup = [
    {
      title: "Kuldeep Bests",
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2139/1592139-h-81e1a539b2f1',
      description: "",
    },
    {
      title: 'Kohli Century',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/351/1590351-h-61bf9fbf8837',
      description: "",
    },
    {
      title: 'Siraj Four Wickets in a Over ',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5143/1595143-h-764ed3fe472f',
      description: " ",
    },
    {
      title: 'Rohul Century',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/363/1590363-h-6880b79336fb',
      description: "",
    }
  ]

  const worldCUp = [
    {
      title: "INDIA's POWER",
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5608/1495608-h-4d0daa07c335',
      description: "",
    },
    {
      title: 'INDIA SQUAL REVEAL',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2295/1582295-h-d947d7bf7674',
      description: "",
    },
    {
      title: 'IND vs PAK on 15th OCT ',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4150/1544150-h-619438017cd4',
      description: " ",
    },
    {
      title: 'AUS vs NZ on 20th OCT ',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4178/1544178-h-dbb510ecd899',
      description: "",
    }
  ]



  const Football = [
    {
      title: "Best of GW 5 ft.DOKU",
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5513/1595513-h-4561305f2da0',
      description: "",
    },
    {
      title: 'ft.TROSSARD',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5506/1595506-h-6bc0f48ff088',
      description: "",
    },
    {
      title: 'ft. SZOBOSZLAI',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/1737/1581737-h-5f208a9f9f0e',
      description: " ",
    },
    {
      title: 'Best Saves of ft.ALISSON',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7371/1577371-h-15cc9b87441e',
      description: "",
    }
  ]
  return (
    <div style={{ background: 'black' }} className='pt-3'>
      <div className='container '>
        <h3 className='text-light '>Best of AsiaCup 2023</h3>
        <div className='d-flex mb-4 align-items-center justify-content-center' style={window.innerWidth < 700 ? { flexWrap: 'wrap' } : null}>
          {asiaCup.map((movie, index) => (
            <div key={index} style={window.innerWidth < 700 ? { width: '50%' } : null}>

              <ImageHover
                key={index}
                imageUrl={movie.imageUrl}
                title={movie.title}
                description={movie.description}
              /> </div>
          ))}
        </div>
      </div>

      <div className='container '>
        <h3 className='text-light '>ICC WCC 2023 Updates</h3>
        <div className='d-flex mb-4  align-items-center  justify-content-center' style={window.innerWidth < 700 ? { flexWrap: 'wrap' } : null}>
          {worldCUp.map((movie, index) => (
            <div key={index} style={window.innerWidth < 700 ? { width: '50%' } : null}>
              <ImageHover
                key={index}
                imageUrl={movie.imageUrl}
                title={movie.title}
                description={movie.description}
              /> </div>
          ))}
        </div>
      </div>

      <div className='container '>
        <h3 className='text-light '>Football </h3>
        <div className='d-flex pb-5 align-items-center  justify-content-center' style={window.innerWidth < 700 ? { flexWrap: 'wrap' } : null}>
          {Football.map((movie, index) => (
            <div key={index} style={window.innerWidth < 700 ? { width: '50%' } : null}>

              <ImageHover
                key={index}
                imageUrl={movie.imageUrl}
                title={movie.title}
                description={movie.description}
              />  </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Sports