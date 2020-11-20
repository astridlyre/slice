import React from "react";
import { ReactComponent as SliceLogo } from "../assets/img/logo.svg";

const Header = () => (
  <header className='sm:p-4 p-1 w-full flex justify-center bg-green-900 z-20'>
    <SliceLogo className='w-24 text-gray-100' />
  </header>
);

export default Header;
