import React from "react";
import Cardslider from "../../../components/CardSlider";
const Cards = () => {
  return (
    <div className="bg-[#FFC247]">
      <h1 className="text-black text-[36px] py-12 font-extrabold  max-w-[583px] mx-48">
        Loved by thousands of iPhone and Android users alike
      </h1>
      <Cardslider />

      <div className="flex gap-16">
        <h1 className="text-black text-[23px] py-12 font-extrabold ml-48">
          Featured in:
        </h1>
        <div className="w-[130px] h-[95px]">
          <img src="/images/cnb.png" className="w-[130px] h-[95px]" />
        </div>
        <div className="py-10 w-[130px] h-[95px]">
          <img src="/images/nyp.png" className="w-[130px] h-[19px]" />
        </div>
        <div className="py-8 w-[130px] h-[95px]">
          <img src="/images/financial.png" className="w-[130px] h-[42px]" />
        </div>
        <div className="py-7 w-[130px] h-[5px]">
          <img src="/images/readers.png" className="w-[130px] h-[56px]" />
        </div>
        <div className="py-2 w-[130px] h-[95px]">
          <img src="/images/zd.png" className="w-[130px] h-[82px]" />
        </div>
        <div className="py-8 w-[130px] h-[95px]">
          <img src="/images/wired.png" className="w-[130px] h-[26px]" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
