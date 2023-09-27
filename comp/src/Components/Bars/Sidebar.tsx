
"use client"
import { useEffect, useState } from "react";
import { useRef } from "react";


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


const Sidebar= ({ }) => {

    return( 
    <div className="flex h-full min-w-full  bg-gray-100">
    {/* Sidebar */}
    <div className="bg-white  min-w-full p-4 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Si</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-2 py-1 rounded">Item 1</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-2 py-1 rounded">Item 2</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:bg-gray-200 px-2 py-1 rounded">Item 3</a>
        </li>
        {/* Add more items as needed */}
      </ul>
    </div>
    </div>
    );
};

export default Sidebar;
