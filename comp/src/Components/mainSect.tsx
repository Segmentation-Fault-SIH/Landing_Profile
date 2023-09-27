import React from 'react';
import Feed from './Feed';

const MainSect=() => {
    
    return(
    <span className='h-full min-w-full justify-center items-center place-items-center bg-red-500 overflow-y-auto'>
       <Feed /> 
    </span>
    );
}

export default MainSect;