import React from "react";
import { ReactComponent as CloseIcon } from "../assets/img/close.svg";

const BusinessModal = ({ business, setCurrentBusiness }) => {
  const bgImg = {
    backgroundImage: `url(${business.image_url})`,
  };
  return (
    <div
      className='fixed inset-0 w-screen min-h-screen flex flex-col justify-center items-center bg-gray-900 bg-opacity-75 z-30'
      onClick={() => setCurrentBusiness(null)}>
      <div className=' bg-gray-100 rounded w-full max-w-screen-sm overflow-y-scroll sm:overflow-y-auto'>
        <div
          className='sm:pt-16 sm:pb-48 sm:px-8 p-4 bg-center bg-cover relative'
          style={bgImg}>
          <button
            className='mt-4 mr-4 absolute top-0 right-0 text-gray-100 hover:text-gray-300 focus:outline-none'
            onClick={() => setCurrentBusiness(null)}>
            <CloseIcon className='w-8 h-8' />
          </button>
          <h1 className='sm:my-2 pl-2 my-8 text-green-900 border-l-8 border-green-900 bg-gray-100 bg-opacity-75 sm:text-5xl'>
            {business.name}
          </h1>
        </div>
        <div className='sm:p-8 flex flex-col bg-gray-100'>
          <div className='p-4 sm:grid sm:grid-cols-2 text-gray-900'>
            <ul>
              <li>
                <h4 className='text-green-900'>{business.name}</h4>
              </li>
              <li>{business.location.display_address[0]}</li>
              <li>{business.location.display_address[1]}</li>
              <li className='mt-4 text-green-900 flex'>
                <a
                  href={`tel:${business.phone}`}
                  className='flex items-center justify-start hover:text-green-700 ease hover:ease'>
                  <i className='mr-2 fas fa-phone-square-alt fa-lg'></i>
                  <h5>{business.display_phone}</h5>
                </a>
              </li>
            </ul>
            <div className='sm:mt-0 mt-4 sm:ml-16 p-8 rounded flex flex-col bg-green-900 text-gray-100'>
              <h5>Details</h5>
              <h6 className='mt-2'>
                Type: {business.categories[0]?.title.toUpperCase()}
              </h6>
              <h6 className=''>Rating: {business.rating} stars</h6>
              <span className='text-green-600 text-sm'>
                (Total of {business.review_count} reviews)
              </span>
              <h6 className='mt-2 font-semibold'>
                {business.is_closed ? "Currently closed" : "Open for business"}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModal;
