import React from "react";
import Button from "../../Button";

const Freedom = () => {
  return (
    <div className=" bg-[#F3F8FF] px-[300px] pb-20">
      <h1 className="py-[84px] text-center text-[36px] font-extrabold text-black">
        Get your freedom back, stop mobile <br /> spyware today
      </h1>
      <div className="w-[840px] p-16 mx-auto bg-white rounded-3xl">
        <div className="w-[696px] h-[602px] p-3">
          <div className="flex flex-wrap gap-2">
            <div className="w-[200px] h-[265px] flex flex-col gap-y-4">
              <img src="/images/eye.png" className="mx-auto" />
              <h1 className="text-[19px] font-extrabold text-black text-center">
                Spyware detection
              </h1>
              <p className="text-[16px] text-black text-center">
                Our advanced spyware detection engine can identify if a device
                contains spyware or bugging software.
              </p>
            </div>
            <div className="w-[200px] h-[265px] flex flex-col gap-y-4">
              <img src="/images/key.png" className="mx-auto" />
              <h1 className="text-[19px] font-extrabold text-black text-center">
                Keylogger detection
              </h1>
              <p className="text-[16px] text-black text-center">
                Find malicious keyboards installed on your device that could
                allow someone to record things you type (e.g.passwords).
              </p>
            </div>
            <div className="w-[200px] h-[265px] flex flex-col gap-y-4">
              <img src="/images/apps.png" className="mx-auto" />
              <h1 className="text-[19px] font-extrabold text-black text-center">
                Find tracking apps
              </h1>
              <p className="text-[16px] text-black text-center">
                Check which apps can access your location, microphone or camera,
                Get alerted if a known tracking app is installed.
              </p>
            </div>
            <div className="w-[200px] h-[265px] flex flex-col gap-y-4">
              <img src="/images/os.png" className="mx-auto" />
              <h1 className="text-[19px] font-extrabold text-black text-center">
                OS integrity check
              </h1>
              <p className="text-[16px] text-black text-center">
                Analyze your operating system for signs of tampering that could
                compromise security, such as Jalibreaking.
              </p>
            </div>
            <div className="w-[200px] h-[265px] flex flex-col gap-y-4">
              <img src="/images/threat.png" className="mx-auto" />
              <h1 className="text-[19px] font-extrabold text-black text-center">
                Threat removal
              </h1>
              <p className="text-[16px] text-black text-center">
                Our intelligent scan will either safely remove threats for you
                or provide easy-to-follow instructions.
              </p>
            </div>
            <div className="w-[200px] h-[265px] flex flex-col gap-y-4">
              <img src="/images/easy.png" className="mx-auto" />
              <h1 className="text-[19px] font-extrabold text-black text-center">
                Easy to use
              </h1>
              <p className="text-[16px] text-black text-center">
                We create easy to use apps that can check your device for
                vulnerabilities in a matter of minutes.
              </p>
            </div>
          </div>
          <div className="flex gap-12 mx-20">
            <Button
              TextColor="#000"
              bgColor="#FFC247"
              text="get Certo for iPhone"
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
