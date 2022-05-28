import React from 'react';

// import img
import Image from '../assets/img/about.webp';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-abouts relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                A B O U T
              </h2>
              <p className='mb-4 text-accent'>
                MERN STACK WEB DEVELOPER
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              Passion-driven learner and a web developer with the ability to write
               clean, reusable, optimised code. Skilled and experienced at building and maintaining 
               MERN based web applications. Looking forward to joining a progressive and challenging work environment.
              <br />
                {/* <br />
                Qui doloremque quod sit accusantium unde totam inventore
                cupiditate ratione esse maxime eum recusandae ducimus. */}
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
