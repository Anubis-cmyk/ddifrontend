import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "@react-spring/web";
import {v4 as uuidv4} from "uuid";
import image1 from '../../assest/images/can1.png';
import image2 from '../../assest/images/can2.png';
import image3 from '../../assest/images/can3.png';

export default function Carroussel(props) {
  
  let slides = [
    {
      key: uuidv4(),
      content: <img src={image1} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={image2} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={image3} alt="3" />
    },
  ]

  const table = slides.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(1);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{ width: "70%",backgroundColor:"#f8f7f7a9", height: props.height, margin: props.margin,padding:"10px 20px" ,borderRadius:"10px" }}
    >
      
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
    
  );
}
