import React, { useContext, useEffect, useState } from "react";
import bread from "../../Assets/bread_rp.avif";
import clock from "../../Assets/clock.avif";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../ContextAPI/MyProvider";

const GridItem = ({ index, indexAt }) => {
  let [item, setItem] = useState(0);
  let { cartItems, setCartItems } = useContext(UserContext);

  useEffect(() => {
    console.log("+++UseEffect+++");

    // Local storage 
    localStorage.setItem('ITEMS',JSON.stringify(cartItems))

    // clean array for 0 quantity 
    let cleanArr = cartItems.filter((item) => item.quantity !== 0);
    if (cleanArr.length !== cartItems.length) {
      setCartItems(cleanArr);
    }

    // set value on change
    if (cartItems.length !== 0) {
      const indexArr = cartItems.findIndex(
        (item) => item.row === index && item.col === indexAt
      );

      if (indexArr !== -1) {
        setItem(cartItems[indexArr].quantity);
      }
    }
  }, [cartItems]);

  // add item
  let appendItem = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let data = {
      product: "English Oven Brown Bread",
      row: index,
      col: indexAt,
      price: 40,
      weight: "200g",
      image: "",
      quantity: 1,
    };
    setItem(1);
    let newArr = [...cartItems, data];
    setCartItems(newArr);
  };


  return (
    <>
      <div className=" flex flex-row  pb-3 ">
        <div
          style={{ width: "180px" }}
          className="flex flex-col  border shadow-sm border-gray-200 rounded-lg overflow-hidden p-2"
          // id={index * 10 + indexAt}
        >
          <img
            width={140}
            height={140}
            src={bread}
            className=" bg-gray-200 self-center"
            alt="someImage"
          />

          <div className="flex flex-row px-1 h-[14px] rounded  bg-gray-200 mb-2 mr-auto">
            <img className="w-[12px] h-[12px]" src={clock}   alt="someImage" />
            <p style={{ fontSize: "8px" }} className=" font-bold"   alt="someImage">
              15 min
            </p>
          </div>
          <h1 className=" writing-vertical-lr text-sm font-bold  mb-1">
            English Oven Brown bread
          </h1>
          <h1 className="mb-2 text-xs">400g</h1>
        

          <div className="flex flex-row justify-between items-center text-sm font-bold    ">
            <h1 className=" text-sm">$40</h1>
            {item === 0 && (
              <button
                onClick={(e)=>appendItem(e)}
                className=" w-20 h-8 border-[1px]  border-green-800 bg-custom-green bg-opacity-10  rounded-md  text-green-950 font-bold"
              >
                {item === 0 ? <div>ADD</div> : String(item)}
              </button>
            )}
            {item !== 0 && (
                <ItemButton index={index} indexAt={indexAt} item={item} setItem={setItem}/>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GridItem;


export function ItemButton({index,indexAt,item,setItem}){


  let { cartItems, setCartItems } = useContext(UserContext);


  


  let stopEvent = (e)=>{
    e.preventDefault();
    e.stopPropagation();
  }

  let removeItem = () => {
    // e.preventDefault();
    // e.stopPropagation();
    setItem(--item);
    if (item === 0) {
      const indexArr = cartItems.findIndex(
        (item) => item.row === index && item.col === indexAt
      );
      console.log(indexArr,"Index")
      cartItems.splice(indexArr,1); // diff
      let newArr = [...cartItems]
          setCartItems(newArr);
    } else {
      let data = {
        product: "English Oven Brown Bread",
        row: index,
        col: indexAt,
        price: 40,
        weight: "200g",
        image: "",
        quantity: item,
      };

      if (cartItems.length !== 0) {
        const indexArr = cartItems.findIndex(
          (item) => item.row === index && item.col === indexAt
        );
        console.log(item, index, cartItems);
        if (indexArr !== -1) {
          cartItems[indexArr] = data;
          let newArr = [...cartItems]
          setCartItems(newArr);
        }
      }
    }
  };

  let addQuantity =(e) => {
    e.preventDefault();
    e.stopPropagation();
    setItem(++item);
    let data = {
      product: "English Oven Brown Bread",
      row: index,
      col: indexAt,
      price: 40,
      weight: "200g",
      image: "",
      quantity: item,
    };

    if (cartItems.length !== 0) {
      const indexArr = cartItems.findIndex(
        (item) => item.row === index && item.col === indexAt
      );
      console.log(item, index, cartItems);
      if (indexArr !== -1) {
        cartItems[indexArr] = data;
        let newArr = [...cartItems]
        setCartItems(newArr);
      }
    }
  };

  return (
    <div

    onClick={(e)=>{
     stopEvent(e)
  }}
    className="flex items-center w-20 h-8 border  border-green-950 bg-custom-green  rounded-md  text-green-950 font-bold overflow-clip"
  >
    <button
      onClick={removeItem}
      className=" w-5 h-8 text-[10px] text-white"
    >
      <FontAwesomeIcon icon={faMinus} />
    </button>
    <div 
    onClick={(e)=>  stopEvent(e)}
    className="flex justify-center grow text-white">
      {item}
    </div>
    <button
      onClick={(e)=>addQuantity(e)}
      className=" w-5 h-8 text-[10px]  text-white "
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  </div>
  )
}