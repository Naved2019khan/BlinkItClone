import React from "react";
import { Link } from "react-router-dom";
import NextArrow from "../../components/Arrow/NextArrow";
import PrevArrow from "../../components/Arrow/PreviousArrow";

// Library
import Slider from "react-slick";
import GridItem from "./GridItem";

const GridContent = () => {
  let grid1 = [];
  for (let j = 0; j < 10; j++) {
    grid1.push(j);
  }

  let grid2 = [];

  for (let i = 0; i < 3; i++) {
    grid2.push(grid1);
  }

  // Slider Setting
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6.2,
    slidesToScroll: 6,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-[1200px] overflow-clip mt-3">
      {/* TODO:  Add Dynamic heading */}
      {grid2.map((item, index) => (
        <div key={index}>
          {/* repeated Div main */}

          <h1 className=" text-2xl font-bold pb-8">Dairy, Bread & Eggs</h1>
          {/* repeated Div row-main */}
          {/* <div className="flex flex-row gap-4 overflow-auto "    > */}
          <Slider {...settings} className="relative px-6">
            {item.map((elemet, indexAt) => (
              // repeated Div row-ith
            
                  <GridItem  key={index * 10 + indexAt}  index={index} indexAt={indexAt} />
   
    
            ))}
          </Slider>

          {/* </div> */}
        </div>
      ))}
    </div>
  );
};

export default GridContent;
