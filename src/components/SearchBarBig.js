import React from "react";
import Button from "./Button";

const SearchBarBig = ({
  handleFilterBest,
  handleFilterRated,
  handleFilterReviewed,
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
    className='sm:my-16 my-8 sm:py-8 py-4 px-4 max-w-screen-md w-full sm:grid sm:grid-cols-2 sm:gap-8 z-0 ease'
    onSubmit={search}>
    <div className='pb-2 mb-8 col-span-2 flex items-center justify-evenly border-b-2 border-gray-100'>
      <button
        type='button'
        onClick={handleFilterBest}
        className={
          !filterBest
            ? "font-display text-gray-100 font-medium outline-none focus:outline-none hover:text-green-300 ease hover:ease"
            : "font-display text-green-300 font-bold outline-none focus:outline-none hover:text-green-500 ease hover:ease"
        }>
        Best Match
      </button>

      <button
        type='button'
        onClick={handleFilterRated}
        className={
          !filterRated
            ? "font-display text-gray-100 font-medium outline-none focus:outline-none hover:text-green-300 ease hover:ease"
            : "font-display text-green-300 font-bold outline-none focus:outline-none hover:text-green-500 ease hover:ease"
        }>
        Highest Rated
      </button>

      <button
        type='button'
        onClick={handleFilterReviewed}
        className={
          !filterReviewed
            ? "font-display text-gray-100 font-medium outline-none focus:outline-none hover:text-green-300 ease hover:ease"
            : "font-display text-green-300 font-bold outline-none focus:outline-none hover:text-green-500 ease hover:ease"
        }>
        Most Reviewed
      </button>
    </div>
    <label htmlFor='business' className='flex flex-col'>
      <h5 className='mb-2 text-gray-100'>Search Businesses:</h5>
      <input
        type='text'
        id='business'
        className='form-input'
        placeholder='Search Businesses:'
        value={inputBusiness}
        onChange={handleInputBusiness}
      />
    </label>
    <label htmlFor='where' className='mt-4 sm:mt-0 flex flex-col'>
      <h5 className='mb-2 text-gray-100'>Where?</h5>
      <input
        type='text'
        id='where'
        className='form-input'
        placeholder='Where?'
        value={inputWhere}
        onChange={handleInputWhere}
      />
    </label>
    <div className='mt-4 col-span-2 flex justify-center'>
      <Button
        text="Let's Go"
        look='px-8 py-3 font-semibold rounded bg-orange-500 ease hover:ease hover:bg-orange-700 text-gray-100'
        func={null}
      />
    </div>
  </form>
);

export default SearchBarBig;
