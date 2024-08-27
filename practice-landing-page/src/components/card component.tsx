import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../styles/card.css";

interface CardProps {
  textColor: string;
  head: string;
  body: string;
  footer: string;
}

const CardSec: React.FC<CardProps> = ({ textColor, head, body, footer }) => {
  return (
    <div className="flex-col w-full h-[212px] text-left">
      <p style={{ color: textColor }} className="mb-2 head w-full h-[18px]">
        {head}
      </p>
      <p className="w-full h-[40px] body mb-3">{body}</p>
      <p className="foot w-[340px] h-[84px] mb-4">{footer}</p>
      <p className="man flex items-center h-[18px] text-left text-brightBlack">
        Learn More
        <span className="flex items-center justify-center w-4 h-4 border-2 ml-2 border-brightBlack rounded-full">
          <FaArrowRight className="text-brightBlack" size={11} />
        </span>
      </p>
    </div>
  );
};

export default CardSec;
