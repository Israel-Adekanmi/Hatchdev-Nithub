import React from "react";
import "../styles/card.css";

interface RepeatProps {
    title: string;
    desc: string;
}
const Repeat: React.FC<RepeatProps> = ({title, desc}) => {
  return (
    <div className="mt-8 flex flex-col items-center mb-8">
      <p className="textOne w-full  text-center">{title}</p>
      <p className="foot w-[551px] h-[56px] text-center mt-4">
        {desc}
      </p>
    </div>
  );
};

export default Repeat;
