import React, { createContext, useState } from 'react'

export const  UserContext  = createContext()

const MyProvider = ({children}) => {
    
  let [cartItems,setCartItems] = useState([]);

  return (
    <UserContext.Provider value={{cartItems,setCartItems}} >
        {children}
    </UserContext.Provider>
  )
}

export default MyProvider