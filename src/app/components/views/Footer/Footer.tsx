import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#02033B] p-20">
      <div className="grid grid-cols-3">
        {/* 1 */}
        <div className="flex flex-col gap-y-10">
          <h1 className="text-[23px] font-extrabold">Scan.Detect.Remove.</h1>
          <div className="flex gap-7">
            <img src="/images/x.png" alt="x" />
            <img src="/images/fb.png" alt="fb" />
            <img src="/images/utube.png" alt="utube" />
          </div>
          <div className="flex gap-2">
            <p className="text-[14px] underline">Privacy Policy</p>
            <p className="text-[14px] underline">Terms of Service</p>
          </div>
          <div className="w-[430px] text-[11px] leading-[18px] flex flex-col gap-y-5">
            <p>
              Copyright 2024 Certo Software Limited | Registered in England &
              Wales No. 10072356
            </p>
            <p>Designed & developed by Bigger Picture</p>
          </div>
        </div>
        {/* 2 */}
        <div>
          <h1 className="text-[35px] font-extrabold w-[188px]">Certo</h1>
          <div className="border-b-4 w-[188px] py-5"></div>

          <div className="flex flex-col py-12">
            <div className="flex gap-5 py-2">
              <img src="/images/span.png" />
              <p className="text-[19px] font-extrabold text-[#FFC247]">
                iPhone
              </p>
            </div>
            <div className="flex gap-5 py-2">
              <img src="/images/span.png" />
              <p className="text-[19px] font-extrabold text-[#FFC247]">
                Android
              </p>
            </div>
            <div className="flex gap-5 py-2">
              <img src="/images/span.png" />
              <p className="text-[19px] font-extrabold text-[#FFC247]">Help</p>
            </div>
            <div className="flex gap-5 py-2">
              <img src="/images/span.png" />
              <p className="text-[19px] font-extrabold text-[#FFC247]">About</p>
            </div>
            <div className="flex gap-5 py-2">
              <img src="/images/span.png" />
              <p className="text-[19px] font-extrabold text-[#FFC247]">
                Insights
              </p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="bg-[#FFC247] h-[232px] w-[436px] p-10 rounded-3xl bg-[url('/images/footercerto.png')]">
          <h1 className="text-[23px] text-black font-extrabold text-center">
            Sign up to our newsletter
          </h1>
          <p className="text-[15px] text-black text-center py-4">
            Receive the latest mobile security news, exclusive discounts &
            offers straight to your inbox!
          </p>
          <div>
            <div className="flex items-center rounded-full max-w-sm mx-auto py-4">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow px-4 py-2 text-gray-500 bg-white rounded-l-full focus:outline-none"
              />
              <button className="bg-black text-white font-semibold py-2 px-6 rounded-r-full">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[12px] grid grid-cols-1">
            Apple, the Apple logo, and iPhone are trademarks of Apple lnc.,
            registered in the U.S. and other countires. App Store is a service
            mark of Apple lnc. Android, Google Play and the Google Play logo are
            trademarks of Google LLC.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
