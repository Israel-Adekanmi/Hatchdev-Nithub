import React from "react";
import "../styles/card.css";
import CardSec from "./card component";
import card4 from '../assets/Card 04.png';
import card5 from '../assets/Card 05.png';
import Repeat from "./repeat";
import circular from '../assets/circular profile.png';

const GroupTwo: React.FC = () => {
  return (
    <div className="mt-8 w-full flex flex-col justify-center items-center">
      <Repeat title='Solutions for every need' desc='Join thousands of marketers and entrepreneurs for a 2-day event at the forefront of social commerce.'/>
      {/* Grid Div */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-4 justify-center items-center">
        {/* First Row */}
        <div>
          <CardSec
            textColor="#B33CDB"
            head="INFLUENCER"
            body="Influencer marketing"
            footer="Create infinite pieces of content with our influencer product. Build,streamline,manage large-scale influencer programs"
          />
        </div>
        <div>
            <img src={card4} className="h-[282px] w-full"/>
        </div>

        {/* second row */}
        <div>
            <img src={circular} className="md:w-[292.92px] h-[283.15px] w-full"/>
        </div>
        <div>
          <CardSec
            textColor="#FBBA33"
            head="COMMUNITY"
            body="Community"
            footer="Bring your relationships to new heights with our community product. Discover your biggest enthusiasts"
          />
        </div>

         {/* Third Row */}
         <div>
          <CardSec
            textColor="#DE2879"
            head="SERVICES"
            body="Managed services"
            footer="Our full-service solution lets our experts do the heavy lifting to optimize your community for brand building and storytelling"
          />
        </div>
        <div>
            <img src={card5} className="md:w-[292.92px] h-[296.93px] w-full"/>
        </div>
        
      </div>
    </div>
  );
};

export default GroupTwo;
