/* eslint-disable no-irregular-whitespace */
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import proIcon from "../assets/profile icon.png";
import card2 from "../assets/Card 02.png";
import card3 from "../assets/Card 03.png";
import card from "../assets/Card 10.png";
import groupLogos from '../assets/Logo group.png';
import '../styles/second.css'

const GroupOne: React.FC = () => {
  return (
    <div>
    <div className="flex flex-col relative md:flex-row lastCol">
        {/* first column */}
      <div className="md:w-[571px] w-full h-[600px] flex flex-col justify-end">
        <p className="header leading-none">
          Tell a better<br />brand story
        </p>
        <p className="firstColText mt-6">
          Automate the way you search through hashtags and suggested <br />
          profiles to find results 100x faster.
        </p>
        <button className="demoTwo flex items-center justify-center w-[202px] h-[52px] text-white rounded-full px-3 mt-6">
          Request Demo
          <span className="w-6 h-6 border-2 ml-2 border-white rounded-full">
            <FaArrowRight className="text-white ml-1 mt-1" size={15} />
          </span>
        </button>
      </div>

      {/* Second column */}
      <div className=" mt-16 md:w-[320px] w-full flex flex-col h-[600px] items-end">
        <div className="bg-gray-500 rounded-xl flex flex-col items-center relative md:w-[188px] w-full h-[218px]">
          <img
            src={proIcon}
            className='iconImg w-12 h-12 border-2 border-white rounded-full object-cover absolute right-2" alt="Profile Icon'
          />
          <p className='colText text-white mt-8 text-center'>
            Amanda M. <br /> Data
          </p>
          <div className="bg-white rounded-lg py-4 w-[155px] h-[95px] mt-auto mb-4 flex flex-col justify-center items-center">
            <p className="SecColText2">Your Growth</p>
            <p className="SecColText3">3,000</p>
          </div>
        </div>
        <div className="mr-0 my-4  w-full flex justify-end">
          <img className="md:w-[409.29px] h-[339.31px] w-full" src={card} />
        </div>
      </div>

      {/* Third column */}
      <div className="ml-auto md:w-[315px] flex-none flex flex-col items-end w-full h-[600px] mt-8">
        <img className=" w-full h-[290.98px]" src={card2} />
        <img className=" w-full h-[113px]" src={card3} />
        <div className="emoji w-full md:w-[200px] h-[76px] mt-5 bg-gray-400 rounded-lg">
          <p className="py-2  items-center">😲 ​​😡​ ❤️​</p>
        </div>
      </div>
    </div>
    <div className="w-full items-center mt-4">
        <p className='textSome'>SOME OF OUR TRUSTED CLIENTS</p>
        <img src={groupLogos} className="w-full h-[32.26px] mt-16"/>
    </div>
    </div>
  );
};

export default GroupOne;
