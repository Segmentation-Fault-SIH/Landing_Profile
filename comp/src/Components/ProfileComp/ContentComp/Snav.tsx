import React from 'react'


const Sidenav =()=>{

    return(<>
    
    <div className="flex h-full min-w-full  bg-gray-100">
    {/* Sidebar */}
    <div className="bg-gray-100 text-black min-w-full p-4  shadow-lg border-black border-r-4">
      
      <h3 className="mb-2">
         Area of Expertise: 
        </h3>
        <h3 className="mb-2">
        Active members:
        </h3>
        <h3 className="mb-2">
         Contact: 
           <ul>
            <h3>
                phone:
            </h3>
            <h3>
                email:
             </h3>   
           </ul>
        </h3>


      <ul>
       
        {/* Add more items as needed */}
      </ul>
    </div>
    </div>
    </>
    );
}

export default Sidenav;