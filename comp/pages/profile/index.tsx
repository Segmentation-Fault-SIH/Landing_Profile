import React, { useState } from 'react';
import { Banner, Pic, Content } from '../../src/Components/ProfileComp';

import 'tailwindcss/tailwind.css'




const Profile = () => {
  const [showContainers, setShowContainers] = useState(false);

  const handleButtonClick = () => {
    setShowContainers(!showContainers);
  };

  return (
    <main className="static flex min-h-screen flex-col items-start justify-stretch p-4">
      <span className='flex flex-col flex-start z-1 h-20screen w-95screen '>
        <Banner />
        <div className='absolute h-40screen w-20screen justify-stretch z-2 rounded-full '>
          <Pic />
        </div>
      </span>

      <div className='flex flex-col w-95screen h-70screen overflow-y-auto bg-slate-50 '>
        <Content />
      </div>
    </main>
  )
}

export default Profile;
