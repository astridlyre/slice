import React from "react";

const Business = ({
  image,
  name,
  location,
  type,
  rating,
  reviews,
  setCurrentBusiness,
}) => {
  return (
    <article
      onClick={setCurrentBusiness}
      className='w-full flex flex-col shadow-lg hover:shadow-2xl ease hover:ease rounded overflow-hidden leading-tight cursor-pointer'>
      <img src={image} alt={name} className='h-64 object-cover' />
      <div className='mt-6 p-4'>
        <h4 className='mb-2 text-gray-900'>{name}</h4>
        <div className='grid grid-cols-3 text-gray-900'>
          <ul className='col-span-2'>
            <li>{location.address1}</li>
            <li>{location.city}</li>
            <li>
              {location.state} {location.zip_code}
            </li>
          </ul>
          <div className='flex flex-col'>
            <h6 className='mb-4 text-orange-700 font-semibold text-lg'>
              {type.toUpperCase()}
            </h6>
            <span className='text-orange-700 font-semibold'>
              {rating} stars
            </span>
            <span className='text-gray-900'>{reviews} reviews</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Business;
