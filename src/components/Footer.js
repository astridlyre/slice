import React from "react";
import { ReactComponent as SiteLogo } from "../assets/img/logo.svg";

const Footer = ({ siteInfo }) => (
  <footer className='w-full bg-green-900 flex justify-center sm:px-16 px-4 py-16 text-gray-100 z-20'>
    <div className='max-w-screen-md w-full sm:grid sm:grid-cols-2 sm:gap-8'>
      <div className='flex flex-col'>
        <SiteLogo className='w-24' />
        <div className='mt-4 w-full'>
          <button className='text-gray-100 hover:text-gray-300 ease hover:ease focus:outline-none focus:text-gray-300'>
            <i className='fab fa-facebook-square fa-2x'></i>
          </button>
          <button className='text-gray-100 hover:text-gray-300 ease hover:ease focus:outline-none focus:text-gray-300'>
            <i className='ml-4 fab fa-instagram-square fa-2x'></i>
          </button>
          <button className='text-gray-100 hover:text-gray-300 ease hover:ease focus:outline-none focus:text-gray-300'>
            <i className='ml-4 fas fa-phone-square-alt fa-2x'></i>
          </button>
          <button className='text-gray-100 hover:text-gray-300 ease hover:ease focus:outline-none focus:text-gray-300'>
            <i className='ml-4 fas fa-envelope-square fa-2x'></i>
          </button>
        </div>
      </div>

      <div className='sm:mt-0 mt-8 flex flex-col items-end text-sm'>
        <h5>{siteInfo.title}</h5>
        <span>{siteInfo.contact.address}</span>
        <span>
          {siteInfo.contact.city} {siteInfo.contact.state}
        </span>
        <span>{siteInfo.contact.zip}</span>
        <button className='mt-8 outline-none hover:text-gray-300 focus:text-gray-300 focus:outline-none'>
          {siteInfo.contact.phone}
        </button>
        <button className='outline-none hover:text-gray-300 focus:text-gray-300 focus:outline-none'>
          {siteInfo.contact.email}
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
