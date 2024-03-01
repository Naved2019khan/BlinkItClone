import React, { createContext, useState } from 'react'

export const  UserContext  = createContext()

const MyProvider = ({children}) => {
  let [cartItems,setCartItems] = useState(()=>{
    const localVal = localStorage.getItem('ITEMS')
    if (localVal == null) return []
    return JSON.parse(localVal)
  });

  return (
    <UserContext.Provider value={{cartItems,setCartItems}} >
        {children}
    </UserContext.Provider>
  )
}

export default MyProvider