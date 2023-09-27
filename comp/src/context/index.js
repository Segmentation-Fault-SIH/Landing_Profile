import { createContext, useContext, useState } from 'react';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {

  const  [val, setVal] = useState(0);
  const changeVal = (value)=>{
    setVal(value);
    console.log(val);
  }

  


  return (
    <LocationContext.Provider value={{  val , setVal, changeVal}}>
      {children}
    </LocationContext.Provider>
  );
};
export const useLocationContext = () => useContext(LocationContext);