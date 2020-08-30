import React from "react";
import { ReactComponent as SliceLogo } from "../assets/img/logo.svg";

const Header = () => (
  <header className='p-4 w-full flex justify-center bg-green-900 z-20'>
    <SliceLogo className='w-24 text-gray-100' />
  </header>
);

export default Header;
