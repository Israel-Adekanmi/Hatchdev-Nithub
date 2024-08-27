import React from "react";
import "../styles/card.css";
import NumberSec from "./number";


const GroupThree: React.FC = () => {
  return (
    <div className="bg-three w-full min-w-full h-[590px] flex flex-col justify-center items-center">
        <div className="items-center flex flex-col md:w-[780px] w-full text-center">
            <p className="txtSev w-full">Search through more than 11 million <br/> 
            social media profiles</p>
            <p className="txtSix mt-6 w-full">Heepsy’s search filters help you find exactly what you’re looking for, and <br/> 
            our influencer reports provide you with the metrics</p>
        </div>
        <div className='mt-6 grid-cols-2 max-w-[1200px] mx-auto md:grid-cols-4 gap-4 grid justify-center items-center w-full'>
            <div className="flex justify-center"><NumberSec head='2260' footer="Satisfied Brands" /></div>
            <div className="flex justify-center"><NumberSec head='1324' footer="Satisfied Clients" /></div>
            <div className="flex justify-center"><NumberSec head='3453' footer="Sponsored" /></div>
            <div className="flex justify-center"><NumberSec head='9786' footer="Completed" /></div>
        </div>
    </div>
  );
};

export default GroupThree;