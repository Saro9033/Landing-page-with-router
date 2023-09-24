import React from 'react'
import ImageHover from '../Components/ImageHover';



const Main = () => {
  const latestMovies = [
    {
      title: 'Athidhi',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5879/1595879-v-8e275fdc2e7c',
      description: 'Unexpected guests enter a loner house and life, unleashing a series of horrific events. Everyone becomes a suspect and a victim.',
    }, {
      title: 'India Mega Festival',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3153/1583153-v-36077608fc64',
      description: 'NEW EPISODE EVERY WEDNESDAY AT 8:00 PM. Join chefs Gary Mehigan and Pablo Naranjo experience India’s biggest festivals like Holi, Onam, Eid, Durga Puja, Hornbill and Ganesh Utsav!',
    }, {
      title: 'The Little Mermaid',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/681/1570681-v-40713b14ee86',
      description: 'DA spirited young mermaid makes a deal with an evil sea witch that allows her to experience life on land, but that ultimately puts her life in jeopardy.',
    },
    {
      title: 'Horrors of the Heart',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2139/1572139-v-906f6abcacd1',
      description: "After her father’s suicide, Meghna gets led by one obsession - vengeance. The trail ends at her estranged mother’s doorstep, sparking a rampage.ter her father's died,  ",
    }
  ];

  const Sports = [
    {
      title: "Ind Win 8th Title",
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5277/1595277-h-dc22098ffd5d',
      description: "CRICKET FINAL ",
    },
    {
      title: 'Sizzling Siraj Bamboozles SL',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5176/1595176-h-51da54a38e32',
      description: "CRICKET/ IND vs SL ",
    },
    {
      title: 'We Stood Up to All Challenges: Rohit',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5494/1595494-h-8f32bd713448',
      description: "CRICKET ",
    },
    {
      title: 'ICC CWC STARTS OCT 5',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/3369/1593369-h-1c24925ba84e',
      description: "CRICKET",
    }
  ]

  const upComing = [
    {
      title: "RELEASING ON 27 SEP",
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/2342/1582342-v-a91e06175bad',
      description: "Countryside detective Junmo goes undercover within an evil gang, unaware of the complex relationship between his wife and the gang's boss.",
    },
    {
      title: 'RELEASING ON 4 OCT',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3931/1593931-v-22b634868694',
      description: "The classic theme park attraction comes to life and tells the story of a woman and her son who enlist a special crew to rid their home of supernatural squatters.",
    },
    {
      title: 'RELEASING ON 13 OCT',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3704/1593704-v-517df1f1059f',
      description: "A survivor of Partition becomes the rising force of Delhi's underworld. As a new leader emerges, a ruthless game of power, betrayal and politics begins. ",
    },
    {
      title: 'RELEASING ON 27 SEP',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/2677/1592677-v-bebf6cd826ce',
      description: "Andrea is a K-pop fan who forms a cover dance group with the intention of winning a dance contest where the first prize is a trip to Korea.",
    }
  ]

  const popularMovies = [
    {
      title: "Lion King",
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5241/875241-v',
      description: "When a lion named Shere Khan threatens to kill Mowgli, a young boy raised by wolves, his friends Bagheera and Baloo help him escape his clutches.",
    },
    {
      title: 'AVATAR 2',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4622/1534622-v-49ee55ea1cae',
      description: "Set more than a decade after the first film, dive into the story of the Sully family; the lengths they go to keep each other safe and the tragedies they endure.",
    },
    {
      title: 'Guardians of the Galaxy',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7487/1557487-v-7443ca868089',
      description: "The band of heroic renegades embark on an action-packed mission to protect one of their own. And a new force threatens to bring the Guardians down for good.",
    },
    {
      title: 'Infinity War',
      imageUrl: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5168/875168-v',
      description: "With the powerful Thanos on the verge of raining destruction upon the universe, the Avengers will have to risk everything to stop him.",
    }
  ]



  return (
    <div style={{ background: 'black' }}>

      <div id="demo" className="carousel slide mb-5" data-bs-ride="carousel">

        {/* <!-- Indicators/dots --> */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src='https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-09-22/BBS7TamilDatedKV4_deskXBB-80a497b7-2f17-44f4-a5eb-38172a2e3f33.jpg' alt="Bigboss"
              className="d-block" style={window.innerWidth < 525 ? { width: '100%', height: '25vh' } : { width: '100%', height: '50vh' }} />
          </div>
          <div className="carousel-item">
            <img src='https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-08-24/AhsokaNSGoTGV3NS_deskXbb-481dfbba-9212-43a3-8f29-b37f4f59d8ab.jpg' alt="GOG"
              className="d-block" style={window.innerWidth < 525 ? { width: '100%', height: '25vh' } : { width: '100%', height: '50vh' }} />
          </div>
          <div className="carousel-item">
            <img src='https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-08-13/LokiS2Dated_deskXbb-693ec981-0dc6-4d5e-8ce7-85a4c5db83b2.jpg' alt="Loki"
              className="d-block" style={window.innerWidth < 525 ? { width: '100%', height: '25vh' } : { width: '100%', height: '50vh' }} />
          </div>
        </div>
      </div>

      <div className='container'>
        <h3 className='text-light'>Popular Movies</h3>
        <div className='d-flex mb-1 align-items-center justify-content-center' style={window.innerWidth < 580 ? { flexWrap: 'wrap' } : null}>
          {popularMovies.map((movie, index) => (
            <div key={index} style={window.innerWidth < 580 ? { width: '50%' } : null}>

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

      <div className='container'>
        <h3 className='text-light'>Latest Releases</h3>
        <div className='d-flex mb-3 align-items-center justify-content-center'>
          {latestMovies.map((movie, index) => (
            <ImageHover
              key={index}
              imageUrl={movie.imageUrl}
              title={movie.title}
              description={movie.description}
            />
          ))}
        </div>
      </div>

      <div className='container '>
        <h3 className='text-light mb-3'>Upcoming Movies</h3>
        <div className='d-flex mb-5 pb-1 align-items-center  justify-content-center'>
          {upComing.map((movie, index) => (
            <ImageHover
              key={index}
              imageUrl={movie.imageUrl}
              title={movie.title}
              description={movie.description}
            />
          ))}
        </div>
      </div>

      <div className='container ' >
        <h4 className='text-light mb-3'>Sports</h4>
        <div className='align-items-center justify-content-center d-flex pb-5' style={window.innerWidth < 700 ? { flexWrap: 'wrap' } : null}>
          {Sports.map((movie, index) => (
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



    </div>
  )
}

export default Main