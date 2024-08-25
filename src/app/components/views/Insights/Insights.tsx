import React from "react";
import Button from "../../Button";
import Image from "next/image";

const Insights = () => {
  return (
    <div className="bg-[#F3F8FF] py-20">
      <h1 className="text-[56px] font-extrabold text-black text-center">
        Latest insights
      </h1>
      <div className="md:flex space-x-3 lg:justify-around mx-3 space-y-6 md:space-y-0 xl:mx-40 mt-8">
        {/* 1 */}
        <div className="w-[300px] h-[534px] bg-white rounded-[48px] ">
          <div className="relative">
            <Image
              src="/images/girl.png"
              alt="img"
              className="rounded-t-[48px]"
              width={320}
              height={180}
            />
            <button className="absolute left-6 top-5 w-[112px] h-[44px] rounded-full bg-white text-black">
              Experties
            </button>
          </div>
          <div className="flex flex-col py-10">
            <h1 className="text-[23px] font-bold text-black w-[180px] mx-auto">
              Signs Your Ex is Spying On You
            </h1>
            <p className="text-[16px] py-5 text-black w-[221px] mx-auto">
              In an ideal world, after a relationship ends both you and your ex
              will move on. But what if they can&lsquo;t let go, and start spying on
              your...
            </p>
          </div>{" "}
           
        </div>
        {/* 2 */}
        <div className="w-[300px] h-[534px] bg-white rounded-[48px]">
          <div className="relative">
            <Image
              src="/images/samsung.png"
              alt="img"
              className="rounded-t-[48px]"
              width={320}
              height={180}
            />
            <button className="absolute left-6 top-5 w-[112px] h-[44px] rounded-full bg-white text-black">
              Guide
            </button>
          </div>
          <div className="flex flex-col py-2">
            <h1 className="text-[23px] font-bold text-black w-[180px] mx-auto">
              How to Remove a Hacker from Your Samsung Phone
            </h1>
            <p className="text-[16px] py-5 text-black w-[221px] mx-auto">
              Samsung is the second most popular manufacturer of smartphones in
              the world, with a market share of 28.19% compared to Apple&lsquo;s
              28.43% as...
            </p>
          </div>
        </div>{" "}
         {/* 3 */}
        <div className="w-[300px] h-[534px] bg-white rounded-[48px]">
          <div className="relative">
            <Image
              src="/images/cam.png"
              alt="img"
              className="rounded-t-[48px]"
              width={320}
              height={180}
            />
            <button className="absolute left-6 top-5 w-[112px] h-[44px] rounded-full bg-white text-black">
              Experties
            </button>
          </div>
          <div className="flex flex-col py-10">
            <h1 className="text-[23px] font-bold text-black w-[180px] mx-auto">
              Signs Your Ex is Spying On You
            </h1>
            <p className="text-[16px] py-5 text-black w-[221px] mx-auto">
              In an ideal world, after a relationship ends both you and your ex
              will move on. But what if they can&lsquo;t let go, and start spying on
              your...
            </p>
          </div>
        </div>
      </div>{" "}
       
      <div className="hidden lg:block w-[206px] mx-auto">
        <Button
          TextColor="black"
          bgColor="#FFC247"
          text="View all insights"
          imageSrc="/images/arrow.png"
        />
      </div>
    </div>
  );
};

export default Insights;
