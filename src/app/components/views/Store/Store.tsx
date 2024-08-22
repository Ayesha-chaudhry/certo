import React from "react";
import Button from "../../Button";

const Store = () => {
  return (
    <div className=" bg-white py-[84px] px-[132px]">
      <div className="flex gap- ">
        {/* Left */}
        <div className="w-[50%] pl-16">
          <h1 className="text-black text-[36px] font-extrabold max-w-lg">
            At Certo, mobile security is not an afterthought, it's what we do.
          </h1>
          <p className="text-black max-w-lg my-16">
            With years of experience in mobile security and spyware detectio,
            our products have helped countless people safeguard their devices
            and find peace of mind.
          </p>
          <div className="max-w-[33%] ">
          <Button TextColor="#000" bgColor="#FFC247" text="get Certo for iPhone" imageSrc="/images/arrow.png"/>
          <Button TextColor="#000" bgColor="white" text="get Certo for Android" borderColor="black"/>
          </div>
        </div>
        
        {/* Right */}
        <div className="w-[50%]">
          <img src="/images/stock.png" 
          className=" border-solid border-t-[5px] border-r-[15px] border-b-[5px] border-[#FFC247]"
          />
        </div>
      </div>
    </div>
  );
};

export default Store;
