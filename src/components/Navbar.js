import React from "react";
import SearchUser from "./SearchUser";
<SearchUser />;
//md:flex items-center justify-between bg-inherit py-4 md:px-10 px-7
const Navbar = () => {
  return (
    <div>
    <ul className="mr-6 p-6 flex bg-black">
        <li className='mr-6'>
            <a href="/" className='text-blue-500 hover:text-purple-500'>
            Home
            </a>
        </li>
        <li className='mr-6'>
            <a href="/" className='text-blue-500 hover:text-purple-500'>
            About
            </a>
        </li>
        <li className='mr-6'>
            <a href="/" className='text-blue-500 hover:text-purple-500'>
            Contact US
            </a>
        </li>
        <li className='mr-6'>
            <a href="/" className='cursor-not-allowed text-blue-500 hover:text-purple-500'>
            Disable
            </a>
        </li>
    </ul>
</div>
  );
};

export default Navbar;
