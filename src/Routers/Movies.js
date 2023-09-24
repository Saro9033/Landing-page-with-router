import React from 'react'
import ImageHover from '../Components/ImageHover';


const Movies = () => {
  const tamilAction = [
    {
      title: "KAALA",
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/old_images/vertical/MOVIE/7977/1000217977/1000217977-v',
      description: "",
    },
    {
      title: 'MADRAS',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/old_images/vertical/MOVIE/8493/1000058493/1000058493-v',
      description: "",
    },
    {
      title: 'MAARI ',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/old_images/vertical/MOVIE/6071/1000076071/1000076071-v',
      description: " ",
    },
    {
      title: 'SATHU RANGA VETTAI',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/old_images/vertical/MOVIE/8080/1000058080/1000058080-v',
      description: "",
    },
    {
      title: 'THUPPAKI',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/old_images/vertical/MOVIE/5948/1000035948/1000035948-v',
      description: "",
    },
    {
      title: 'PICHAIKAARAN',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/8641/1538641-v-ef121d8c53b0',
      description: "",
    }
  ]

  const tamilThriller = [
    {
      title: "BAGHUBALI 2",
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/old_images/vertical/MOVIE/6247/1770016247/1770016247-v',
      description: "",
    },
    {
      title: 'IB71',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3373/1543373-v-628b5e8c47f7',
      description: "",
    },
    {
      title: 'SOPPANA SUNDARI ',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/465/1520465-v-8147cb53d12f',
      description: " ",
    },
    {
      title: 'BOOMI',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/2913/882913-v',
      description: "",
    },
    {
      title: 'THROUPATHI',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5099/1535099-v-0710e6707993',
      description: "",
    },
    {
      title: 'DEAR COMRAD',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5336/885336-v',
      description: "",
    }
  ]

  const Horror = [
    {
      title: "CREATURE",
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/old_images/vertical/MOVIE/1223/1000101223/1000101223-v',
      description: "",
    },
    {
      title: 'DAKINI',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3750/773750-v',
      description: "",
    },
    {
      title: 'PIZZA 3',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/old_images/vertical/MOVIE/1158/1000071158/1000071158-v',
      description: " ",
    },
    {
      title: '1920',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/2139/1572139-v-906f6abcacd1',
      description: "",
    },
    {
      title: 'THE PAST',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/1665/581665-v',
      description: "",
    },
    {
      title: '2 AM',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/2456/1282456-v-d59f2acafedc',
      description: "",
    }
  ]
  return (
    <div style={{ background: 'black' }} className='container'>

      <div className="container">
        <h3 className="text-light">Tamil Action Movies</h3>
        <div className="d-flex align-items-center justify-content-center" style={window.innerWidth < 580 ? { flexWrap: 'wrap' } : null}>
          {tamilAction.map((movie, index) => (
            <div key={index} style={window.innerWidth < 580 ? { width: '33%' } : null}>
              <ImageHover
                imageUrl={movie.imageUrl}
                title={movie.title}
                description={movie.description} />
            </div>
          ))}
        </div>
      </div>

      <div className='container '>
        <h3 className='text-light '>Tamil Thriller Movies</h3>
        <div className='d-flex align-items-center  justify-content-center' style={window.innerWidth < 580 ? { flexWrap: 'wrap' } : null}>
          {tamilThriller.map((movie, index) => (
            <div key={index} style={window.innerWidth < 580 ? { width: '33%' } : null}>
              <ImageHover
                key={index}
                imageUrl={movie.imageUrl}
                title={movie.title}
                description={movie.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='container '>
        <h3 className='text-light '>Horror Movies</h3>
        <div className='d-flex mb-5 align-items-center  justify-content-center' style={window.innerWidth < 580 ? { flexWrap: 'wrap' } : null}>
          {Horror.map((movie, index) => (

            <div key={index} style={window.innerWidth < 580 ? { width: '33%' } : null}>
              <ImageHover
                key={index}
                imageUrl={movie.imageUrl}
                title={movie.title}
                description={movie.description}
              /> </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Movies