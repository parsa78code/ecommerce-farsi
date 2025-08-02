import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"درباره"} text2={"ما"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 leading-7">
          <p>
            فورِوِر از علاقه به نوآوری و تمایل به تحول در نحوه خرید آنلاین متولد شد.
            سفر ما با یک ایده ساده آغاز شد: ایجاد بستری که مشتریان بتوانند به راحتی
            محصولات متنوع را از خانه خود کشف، بررسی و خریداری کنند.
          </p>
          <p>
            از زمان آغاز فعالیت، ما بی‌وقفه تلاش کرده‌ایم تا مجموعه‌ای متنوع از محصولات
            باکیفیت را که متناسب با هر سلیقه و نیاز باشد، گردآوری کنیم.
            از مد و زیبایی گرفته تا لوازم الکترونیکی و وسایل خانه، ما مجموعه گسترده‌ای را
            از برندها و تأمین‌کنندگان معتبر ارائه می‌دهیم.
          </p>
          <b className="text-gray-800">ماموریت ما</b>
          <p>
            ماموریت ما در فورِوِر، توانمندسازی مشتریان با <b>انتخاب‌های متنوع، راحتی و اعتماد</b> است.
            ما متعهد هستیم تجربه‌ای بی‌نقص از خرید آنلاین فراهم کنیم که فراتر از انتظارات شما باشد،
            از لحظه جستجو و سفارش تا تحویل و خدمات پس از فروش.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"چرا"} text2={"ما را انتخاب کنید"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 leading-6">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>تضمین کیفیت:</b>
          <p className="text-gray-600">
            ما با دقت محصولات را انتخاب و ارزیابی می‌کنیم تا مطمئن شویم با بالاترین استانداردهای کیفی مطابقت دارند.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>راحتی در خرید:</b>
          <p className="text-gray-600">
            با رابط کاربری ساده و فرآیند سفارش آسان ما، خرید آنلاین هرگز به این اندازه راحت نبوده است.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>خدمات پشتیبانی بی‌نظیر:</b>
          <p className="text-gray-600">
            تیمی از کارشناسان متعهد در کنار شما هستند تا تجربه خریدتان را به بهترین شکل ممکن پشتیبانی کنند
            و رضایت شما اولویت اصلی ما باشد.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
