import React from "react";
import "../styles/card.css";
import close from "../assets/close 1.png";
import pngItem from "../assets/PngItem_214430 1.png";
import Repeat from "./repeat";
import gradBg from "../assets/Group 1000001647.png";
import { FaArrowRight } from "react-icons/fa";
import logoF from '../assets/Ellipse 499.png';

const GroupFour: React.FC = () => {
  return (
    <div className="mt-11 w-full flex flex-col items-center justify-center gap-8">
      {/* First Div Row */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img src={close} className="mt-8 w-[168px] h-[168px]" />
        <Repeat
          title="Happy Clients"
          desc="The Marketing Accountability Standards Board (MASB) endorses the definitions, purposes, and constructs of classes"
        />
      </div>

      {/* Second Div Row */}
      <div className="w-full flex flex-col md:flex-row md:w-[976px] items-center justify-center gap-4">
        <div className="text-left flex items-center w-full md:w-1/2">
          <div className="w-[477px] h-auto">
            <p
              className="mr-4 rounded-full flex items-center justify-center"
              style={{
                backgroundImage: `url(${logoF})`,
                backgroundSize: "cover",
                fontSize: '22px',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "50%",
                width: "90px",
                height: "90px",
              }}
            >
              F
            </p>
            <p className="week pb-6">
              Not weekly or monthly like other sites out there. This ensures
              that we offer prospective homebuyers and investors with the
              freshest- hottest deals on the Internet.
            </p>
            <p className="roh mt-6 mb-4">Rowhan Smith</p>
            <p className="ceo">CEO, Foreclosure</p>
          </div>
        </div>
        <div className="flex justify-center w-full md:w-1/2">
          <img src={pngItem} className="w-[345px] h-[477px]" />
        </div>
      </div>

      {/* Third Div Row */}
      <div
        style={{
          backgroundImage: `url(${gradBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "8px",
          width: "976px",
          height: "322px",
        }}
        className="mt-12 w-full flex flex-col items-center justify-center"
      >
        <p className="sub text-center pb-4">Subscribe to our newsletter</p>
        <p className="mb-4 join text-center md:w-[551px]">
          Join thousands of marketers and entrepreneurs for a 2-day event at
          <br />
          the forefront of social commerce.
        </p>
        <p className="made rounded-full md:w-[202px] flex items-center h-[52px] justify-center text-center text-brightWhite mt-4">
          Subscribe
          <span className="flex items-center justify-center w-4 h-4 border-2 ml-8 border-brightWhite rounded-full">
            <FaArrowRight className="text-brightWhite" size={11} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default GroupFour;
