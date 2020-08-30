import React from "react";
import Button from "./Button";

const SearchBarSmall = ({
  filterBest,
  filterRated,
  filterReviewed,
  inputBusiness,
  inputWhere,
  handleInputBusiness,
  handleInputWhere,
  search,
}) => (
  <form
    className='py-8 max-w-screen-md w-full grid grid-cols-4 gap-4 z-0 ease'
    onSubmit={search}>
    <div className='col-span-2 flex flex-col justify-center items-center'>
      <label htmlFor='business' className='w-full flex flex-col'>
        <input
          type='text'
          id='business'
          className='form-input w-full'
          placeholder='Search Businesses'
        />
      </label>
      <label htmlFor='where' className='mt-2 w-full flex flex-col'>
        <input
          type='text'
          id='where'
          className='form-input w-full'
          placeholder='Where?'
        />
      </label>
    </div>
    <div className='col-span-2 flex flex-col justify-center items-center'>
      <div className='h-8 w-full pl-2 flex items-center justify-evenly border-b-2 border-gray-100'>
        <button
          type='button'
          className='font-display text-gray-100 font-semibold outline-none focus:outline-none hover:text-green-300 focus:text-green-300 ease hover:ease'>
          Best Match
        </button>
        <button
          type='button'
          className='font-display text-gray-100 font-semibold outline-none focus:outline-none hover:text-green-300 focus:text-green-300 ease hover:ease'>
          Highest Rated
        </button>
        <button
          type='button'
          className='font-display text-gray-100 font-semibold outline-none focus:outline-none hover:text-green-300 focus:text-green-300 ease hover:ease'>
          Most Reviewed
        </button>
      </div>
      <Button
        text="Let's go!"
        look='mt-4 px-8 py-2 font-semibold rounded bg-orange-500 ease hover:ease hover:bg-orange-700 text-gray-100 w-full'
        func={null}
      />
    </div>
  </form>
);

export default SearchBarSmall;
