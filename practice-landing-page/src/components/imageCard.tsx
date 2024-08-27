import React from "react";
import "../styles/card.css";
import { FaArrowRight } from "react-icons/fa";

interface ImgProps {
  bgImg: string;
}
const ImageCard: React.FC<ImgProps> = ({ bgImg }) => {
  return (
    <div
    style={{
        backgroundImage: `url(${bgImg})`, // Use the bgImg prop as a URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
        width: '360px', // Ensure the width and height are defined
        height: '300px',
        position: 'relative'
      }}
      className="mt-8 flex flex-col mb-12"
    >
      <div className="content w-[272px] mb-5 h-[175px] flex flex-col rounded-lg p-4 bg-white">
        <p className="rebel text-left">Rebel Clothing</p>
        <div className="mt-3 grid grid-cols-2 text-left">
          <div>
            <p className="follow">6.7 M</p>
            <p className="engage">FOLLOWER REACH</p>
          </div>
          <div>
            <p className="follow">56.2 K</p>
            <p className="engage">ENGAGEMENT</p>
          </div>
        </div>
        <p className="mt-4 man flex items-center h-[18px] text-left text-brightBlue">
          Learn More
          <span className="flex items-center justify-center w-4 h-4 border-2 ml-2 border-brightBlue rounded-full">
            <FaArrowRight className="text-brightBlue" size={11} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
