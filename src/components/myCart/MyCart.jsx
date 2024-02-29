import React, { useContext ,useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../ContextAPI/MyProvider";

const MyCart = ({ setShowCart }) => {
 
  let { cartItems, setCartItems } = useContext(UserContext);

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


  function getIndex(data){
    if (cartItems.length !== 0) {
      const indexArr = cartItems.findIndex(
        (ele) => ele.row === data.row && ele.col === data.col
      );
      return indexArr
    }
    return -1
  }

 
  let addItem = (data) => {
    const indexArr = getIndex(data)
      if (indexArr !== -1) {
        ++cartItems[indexArr].quantity;
        const up = [...cartItems];
        setCartItems(up);
    }
  };

  let removeItem = (data) => {
      const indexArr = getIndex(data)
        if (indexArr !== -1) {
          cartItems[indexArr].quantity--;
          // const update = cartItems[indexArr]
          // cartItems[indexArr] = update
          const up = [...cartItems];
          setCartItems(up);
        }
  };



  return (
    <div className="flex flex-col items-center overflow-x-clip  bg-blue-50 w-[400px] h-screen   ">
      <div className=" flex flex-row w-full  items-center justify-between   p-[1rem] mb-2 bg-white ">
        <div className="text-[1rem] font-bold ">My Cart</div>
        <button className="">
          <FontAwesomeIcon
            onClick={() => setShowCart(false)}
            className="size-[10px]"
            icon={faX}
          />
        </button>
      </div>
      <div className="flex flex-col  items-center bg-white w-[90%]  rounded-xl shadow-sm ">
        {cartItems.length === 0 && (
          <div className="flex flex-col items-center">
            <img
              className="  w-[144px] h-[144px] "
              alt="empty cart"
              src={
                "https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png"
              }
              
            />
            <p className="text-lg pt-[10px] font-bold whitespace-nowrap  ">
   
              you don't have any items in your cart
            </p>
            <p className="text-sm  pb-[10px]">
              your favourite items are just a click away
            </p>
            <button
              onClick={() => setShowCart(false)}
              className=" text-[12px] w-32 mb-8  p-2 text-white bg-green-700 rounded"
            >
              Start shopping
            </button>
          </div>
        )}

        {cartItems.length !== 0 && (
          <div className="flex flex-col w-full">
            <div className=" flex flex-row gap-2 pl-[12px] py-3  ">
              <img
                src={
                  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/assets/eta-icons/30-mins-filled.png"
                }
                className="w-[44px] h-[44px]"
                alt="Othe2r"
              />
              <div className="flex flex-col ">
                <div className="text-[15px] font-bold">
                  Delivery in 21 minutes
                </div>
                <div className="text-[12px]">Shipment of {count} item</div>
              </div>
            </div>

            {cartItems.map((data) => (
              <div className=" flex flex-row items-center gap-2 pl-[12px] mb-[10px]">
                <img
                  src={
                    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/app/images/products/sliding_image/329500a.jpg?ts=1687949315"
                  }
                  className="w-[70px] h-[70px] rounded border "
                  alt="Other3"
                />

                <div className="flex flex-col text-[12px] ">
                  <div className=" ">{data.product}</div>
                  <div className=" ">Paneer</div>
                  <div className=" ">
                    200g{data.row} {data.col}
                  </div>
                  <div className="font-bold ">$90</div>
                </div>

                <div className="flex items-center ml-auto mr-[10px] w-[68px] h-8 border  border-green-950 bg-custom-green  rounded-md  text-green-950 font-bold overflow-clip">
                  <button
                    onClick={() => removeItem(data)}
                    className=" w-5 h-8 text-[10px] text-white"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <div className="flex justify-center grow text-white">
                    {data.quantity}
                  </div>
                  <button
                    onClick={() => addItem(data)}
                    className=" w-5 h-8 text-[10px]  text-white "
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default MyCart;


function BillCard(){
  return (
    <section className="bg-white w-[90%]">
      <h1>Bill Details</h1>
      {/* div>div*2>label>div>img+h1   */}
    </section>
  )
}