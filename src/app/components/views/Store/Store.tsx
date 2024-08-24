import React from "react";
import Button from "../../Button";
import Image from "next/image";

const Store = () => {
  return (
    <div className="bg-white md:py-[84px] xl:px-[132px]">
      <div className="block lg:flex  ">
        {/* Left */}
        <div className="xl:w-[50%] p-5 xl:pl-16">
          <h1 className="text-black text-2xl md:text-3xl lg:text-[36px] font-extrabold md:max-w-lg">
            At Certo, mobile security is not an afterthought, it&apos;s what we do.
          </h1>
          <p className="text-black max-w-lg my-5 xl:my-16">
            With years of experience in mobile security and spyware detectio,
            our products have helped countless people safeguard their devices
            and find peace of mind.
          </p>
          <div className="max-w-[33%] ">
            <Button
              TextColor="#000"
              bgColor="#FFC247"
              text="get Certo iPhone"
              imageSrc="/images/arrow.png"
            />
            <Button
              TextColor="#000"
              bgColor="white"
              text="get Certo for Android"
              borderColor="black"
            />
          </div>
        </div>

        {/* Right */}
        <div className="my-12 mx-12 md:mx-20">
          <Image
            src="/images/stock.png"
            alt="img"
            width={468}
            height={468}
            className="border-solid border-t-[5px] border-r-[15px] border-b-[5px] border-[#FFC247]"
          />
        </div>
      </div>
    </div>
  );
};

export default Store;
