import React, { Children, createContext, useContext } from 'react';

const CountContext = createContext();

export const useCount = () => {
    return useContext(CountContext);
};

const CountProvider = ({ children }) => {

    const name = "Sahil";
    const age = 21;
    const value = {name, age}
  return (
    <CountContext.Provider value={value}>
        {children}
    </CountContext.Provider>
  )
}

export default CountProvider;