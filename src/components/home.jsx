import React from 'react';
import homeimage from '../assets/homeimage.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div name="home" className='flex h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div>
          <div>
            <h2 className="text-4xl sm:text-7xl; font-bold text-white">I'm Sagar Badgujar.</h2>
            <p className="text-white text=-gray-50 py-4 max-w-md">
              I am a masters student pursing MS in Computer Science in SAINT LOUIS UNIVERSITY.            </p>
            <div>
              <button className='group text-white w-fit px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                Portfolio
                <span className='group-hover:rotate-90 duration-300'>
                  <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={homeimage} alt="Home Image" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
