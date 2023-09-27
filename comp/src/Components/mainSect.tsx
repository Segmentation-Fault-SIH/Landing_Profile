import React, { useEffect, useRef } from 'react';
import Feed from './Feed';
import CardComp from './Bars/CardComp'
import { useLocationContext } from '@/context';
import AgencyList from '../Components/agency_list';

const MainSect=({  }) => {
    const {val , setVal} = useLocationContext();
    const refer= useRef(false);
    let componentToRender = null;
   
        console.log(val);
    if (val === 0) {
      componentToRender = <CardComp />;
    } else if (val === 2) {
      componentToRender = <Feed />;
    }
    else if (val === 3) {
        componentToRender = <AgencyList />;
     } else {
      // Handle other cases or set componentToRender to null
      componentToRender = null;
    }
        // Your code that depends on 'val'
    
    
  
    return (
      <span className='h-full min-w-full flex flex-row justify-center items-center place-items-center bg-white overflow-y-auto'>
        {/* Render the selected component */}
        {componentToRender}
        
    </span>
    );
}

export default MainSect;