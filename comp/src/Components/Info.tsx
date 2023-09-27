import React from 'react'
import {AlertData} from './constants';

const Infobox = () => {
   
  return (
    <div className=" overflow-y-auto  ">
     {AlertData.map((alert, index) => (
                <div key={index} className="alert-item p-4  border-2">
                    <h2>{alert.name}</h2>
                    <h3>{alert.title}</h3>
                    <p>{alert.description}</p>
                </div>
                   ))}
    </div>
  )
}

export default Infobox