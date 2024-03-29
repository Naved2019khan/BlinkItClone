import React, { useEffect,useState, useLayoutEffect,useContext, useRef } from "react";
import NextArrow from "../../../components/Arrow/NextArrow";
import Slider from "react-slick";
import PrevArrow from "../../../components/Arrow/PreviousArrow";
import bread from "../../../Assets/bread_rp.avif"
import { useParams } from "react-router-dom";
import { UserContext } from "../../../ContextAPI/MyProvider";
import { ItemButton } from "../../../components/mainContent/GridItem";
import { useLocation } from 'react-router-dom';


const ItemPage = () => {

  let [item, setItem] = useState(0);
  let { cartItems, setCartItems } = useContext(UserContext);
  let small_list = [];
  let {id} = useParams();
  let index = Math.floor(id/10)
  let indexAt = id%10
  for (let i = 0; i < 7; i++) {
    small_list.push(bread);
  }

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const { pathname } = useLocation();



  // useLayoutEffect(()=>{
  //   window.scrollTo(0,0)
  // } ,[])



  useEffect(() => {
    console.log("+++UseEffect+++");
    let cleanArr = cartItems.filter((item) => item.quantity !== 0);
    if (cleanArr.length !== cartItems.length) {
      setCartItems(cleanArr);
    }

    if (cartItems.length !== 0) {
      const indexArr = cartItems.findIndex(
        (item) => item.row === index && item.col === indexAt
      );

      if (indexArr !== -1) {
        setItem(cartItems[indexArr].quantity);
      }
    }
  }, [cartItems]);

  console.table(id)

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
    // <div >

  
    <div   className=" flex flex-row w-[1200px] h-full">
      {/* grid 1 */}
      <div className="w-[700px] border-r">
        <img
           className=" w-[480px] h-[480px]"
          src={
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_18396.jpg?ts=1697722165"
          }
       
     
        />

        <div className=" w-[600px]  ">
          <Slider {...settings}>
            {small_list.map((item) => (
              <div className="flex flex-row ">
                <div className="w-[66px] flex flex-row items-center justify-center border rounded ">
                  <img
                    className="w-[60px] h-[60px]"
                    src={
                      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/images/products/full_screen/pro_18396.jpg?ts=1697722165"
                    }
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex flex-col items-start  w-[700px] mt-[32px] text-[14px]  ">
          <h1 className="text-[24px] font-bold mb-[16px]">Product Detail</h1>
          <div className="font-bold mt-[12px] mb-[8px]">Key Features</div>
          <div>Fluffy and soft</div>
          <div>Ideal for making sandwiches and toasts.</div>
          <div className="font-bold mt-[12px] mb-[8px]" >Ingredients</div>
          <div >
            Wheat Flour [Atta (52%)], Water, Yeast, Sugar, Edible Common Salt,
            Wheat Gluten, , Edible Vegetable Oil (Palm), Class II Preservative
            (282), Malt Powder, Improvers [170 (i), 510, 923, 1100], Acidity
            Regulator (260), Emulsifiers [471, 472e, 481 (i)], and Antioxidant
            (300).
          </div>
          <div>ALLERGEN DECLARATION: PRODUCT CONTAINS WHEAT INGREDIENTS.</div>
        
        <div className="font-bold mt-[12px] mb-[8px]" >Return Policy</div>
        <div>
          This Item is non-returnable. For a damaged, defective, incorrect or
          expired item, you can request a replacement within 72 hours of
          delivery. In case of an incorrect item, you may raise a replacement or
          return request only if the item is sealed/ unopened/ unused and in
          original condition.
        </div>
        <div className="font-bold mt-[12px] mb-[8px]">Description</div>
        <div>
          English Oven Brown Bread is a healthy and nutritious daily bread which
          is made with the richness of atta. It can be used to prepare
          sandwiches, toast, etc.
        </div>
        <div className="font-bold mt-[12px] mb-[8px]">Disclaimer</div>
        <div>
          Every effort is made to maintain accuracy of all information. However,
          actual product packaging and materials may contain more and/or
          different information. It is recommended not to solely rely on the
          information presented.
        </div>
        </div>
      </div>

{/* grid 2 */}
      <div className=" p-[48px] sticky top-[90px] bottom-0 h-full ">
        <div className="flex flex-row gap-1 text-sm font-bold ">
          <div>Home </div>
          <div>/ Bread & Pav</div>
          <div className="text-gray-300 ">/ English Brown Bread </div>
        </div>
        <div>English Oven Brown Bread</div>
        <div>View all by English Oven</div>

        <div className="flex flex-row items-center border-t justify-between">
          <div>
            <div>400g</div>
            <div>MRP 50</div>
            <div>(Including taxes)</div>
          </div>
          { item == 0 && <button 
          onClick={appendItem}
          className=" w-20 h-8 border  border-green-950 bg-custom-green bg-opacity-10  rounded-md  text-green-950 font-bold">
            ADD 
          </button>}
          {
            item != 0 && 
            <ItemButton index={index} indexAt={indexAt} item={item} setItem={setItem}/>
          }
        </div>

        <div className=" flex flex-col  ">
          <div>Why shop from blinkit?</div>

          <div className="flex flex-row gap-4 items-center my-3">
            <img
            className="w-[56px] h-[56px]"
              src={
                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png"
              }
            />
            <div className="flex flex-col">

           
            <div className=" text-sm" >Best Prices & Offers</div>
            <div className=" text-xs" >
              Get your order delivered to your doorstep at the earliest from
              dark stores near you.
            </div>
            </div>
          </div>

          <div className="flex flex-row gap-4 items-center my-3">
            <img
            className="w-[56px] h-[56px]"
              src={
                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png"
              }
            />
            <div className="flex flex-col">

           
            <div className=" text-sm" >Best Prices & Offers</div>
            <div className=" text-xs" >
              Get your order delivered to your doorstep at the earliest from
              dark stores near you.
            </div>
            </div>
          </div>


          <div className="flex flex-row gap-4 items-center my-3">
            <img
            className="w-[56px] h-[56px]"
              src={
                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png"
              }
            />
            <div className="flex flex-col">

           
            <div className=" text-sm" >Best Prices & Offers</div>
            <div className=" text-xs" >
              Get your order delivered to your doorstep at the earliest from
              dark stores near you.
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    //  <div className="w-full h-[600px] bg-purple-300">  </div>
    // </div>
  );
};

export default ItemPage;
