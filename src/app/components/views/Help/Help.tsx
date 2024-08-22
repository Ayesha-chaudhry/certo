import React from "react";
import Button from "../../Button";

const Help = () => {
  return (
    <div className=" bg-white">
      <div className="flex mx-[264px] py-[84px]">
        {/* Right  */}
        <div className="w-[50%]">
          <div className="bg-[#F7C95F] w-[460px] flex flex-col gap-5 py-20 rounded-[48px]">
            <h1 className="text-[23px] text-black font-extrabold mx-12">
              Read our story
            </h1>
            <p className="text-[16px] text-black mx-12">
              Find out why thousands trust Certo to secure their mobile world.
            </p>
            <div className="flex gap-12 mx-12">
              <Button
                bgColor="#4335DE"
                TextColor="#FFFFFF"
                text="About us"
                imageSrc="/images/whitearrow.png"
              />
            </div>
          </div>
        </div>
        {/* Left  */}
        <div className="w-[50%]">
          <div className="w-[308px] flex flex-col gap-5 py-20 rounded-[48px]">
            <h1 className="text-[23px] text-black font-extrabold mx-12">
              Help Center
            </h1>
            <p className="text-[16px] text-black mx-12">
              Help topics, getting started guides and FAQs.
            </p>
            <div className="flex mx-12">
              <Button
                borderColor="#000"
                bgColor="#FFF"
                TextColor="#000"
                text="Visit help center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
