import React from 'react'
import image1 from "../../Assets/one.avif";
import image2 from "../../Assets/two.avif";
import image3 from "../../Assets/three.avif";
import image4 from "../../Assets/four.avif";
import repeat from "../../Assets/paan.avif";

import { Link } from 'react-router-dom';
import GridContent from './GridContent';


const MainContent = () => {

    // Dummy Data
  const horizontal_list = [image1, image2, image3, image4];
  let small_list = [];
  for (let i = 0; i < 10; i++) {
    small_list.push(repeat);
  }

  




  return ( 
    <>
    <div
        style={{ width: "1240px" }}
        className="flex flex-col   items-center"
      >
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
          alt="paan corner banner"
          loading="eager"
          style={{
            borderRadius: "0px",
            objectFit: "fill",
            cursor: "default",
            backgroundSize: "cover",
          }}
        />
        <div style={{ width: "1200px" }} className="overflow-clip">
          <div className="flex flex-row  gap-2">
            {horizontal_list.map((item, index) => (
              <Link to={`products/${index}`}>
              <img
                width={300}
                key={index}
                src={item}
                alt={`Image ${index + 1}`}
              />
              </Link>
            ))}
          </div>

          <div className="flex flex-col ">
            <div className="flex flex-row ">
              {small_list.map((item, index) => (
                <img width={120} key={index} src={item} />
              ))}
            </div>
            <div className="flex flex-row ">
              {small_list.map((item, index) => (
                <img width={120} key={index} src={item} />
              ))}
            </div>
          </div>

            <GridContent/>
         
        </div>
      </div>

      
      </>
  )
}

export default MainContent