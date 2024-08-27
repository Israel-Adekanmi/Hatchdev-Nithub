import React from "react";
import "../styles/card.css";
import image1 from "../assets/image01.png";
import image2 from '../assets/image02.png'
import image3 from '../assets/image03.png'
import Repeat from "./repeat";
import ImageCard from "./imageCard";

const GroupFive: React.FC = () => {
  return (
    <div className="mt-8 w-full flex flex-col justify-center items-center">
      <Repeat
        title="Solutions for every need"
        desc="Join thousands of marketers and entrepreneurs for a 2-day event at the forefront of social commerce."
      />
      {/* Grid Div */}
      <div  className="mt-6 flex flex-wrap gap-4 justify-center">
        <ImageCard bgImg={image1} />
        <ImageCard bgImg={image2} />
        <ImageCard bgImg={image3} />
      </div>
    </div>
  );
};

export default GroupFive;
