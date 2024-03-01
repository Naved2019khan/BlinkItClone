import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { UserContext } from "../../ContextAPI/MyProvider";
import { ScrollText } from "./ScrollText";

const Navbar = ({ showCart, setShowCart }) => {
  let { cartItems } = useContext(UserContext);
  let [count, setCount] = useState(0);
  let [price, setprice] = useState(0);

  useEffect(() => {
    let totalItem = cartItems.reduce((total, item) => total + item.quantity, 0);
    let totalPrice = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    console.log(totalItem, totalPrice);
    setCount(totalItem);
    setprice(totalPrice);
  }, [cartItems]);

  return (
    <nav className=" block sticky top-0 z-2 bg-white ">
      {/* IMPORTANT For Z index navbar z -3, left button z-1 and My Cart 's parent z-2 */}
      <div className="w-screen  flex flex-row items-center border-b  border-gray-200    ">
        <div className="border-r border-gray-200">
          <div className="h-20 px-8 pt-6">
            <svg
              width="134"
              height="30"
              viewBox="0 0 114 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3342 7.186C16.2619 7.186 17.9832 7.66644 19.4978 8.62732C21.0262 9.57447 22.2242 10.9197 23.0917 12.663C23.9316 14.3377 24.3516 16.3075 24.3516 18.5724C24.3516 20.7687 23.9316 22.7316 23.0917 24.4612C22.2517 26.1908 21.0675 27.5429 19.5391 28.5175C17.9969 29.5058 16.2619 30 14.3342 30C12.9297 30 11.6078 29.7117 10.3685 29.1352C9.12927 28.5587 8.06901 27.7488 7.18775 26.7056V29.4852H0V0H7.18775V10.4598C8.06901 9.41661 9.12927 8.61359 10.3685 8.05079C11.6078 7.47426 12.9297 7.186 14.3342 7.186ZM12.1861 24.0494C13.2051 24.0494 14.1139 23.8161 14.9125 23.3493C15.7112 22.8826 16.3377 22.2306 16.7921 21.3933C17.2465 20.5697 17.4737 19.6294 17.4737 18.5724C17.4737 17.5429 17.2465 16.6095 16.7921 15.7721C16.3377 14.9348 15.7112 14.2828 14.9125 13.8161C14.1139 13.3493 13.2051 13.116 12.1861 13.116C11.2223 13.116 10.3617 13.3493 9.60432 13.8161C8.84699 14.269 8.2549 14.9073 7.82804 15.731C7.40118 16.5683 7.18775 17.5154 7.18775 18.5724C7.18775 19.6294 7.40118 20.5765 7.82804 21.4139C8.2549 22.2375 8.84699 22.8826 9.60432 23.3493C10.3617 23.8161 11.2223 24.0494 12.1861 24.0494Z"
                fill="#F8CB46"
              ></path>
              <path
                d="M25.3356 29.4852V0H32.5233V29.4852H25.3356Z"
                fill="#F8CB46"
              ></path>
              <path
                d="M34.5607 29.4852V7.68016H41.7071V29.4852H34.5607Z"
                fill="#F8CB46"
              ></path>
              <path
                d="M57.2319 7.186C58.7603 7.186 60.1372 7.5429 61.3627 8.25669C62.5882 8.95676 63.5521 9.94509 64.2544 11.2217C64.9291 12.512 65.2664 13.9739 65.2664 15.6074V29.4852H58.4092V17.2135C58.4092 16.4173 58.2508 15.7104 57.9341 15.0927C57.6312 14.4612 57.1974 13.9739 56.6329 13.6307C56.0821 13.2876 55.4349 13.116 54.6914 13.116C53.9891 13.116 53.3419 13.2876 52.7498 13.6307C52.1577 13.9602 51.6965 14.4132 51.366 14.9897C51.0218 15.5388 50.8496 16.1839 50.8496 16.9252L50.8083 29.4852H43.6619V7.68016H50.8083V10.1716C51.483 9.23816 52.3849 8.51064 53.5141 7.98902C54.6432 7.45367 55.8824 7.186 57.2319 7.186Z"
                fill="#F8CB46"
              ></path>
              <path
                d="M81.0597 17.2135L89.1769 29.4852H81.0597L76.3091 21.7639L74.1198 24.2965V29.4852H66.932V0H74.1198V16.2869L81.0184 7.68016H89.1356L81.0597 17.2135Z"
                fill="#F8CB46"
              ></path>
              <path
                d="M34.5569 0.00232667H41.7267V5.59207H34.5569V0.00232667Z"
                fill="#F8CB46"
              ></path>
              <path
                d="M90.3176 29.4198V7.61479H97.464V29.4198H90.3176Z"
                fill="#54B226"
              ></path>
              <path
                d="M112.575 23.2634L114 27.855C113.353 28.4727 112.534 28.9737 111.542 29.3581C110.564 29.7424 109.607 29.9346 108.671 29.9346C107.322 29.9346 106.117 29.6395 105.057 29.0492C103.996 28.4452 103.17 27.6079 102.578 26.5372C101.986 25.494 101.69 24.2929 101.69 22.9339V13.3183H98.819V7.61479H101.69V0.00241089H108.547V7.61479H113.071V13.3183H108.547V21.6161C108.547 22.3162 108.733 22.8859 109.105 23.3251C109.477 23.7644 109.952 23.984 110.53 23.984C110.943 23.984 111.329 23.9223 111.687 23.7987C112.045 23.6752 112.341 23.4967 112.575 23.2634Z"
                fill="#54B226"
              ></path>
              <path
                d="M90.2609 0.00241089H97.4307V5.59215H90.2609V0.00241089Z"
                fill="#54B226"
              ></path>
            </svg>
          </div>
        </div>
        <div className=" w-80 flex flex-col items-center ">
          <div>
            <p className="text-lg font-bold whitespace-nowrap">
              Delivery in 16 minutes
            </p>
            <p className=" text-sm whitespace-nowrap">
              Noida UtterPradesh , India
            </p>
          </div>
        </div>
        {/* input field */}
        <div
          
          className="flex flex-row w-[1100px] h-[46px] gap-[8px] items-start justify-center px  bg-gray-100 rounded-[12px] relative"
        >
          <FaSearch className="mx-[8px] self-center" />
          <ScrollText  />
          {/* <input
            className="grow mr-4 bg-transparent outline-none"
            placeholder="Enter text"
            type="text"
          /> */}
     
          
    
       
     
        </div>

        <div className="flex ml-auto px-10">
          <button className=" w-24 h-12">Login</button>
          <button
            onClick={() => {
              setShowCart(!showCart);
            }}
            className=" flex flex-row items-center justify-center gap-[6px] w-[112px] h-[52px] bg-green-700 text-white font-bold rounded-lg"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            {count === 0 ? (
              <span className="ml-[2px]">My Cart </span>
            ) : (
              <div className=" flex flex-col  items-start">
                <span className=""> {count} Items</span>

                <div className=""> ${price}</div>
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
