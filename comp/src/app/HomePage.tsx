"use client"
import b1 from '../../src/Components/assets/Breadcrumb.svg'
import { Sidebar, Navbar, MainSect } from '../../src/Components/Bars';
import React,{ useState } from 'react';
import Link from 'next/link';
export default function HomePage() {
  const [val, setVal] = useState(0);

  const [showContainers, setShowContainers] = useState(false);
 
   

    const backgroundStyle = {
      backgroundImage: `url(${b1})`, // Use the imported image
      backgroundSize: 'cover', // You can customize this as needed
      backgroundRepeat: 'no-repeat', // You can customize this as needed
    };
  return (
    <main  className="static flex min-h-screen flex-row items-start justify-stretch p-4">
   
        
      <div className='flex flex-col flex-start h-90screen w-1/6'>
      <Sidebar />
      </div>  
      <div className='flex flex-col w-5/6 h-90screen'>
      <div className='flex flex-row  h-40h 'style={backgroundStyle}>
    
        <Navbar />
        </div>
        <div className='flex flex-col flex-start h-full overflow-y-auto'>
        <MainSect  />
        </div>
        
      </div>

    </main>
   
  )
}
