import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

const CertificateSlideshow = () => {
  const certificateImages = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
  ];

  return (
      <Carousel showArrows={true} infiniteLoop={true}>
        {certificateImages.map((item, index) => (
          <div key={index} style={{ height: 500, width: 700, margin: '0 auto' }}>
            <img
              src={item.image}
              alt={`Certificate ${index + 1}`}
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
          </div>
        ))}
      </Carousel>
  );
};

export default CertificateSlideshow;
