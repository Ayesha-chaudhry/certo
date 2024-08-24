import { FeatureCardProps } from "@/utils/types/Types";
import Image from "next/image";
import React from "react";

const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  imgSrc,
  title,
  description,
}) => {
  return (
    <div key={id} className="w-[200px] h-[265px] flex flex-col gap-y-4 mx-auto">
      <Image src={imgSrc} className="mx-auto" alt={title} width={77} height={70}/>
      <h1 className="text-[19px] font-extrabold text-black text-center">
        {title}
      </h1>
      <p className="text-[16px] text-black text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
