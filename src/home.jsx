import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import turf from './assets/company.webp'
export default function Home() {
  Aos.init({

    duration: 600,
    easing: 'ease-in-sine',
  });
  return (
    <div className='home'>
      <div className='container-fluid row'>
       <div className='hero-section ms-5 col-md-8 col-lg-12' data-aos="fade-right">
        <div className='hero-bold'>
        <h1 className='text-white text-capitalize'>Welcome to the world</h1>
        <h1 className='text-white text-capitalize'>of turf hero</h1>
        </div><br />
        <div>
          <p className='text-white fw-light fs-5'>where champions are made and legends are born.</p>
          <p className='text-white fw-light fs-5'>Step into the arena and prepare to be amazed by the</p>
          <p className='text-white fw-light fs-5'>prowess of our turf hero.</p>
        </div><br />
        
       <a href="#" className='booking-btn fw-medium'>Explore our turf</a>
       </div>
    </div>
    {/* hero-section end */}
     <div className='introduce-company'>
        <div className='introduce-company-content w-50'>
          <h3>Introduce our Turf</h3>
          <p>At Turfy, we pride ourselves on delivering turf solutions that not only enhance the beauty of landscapes but also promote sustainability and environmental stewardship. Our commitment to eco-friendly practices is evident in our use of sustainable materials, water-efficient designs, and responsible manufacturing processes.</p>
           <p>What sets us apart is our dedication to innovation and excellence. We offer a wide selection of specialized turf varieties, each meticulously crafted to deliver exceptional performance, durability, and aesthetic appeal. Whether you're looking to create a lush green lawn, a low-maintenance landscape, or a sports field that stands up to rigorous use, we have the perfect turf solution for you.</p>
        </div>
     </div><br /><br /><br />
   {/* company end */}

     <div className='football-bg'>
           <div className='football-content'>
               <h3>Turf Technology:</h3>
               <p>Explore the latest advancements in turf technology used in football stadiums. Discuss how these advancements impact gameplay, player performance, and injury prevention.</p><br />
               <h3>Player Interviews: </h3>
               <p>Conduct interviews with professional football players who share their experiences playing on different types of turf. Ask about their preferences, any challenges they face, and how turf conditions affect their performance.</p><br />
               
           </div>
           
     </div>
{/* football section end */}

     <div className=''>

     </div>

        {/* game section end */}

        <footer>
            <div className='container d-md-flex'>
            <div className='d-flex flex-column gap-5  w-25 pt-5'>
            <div className='d-flex align-items-center gap-3'>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill='white' width='20px'><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
             <p className='text-white mb-0'>23-North street-Chennai</p>
            </div>
             <div className='d-flex align-items-center gap-3'>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='white' width='20px'><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
             <p className='text-white mb-0'>7708771421</p>
             </div>
             <div className='d-flex flex-column gap-3'>
              <h5 className='text-white fw-light mb-0'>Follow us</h5>
              <div className='d-flex align-items-center gap-4'>
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='white' width='25px'><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='white' width='25px'><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              </div>
             </div>
            </div>

            <div className='footer-links p-5 pt-5 w-25'>
              <ul className='d-flex flex-column gap-4'>
                <a href="#" className='footer-link'>Home</a>
                <a href="#" className='footer-link'>About</a>
                <a href="#" className='footer-link'>Booking</a>
              </ul>
            </div>
            </div>
        </footer>
    </div>
  )
}
