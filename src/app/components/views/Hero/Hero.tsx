import React from "react";
import Button from "../../Button";

const Hero = () => {
  return (
    <div className="bg-[#E7EFFA] md:flex"> 
      {/* Right  */}
      <div className="lg:w-[50%] text-black">
        <div className="max-w-xl mx-auto xl:mt-[123.38px]">
          <div className="flex-col gap-6">
          <h1 className="md:mt-20  mx-3 text-[30px] lg:text-[58px] font-extrabold">
            Your mobile privacy is our mission
          </h1>
          <p className="xl:my-12 mx-3">
            Think your phone has been hacked? Our trusted apps make it easy for
            you to scan, detect and remove threats form your iPhone and Android
            devices.
          </p>
          </div>
          
          <div className="xl:flex gap-12 mx-10 ">
          <Button bgColor="#FFC247" text="get Certo for iPhone" imageSrc="/images/arrow.png"/>
          <Button bgColor="white" text="get Certo for Android" borderColor="black"/>
          </div>
          
        </div>
      </div>
      {/* Left */}
      <div className=" lg:w-[50%] mt-[100px]">
        <img
          src="/images/hero.png"
          width={"640px"}
          className=" border-solid border-t-[21px] border-l-[21px] border-[#4335DE]"
        />
      </div>
    </div>
  );
};

export default Hero;
