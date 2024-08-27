import React from "react";
import "../styles/card.css";

interface NumberProps {
  head: string;
  footer: string;
}

const NumberSec: React.FC<NumberProps> = ({head, footer }) => {
  return (
    <div className="mt-4 flex-col w-full h-[64px]">
      <p className="mb-2 numHead w-full">
        {head}
      </p>
      <p className="w-full numFoot mb-3">{footer}</p>
     
    </div>
  );
};

export default NumberSec;
