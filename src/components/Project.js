import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='section bg-primary'>
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        {item.descp}
      </p>
    </div>
  );
};

export default Project;
