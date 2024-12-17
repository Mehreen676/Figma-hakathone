
import React from 'react';
import Image from 'next/image';
import Firstimg from "@/app/Assets/Firstimg.png"
import Nike from "@/app/Assets/Nike.png"
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import Bag from "@/app/Assets/bag.png"
import { GiHamburgerMenu } from "react-icons/gi";
import LOGO1 from "../../../public/images/LOGO1.svg"
import logo2 from "../../../public/images/logo2.svg"
import bag from "../../../public/images/bag.png"   



import Logo from "@/app/Assets/Logo.png"
import { ShoppingBag, ShoppingCart } from 'lucide-react';
const Navbar = () => {
  return (
<div>
        <header className="bg-[#F5F5F5] border-b font-[Helvetica Neue] flex justify-between items-center px-10 py-2 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <Image src={LOGO1} alt="Logo" className="w-[24px] h-[24px]" />
    
          {/* Links Section */}
          <nav>
            <ul className="flex items-center space-x-3 text-black text-[11px] font-medium">
              <li>
                <Link href="#">Find a Store</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="#">Help</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="#">Join Us</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="/loginForm">Sign In</Link>
              </li>
            </ul>
          </nav>
      </header>
      {/* Main navbar */}
    
    <header className="bg-white border-b shadow-sm">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}
        <Image src={logo2} alt="Logo" className="w-[58.85px] h-[20.54px]" />

        {/* Navigation Links (hidden on mobile) */}
        <nav className="items-center hidden space-x-6 font-medium md:flex">
          <a href="#" className="text-black hover:underline">
            New & Featured
          </a>
          <a href="#" className="text-black hover:underline">
            Men
          </a>
          <a href="#" className="text-black hover:underline">
            Women
          </a>
          <a href="#" className="text-black hover:underline">
            Kids
          </a>
          <a href="#" className="text-black hover:underline">
            SNKRS
          </a>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar (hidden on small screens) */}
          <div className="items-center hidden px-3 py-1 rounded-full lg:flex bg-slate-100">
            <CiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="flex-grow pl-2 text-sm bg-transparent outline-none"
            />
          </div>

          {/* Icons */}
          <FaRegHeart className="text-lg text-black" />
          <Image src={bag} alt="Bag Icon" className="w-[18px] h-[18px]" />
          {/* <ShoppingBag className='text-lg text-black'/> */}
        </div>

        {/* Mobile Menu (visible only on small screens) */}
        <button className="text-lg text-black md:hidden">
       Menu   <GiHamburgerMenu />
      
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className="hidden w-full px-4 py-3 bg-white md:hidden" id="mobile-menu">
        <a href="#" className="block py-1 text-black hover:underline">
          New & Featured
        </a>
        <a href="#" className="block py-1 text-black hover:underline">
          Men
        </a>
        <a href="#" className="block py-1 text-black hover:underline">
          Women
        </a>
        <a href="#" className="block py-1 text-black hover:underline">
          Kids
        </a>
        <a href="#" className="block py-1 text-black hover:underline">
          SNKRS
        </a>
      </div>
    </header>
    </div>
  )
};

    export default Navbar

















// const Header = () => {
//   return (

// <header className=''>
//     {/* Top bar */}
//     <div className="bg-[#fafafa] flex justify-between items-center px-10 py-2 md:text-[12px] sm:text-[9px] text-[8px] font-medium text-gray-900">
//       <Image src={"/LOGO2.svg"} alt={''} width={24} height={24}/>
//       <div>
//   <p className="text-sm text-black bg-white">Skip to main content</p>
// </div>
//       <div className="flex gap-2 px-10 md:gap-3 sm:gap-3">
//         <Link href="/location" className="hover:text-gray-800">Find Link Store 

        
//              </Link>
//        <span>|</span> <Link href="#" className="hover:text-gray-800">Help   </Link>
//        <span>|</span> <Link href="/joinus" className="hover:text-gray-800">Join Us    </Link>
//        <span>|</span> <Link href="/login" className="hover:text-gray-800"> Sign In</Link>
//       </div>
//     </div>

//     {/* Main navigation */}
//     <div className="flex flex-wrap items-center justify-between px-10 py-4">
//       {/* Left section (Logo) */}
//       <div className="flex items-center">
//         <Image
//           src={"/logo2.svg"}
//           alt="Nike Logo"
//           width={35} height={35}
//         />
//       </div>

//       {/* Center section (Navigation Links) */}
//       <nav className="flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px]">
//         <Link href="/featured" className="hover:text-black whitespace-nowrap">New & Featured</Link>
//         <Link href="#" className="hover:text-black whitespace-nowrap">Men</Link>
//         <Link href="#" className="hover:text-black whitespace-nowrap">Women</Link>
//         <Link href="#" className="hover:text-black whitespace-nowrap">Kids</Link>
//         <Link href="#" className="hover:text-black whitespace-nowrap">Sale</Link>
//         <Link href="#" className="hover:text-black whitespace-nowrap">SNKRS</Link>
//       </nav>

//       {/* Right section (Search, Wishlist, Cart) */}
//       <div className="flex items-center gap-4 px-6 mt-4 md:mt-0">
//         {/* Search Bar */}
//         <div className="relative hidden md:block">
//           <input
//             type="text"
//             placeholder="Search"
//             className=" bg-[#F5F5F5] py-2 pl-10 text-sm border  rounded-full w-[180px] pl- focus:outline-none h-[40]"
//           />
//           <FaSearch className="absolute pl-2 text-gray-500 right-45 top-2 left-2 size-6" />
//         </div>
//         <FaHeart className="text-[#ffffff] border-black md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]  cursor-pointer hover:text-black " />
//         <FaShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
//       </div>
//     </div>

//     {/* Mobile Search Bar */}
//     <div className="block px-6 mt-2 md:hidden">
//       <div className="relative">
//         <input
//           type="text"
//           placeholder="Search"
//           className="w-full py-2 pl-4 pr-10 text-sm border border-gray-300 rounded-full focus:outline-none"
//         />
//         <FaSearch className="absolute right-12 top-2.5 text-gray-500 text-4" />

//       </div>
      
//     </div>
//   </header>




                              
//   )}
// export default Header

