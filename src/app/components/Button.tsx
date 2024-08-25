import Image from "next/image";
import React from "react";

interface ButtonPropType {
  bgColor?: string;
  borderColor?: string;
  text: string;
  imageSrc?: string;
  TextColor?: string;
}

const Button: React.FC<ButtonPropType> = ({
  TextColor,
  bgColor,
  text,
  imageSrc,
  borderColor,
}) => {
  return (
    <div
      className={`w-60 xl:w-70  bg-black flex gap-5 xl:gap-5 rounded-full items-center px-5 h-[40px] mt-9`}
      // bg-[${bgColor}] border-[${borderColor}]

      style={{
        color: TextColor,
        backgroundColor: bgColor, // Use inline style for background color
        borderColor: borderColor, // Use inline style for border color
        borderWidth: borderColor ? "1px" : "0", // Apply border if borderColor is provided
      }}
    >
      <button className="font-extrabold ">{text}</button>
      {imageSrc && <Image src={imageSrc} alt="img" width={24} height={12}/>}
    </div>
  );
};

export default Button;
