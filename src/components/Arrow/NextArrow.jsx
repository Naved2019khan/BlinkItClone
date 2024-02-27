import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaChevronRight } from 'react-icons/fa';

const NextArrow = (props) => {
//   return (
//     <div>  <button onClick={goToNext} className=" absolute w-9 h-9  top-1/2 right-0 transform  translate-x-1/2  z-1   shadow rounded-full bg-black">
//     </button></div>
//   )

const { className, style, onClick } = props;
  return (
    <div className=' absolute top-0  right-3 flex flex-col items-center justify-center h-full w-[12px]'>
      <div className=" flex items-center justify-center  w-9 h-9 bg-white shadow-sm rounded-full"
      onClick={onClick}>
        < FaChevronRight />
      </div>
      {/* <FontAwesomeIcon  icon={FaChevronRight} /> */}
      
  
    
    </div>
   
   
   
  );
}

export default NextArrow