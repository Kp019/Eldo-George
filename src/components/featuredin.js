import React from 'react';
import hindu from '../Assets/218-2186575_thehindu-logo-logo-of-the-hindu-newspaper-hd.png';

function Featuredin() {
    const cardDetails = {
      0: {
          imgUrl: hindu,
          title: "Text 1"
      },
      1: {
          imgUrl:  "https://planetabled.com/wp-content/uploads/2017/02/indian-express-pub-300x149.png",
          title: "Text 2"
      },
      2: {
          imgUrl:  "https://vectorseek.com/wp-content/uploads/2023/10/Malayala-Manorama-Logo-Vector.svg-.png",
          title: "Text 3"
      },
      3: {
          imgUrl:  "https://imgs.search.brave.com/MNxDvR1vtXFHRayLfGYWLw3jrSYbQVViGEmsQq9TxOY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL00vTWFub3Jh/bWFfTmV3cy1sb2dv/LTJCNTY3MTY4Q0Ut/c2Vla2xvZ28uY29t/LnBuZw",
          title: "Text 4"
      },
      4: {
          imgUrl:  "https://upload.wikimedia.org/wikipedia/commons/6/62/Media_One_Logo.png",
          title: "Text 5"
      },
      5: {
          imgUrl:  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Vanitha_logo.png",
          title: "Text 6"
      },
      6: {
        imgUrl:  "https://upload.wikimedia.org/wikipedia/commons/b/b0/Mathrubhumi_News_logo.png",
        title: "Text 7"
    },
    }

  function CarouselItem({ imgUrl, imgTitle }) {

    return (
      <div className="carousel-card lg:w-40 md:w-36 w-24 h-auto transition-all ease-in-out hover:-translate-y-2 hover:scale-105  duration-800">
        <img src={imgUrl} alt={imgTitle}></img>
      </div>
    );
  }

  return (
    <div className={`carousel-container pt-24 transition-all duration-300 `}>
      <h1 className='text-4xl font-bold flex justify-center mb-12'>Featured In</h1>
      <div className="carousel-track flex justify-center items-center flex-wrap gap-8">
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  )
}

export default Featuredin


