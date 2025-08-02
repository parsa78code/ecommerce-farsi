import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div dir="rtl">
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"تماس"} text2={"با ما"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="تماس با ما"
        />
        <div className="flex flex-col justify-center items-start gap-6 text-right">
          <p className="font-semibold text-xl text-gray-600">فروشگاه ما</p>
          <p className="text-gray-600 leading-7">
            تهران، خیابان مثال، پلاک ۱۲۳ <br /> واحد ۳، ایران
          </p>
          <p className="text-gray-600 leading-7">
            تلفن: ۰۲۱-۱۲۳۴۵۶۷۸
            <br />
            ایمیل: admin@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-600">فرصت‌های شغلی</p>
          <p className="text-gray-600">
            برای آشنایی بیشتر با تیم ما و مشاهده موقعیت‌های شغلی، کلیک کنید.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            مشاهده فرصت‌های شغلی
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
