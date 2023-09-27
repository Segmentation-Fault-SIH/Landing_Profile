"use client"
import b1 from '../Components/assets/Breadcrumb.svg'
import { Sidebar, Navbar, MainSect } from '../Components/Bars';
import React,{ useState } from 'react';
export default function HomePage() {
  const [showContainers, setShowContainers] = useState(false);

    const handleButtonClick = () => {
      setShowContainers(!showContainers);

    };
    const handleButton2Click = () => {
      //auth
    };

    const backgroundStyle = {
      backgroundImage: `url(${b1})`, // Use the imported image
      backgroundSize: 'cover', // You can customize this as needed
      backgroundRepeat: 'no-repeat', // You can customize this as needed
    };
  return (
    <main  className="static flex min-h-screen flex-row items-start justify-stretch p-4">
    


        <button 
        onClick={handleButtonClick} 
        className="absolute  bottom-20 right-20  p-4 bg-blue-500 text-white rounded-full"
      >
        Toggle Containers
      </button>
       { showContainers ? (
        <>
    <div className='flex flex-col flex-start h-90screen w-1/6'>
    <Sidebar/>
    </div>  
    <div className='flex flex-col w-3/6 h-90screen  '>
    <div className='flex flex-row h-30h' style={backgroundStyle}>
    <div className="flex absolute right-60 justify-end items-end p-4">
                <button
                  onClick={handleButton2Click}
                  className="p-4 bg-white text-teal-500 rounded-lg"
                >
                  Login
                </button>
              </div>
      <Navbar />
      
      </div>
      <div className='flex flex-col flex-start h-full overflow-y-auto'>
      <MainSect />
      </div>
      
    </div>
  
        <div className="flex h-full w-2/6 mt-4">
            <h1>hi</h1>
        </div>
       
        </>
       ):(
        <>
      <div className='flex flex-col flex-start h-90screen w-1/6'>
      <Sidebar/>
      </div>  
      <div className='flex flex-col w-5/6 h-90screen'>
      <div className='flex flex-row  h-30h 'style={backgroundStyle}>
      <div className="flex absolute right-20 justify-end items-end p-4">
                <button
                  onClick={handleButton2Click}
                  className="p-4 bg-white text-teal-500 rounded-lg"
                >
                  Login
                </button>
              </div>
  
        <Navbar />
        </div>
        <div className='flex flex-col flex-start h-full overflow-y-auto'>
        <MainSect />
        </div>
        
      </div>
      </>
      )

    }
    </main>
   
  )
}
