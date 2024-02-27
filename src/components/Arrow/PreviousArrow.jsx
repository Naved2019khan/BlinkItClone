import React from 'react'
import { FaChevronLeft } from 'react-icons/fa';

const PrevArrow = (props) => {
//   return (
//     <div>  <button onClick={goToNext} className=" absolute w-9 h-9  top-1/2 right-0 transform  translate-x-1/2  z-1   shadow rounded-full bg-black">
//     </button></div>
//   )

const { className, style, onClick } = props;
  return (
    <div className=' absolute flex flex-col items-center justify-center h-full w-[12px]'>
           {/* IMPORTANT:- For Z index navbar z -3, left button z-1 and My Cart 's parent z-2 */}
      {/* <div className=" absolute w-9 h-9  top-1/2 z-1 left-1  bg-white  shadow rounded-full" onClick={onClick}>   */}
      <div className="flex items-center justify-center w-9 h-9 z-1 left-1  bg-white  shadow rounded-full" onClick={onClick}>  
      <FaChevronLeft/>
      </div>
    
    </div>
   
   
   
  );
}

export default PrevArrow