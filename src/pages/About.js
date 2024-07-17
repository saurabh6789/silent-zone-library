import React from 'react';
import './About.css';
import image from '../assets/profile.jpg';

const AboutUs = () => {
  return (
    <section className="justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <div className='flex flex-col items-center'>

      <h1> About us</h1>
      </div>
      <div className=' flex flex-col items-center py-4'>
        <p className='text-lg py-4'>
          This library owned by Rahul Rawat and it started in 2016.
          <br></br>
          Our library, established in 2016 by Rahul Rawat,
           is dedicated to creating a welcoming and comfortable environment for all visitors.
           <br></br>
            We offer state-of-the-art air conditioning (AC) and an AAro water facility to ensure a pleasant experience
            .
            <br></br> The library is well-designed, providing an aesthetically pleasing and conducive atmosphere
             for reading and studying.
             <br></br> In addition to our extensive collection of books across various genres
              and subjects, we provide daily newspapers to keep our patrons informed. Our goal is to support
               learning, research, and relaxation by offering top-notch facilities and resources to our community.
        </p>
        
      </div>

          
     
    </section>
  );
};

export default AboutUs;
