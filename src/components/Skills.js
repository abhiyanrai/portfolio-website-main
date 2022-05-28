import React from 'react';

// import skill data
import { skills } from '../data';
//className='bg-tertiary py-12'
const Skills = () => {
  return (
    <section id="skills" className='bg-tertiary py-12'>
      <div className='flex flex-col items-center text-center'>
          <h2  className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-skills relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>S K I L L S</h2>
          </div>
          <br/>
      <div className='container mx-auto'>
        <div
          className='grid grid-cols-4 md:grid-flow-row gap-20'
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='lg:h-20' src={skill.image} alt='' />
                <br/>
                {/* <h3 >{skill.name}</h3> */}
              </div>
            );
          })}
         
        </div>
      </div>
    </section>
  );
};

export default Skills;
