import React, { useState } from 'react';
import Image from './image';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between px-4 md:px-8 lg:px-16 bg-white shadow-md'>
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="Lucky Codes" width={32} height={32} />
        <span>DigiBlogs❤️</span>
        
      </Link>

      {/* MOBILE BUTTON */}
      <div className='cursor-pointer text-4xl md:hidden flex items-center' onClick={() => setOpen((prev) => !prev)}>
        {open ? "X" : "☰"}
      </div>

      {/* MOBILE LINK LIST */}
      <div
        className={`w-full h-screen bg-white flex flex-col items-center justify-center fixed top-16 left-0 transition-transform duration-300 ease-in-out transform ${
          open ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <Link to="/" className='py-4 text-xl hover:text-purple-500'>Home</Link>
        <Link to="/" className='py-4 text-xl hover:text-purple-500'>Most Popular</Link>
        <Link to="/" className='py-4 text-xl hover:text-purple-500'>Trending</Link>
        <Link to="/" className='py-4 text-xl hover:text-purple-500'>About</Link>
        <Link to="/" className='py-4 text-xl hover:text-purple-500'>
          <button className='py-2 px-4 rounded-3xl bg-purple-800 text-white'>Login 🙌</button>
        </Link>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/" className='hover:text-purple-500'>Home</Link>
        <Link to="/" className='hover:text-purple-500'>Trending</Link>
        <Link to="/" className='hover:text-purple-500'>Most Popular</Link>
        <Link to="/" className='hover:text-purple-500'>About</Link>
       
      <SignedOut>
      <Link to="/login">
          <button className='py-2 px-4 rounded-3xl bg-purple-800 text-white hover:bg-purple-900'>Login 🙌</button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;