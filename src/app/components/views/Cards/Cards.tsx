import React from "react";
import Cardslider from "../../../components/CardSlider";
import Image from "next/image";
const Cards = () => {
  return (
    <div className="bg-[#FFC247]">
      <h1 className="text-black text-3xl md:text-[36px] py-12 font-extrabold  xl:max-w-[583px] mx-3 xl:mx-48">
        Loved by thousands of iPhone and Android users alike
      </h1>
      <Cardslider />

      <div className="hidden lg:flex gap-4 xl:gap-16 ">
        <h1 className="text-black text-[23px] py-12 font-extrabold xl:ml-48">
          Featured in:
        </h1>
        <div className="w-[130px] h-[95px]">
          <Image src="/images/cnb.png" alt="img" width={130} height={95} />
        </div>
        <div className="py-10 w-[130px] h-[95px]">
          <Image src="/images/nyp.png" alt='img' width={130} height={19} />
        </div>
        <div className="py-8 w-[130px] h-[95px]">
          <Image src="/images/financial.png" alt='img' width={130} height={42}/>
        </div>
        <div className="py-7 w-[130px] h-[5px]">
          <Image src="/images/readers.png" alt='img' width={130} height={56}/>
        </div>
        <div className="py-2 w-[130px] h-[95px]">
          <Image src="/images/zd.png" alt='img' width={130} height={82} />
        </div>
        <div className="py-8 w-[130px] h-[95px]">
          <Image src="/images/wired.png" alt='img' width={130} height={26} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
