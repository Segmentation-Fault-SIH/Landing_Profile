
"use client"
import { useEffect, useState } from "react";
//import { useRef } from "react";
import Link from 'next/link';
import {Snav, Desc} from '../ProfileComp/ContentComp'
import b1 from '../assets/Breadcrumb.svg'
const Content= ({ }) => {
  const backgroundStyle = {
    backgroundImage: `url(${b1})`, // Use the imported image
    backgroundSize: 'cover', // You can customize this as needed
    backgroundRepeat: 'no-repeat', // You can customize this as needed
  };
    return( 
      
    <div className="flex flex-col  bg-teal-500 h-60screen" style={backgroundStyle}>
      <div className="z-3 pt-10 text-center">
      <h1 className="text-black mb-7 text-4xl">National Disaster Response Force (NDRF), India</h1>
      </div>
      <div className="flex flex-row pt-10">
    <div className="flex flex-col w-1/5  h-40screen bg-white ">
      <Snav />
      </div>
      <div className="flex flex-col w-4/5  h-40screen bg-white ">
      <Desc />
      </div>
      </div>
    </div>
    );
};

export default Content;
