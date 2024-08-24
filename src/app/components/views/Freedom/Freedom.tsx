import React from "react";
import Button from "../../Button";
import { featuresData } from "@/utils/rawData";
import FeatureCard from "../../FeatureCard";





const Freedom = () => {
  return (
    <div className="bg-[#F3F8FF] xl:px-[300px] pb-20">
      <h1 className="py-[84px] text-center text-[36px] font-extrabold text-black">
        Get your freedom back, stop mobile <br /> spyware today
      </h1>
      <div className="xl:w-[840px] mx-12 xl:p-16 lg:mx-auto bg-white rounded-3xl">
        <div className="xl:w-[696px] xl:h-[602px] p-3">
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:mx-12">
            {featuresData.map((feature) => (
              <FeatureCard
                key={feature.id}
                imgSrc={feature.imgSrc}
                title={feature.title}
                description={feature.description} id={0}              />
            ))}
          </div>

          <div className="hidden lg:flex gap-12 lg:mx-48 xl:mx-12 -mt-4">
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
      </div>
    </div>
  );
};

export default Freedom;
