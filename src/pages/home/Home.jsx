import React, { useState  } from "react";
import Navbar from "../../components/navbar/Navbar";


import { Outlet } from "react-router-dom";
import MyCart from "../../components/myCart/MyCart";
import Offcanvas from 'react-bootstrap/Offcanvas';



const Home = () => {
// States 

let [showCart ,setShowCart] = useState(false)
// let {cartItems,setCartItems} = useContext(UserContext) 

  return (
    <div  className={`flex flex-col items-center  overflow-clip relative `}>
      {/* Show main */}
      {/* <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" alt="paan corner banner" width="1280" height="234.8623853211009" loading="eager" style="border-radius: 0px; object-fit: fill; cursor: default;"></img> */}
      <Navbar setShowCart={setShowCart}  />
      {/* p1 */}
      <Outlet />
  

      {/* My Cart shows on tap */}
      {/* IMPORTANT For Z index navbar z-3, left button z-1 and My Cart 's parent z-2 */}
     
      <Offcanvas show={showCart}  placement={'end'} onHide={()=>setShowCart(false)}  >
        <MyCart setShowCart= {setShowCart}  />
      </Offcanvas>
    </div>
  );
};

export default Home;
