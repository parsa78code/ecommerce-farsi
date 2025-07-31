import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
      <div className="">
        <img src={assets.logo} className="mb-5 w-32" alt="" />
        <p className="w-full md:w-2/3 text-gray-600">
          برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن
          ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
          گرافیک است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم
          ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
          طراحان گرافیک است.
        </p>
      </div>
      <div className="">
        <p className="text-xl font-medium mb-6">محصولات</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>همه</li>
          <li> تیشرت</li>
          <li>هودی</li>
          <li>ست ورزشی</li>
        </ul>
      </div>

      <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+1-000-000-0000</li>
          <li>greatstackdev@gmail.com</li>
        </ul>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ greatstack.dev - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
