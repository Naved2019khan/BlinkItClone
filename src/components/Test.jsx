import React from "react";
import Slider from "react-slick";
import './Test.css'
export default function Test() {
  let value = true

  return (
    <>
    <SubComponent value={value} />
    <button className=" bg-green-300" onClick={()=> {value = false}}>Hello world</button>
    </>
    

  );
}

function SubComponent({value}){
  return (
    <>
      { value === true  && <h1>Hello</h1> }
    </>

  )
}