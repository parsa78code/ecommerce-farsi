import React from "react";
import { assets } from "../assets/assets";

const OurPolocu = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 ">
      <div className="">
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">سیاست آسان مبادله</p>
        <p className="text-gray-400">
          ما سیاست مبادله رایگان بدون دردسر را ارائه می دهیم
        </p>
      </div>
      <div className="">
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">خط مشی بازگشت 7 روزه</p>
        <p className="text-gray-400">
          ما 7 روز سیاست بازگشت رایگان ارائه می دهیم
        </p>
      </div>
      <div className="">
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">بهترین پشتیبانی مشتری</p>
        <p className="text-gray-400">ما پشتیبانی مشتری 24/7 را ارائه می دهیم</p>
      </div>
    </div>
  );
};

export default OurPolocu;
