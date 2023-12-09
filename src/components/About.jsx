import React from 'react';
import NavBar from './NavBar';  // Make sure the path is correct
import CertificateSlideshow from './CertificateSlideshow';  // Assuming you have a component for the slideshow

const AboutPage = () => {
  return (
    <div className='bg-gradient-to-b from-black to-gray-800 text-white'> 
      <NavBar />

      <div className="container mx-auto mt-10 text-center ">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg mb-8">
        Enthusiastic computer science engineer with a solid academic background in computer science and machine learning. I am eager to leverage my theoretical knowledge to tackle real-world challenges and make meaningful contributions to leading-edge computer science projects. Proficient in self-directed learning, I have a proven track record of creating computer science solutions through both personal projects and coursework. I am actively seeking an opportunity to launch my career in computer science engineering, aiming to bring my innovative spirit to a dynamic team.        </p>

        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <p className="text-lg mb-8">
           Master of Science - Saint Louis University (YEAR 2023 - 2025 (expected))
          <br />
          Bachelor's in Technology - Swarrnim Startup & Innovation University (YEAR 2019 - 2023)
        </p>

        <h2 className="text-3xl font-semibold mb-4">Certificates</h2>
        <CertificateSlideshow /> 
      </div>
    </div>
  );
};

export default AboutPage;
