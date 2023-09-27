
"use client"
import { useEffect, useState } from "react";

//import { useRef } from "react";
import Link from 'next/link';
/*
// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { GrAdd, GrAnnounce } from "react-icons/gr";
import { GiPoliceBadge } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";


import { AiOutlineAppstore, AiFillSetting } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { } from "react-icons/tb";
import { RiGalleryFill } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
*/

const Navbar= ({ }) => {

    return( 
      
    <div className="flex h-full min-w-full bg-transparent">
 
    <div className="bg-transparent p-4 min-w-full shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Navbar Title</h2>
      <ul className="flex ">
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-2 py-1 rounded">Item 1</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-2 py-1 rounded">Item 2</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-2 py-1 rounded">Item 3</a>
        </li>
        <li className="mb-2">
         <Link href='/Profile'className="text-gray-700 hover:bg-gray-200 px-2 py-1 rounded">Profile2</Link>
        </li>
        
      </ul>
    </div>

    <button></button>
    </div>
    );
};

export default Navbar;
