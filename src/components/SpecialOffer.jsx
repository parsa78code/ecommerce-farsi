import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

/**
 * props:
 *  - title: عنوان اصلی (مثلاً "پیشنهاد ویژه")
 *  - description: توضیح کوتاه زیر عنوان
 *  - endTime: زمان پایان به صورت ISO string یا timestamp (مثلاً "2025-08-10T12:00:00Z")
 *  - ctaLabel: متن دکمه (مثلاً "پیشنهاد بی‌نظیر شود")
 *  - backgroundImage: لینک تصویر زمینه
 *  - onCtaClick: هندلر کلیک دکمه
 */

function pad(num) {
  return String(num).padStart(2, "0");
}

const SpecialOffer = ({
  title = "پیشنهاد ویژه",
  description = "از فصل جدید لذت ببرید و مجموعه ما را تا ۵۰٪ تخفیف برای مدت محدود خریداری کنید.",
  endTime,
  ctaLabel = "پیشنهاد بی‌نظیر شود",
  backgroundImage,
  onCtaClick,
}) => {
  const calculate = () => {
    const now = new Date();
    const end = new Date(endTime);
    const diff = end - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculate());

  useEffect(() => {
    const iv = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);
    return () => clearInterval(iv);
  }, [endTime]);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-xl text-white">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-90"
        style={{
          backgroundImage: `url(${
            backgroundImage ||
            "https://via.placeholder.com/1200x500?text=Special+Offer"
          })`,
        }}
      ></div>
      <div className="relative flex flex-col md:flex-row items-center gap-8 px-6 py-12 md:py-20 max-w-7xl mx-auto">
        {/* چپ: تصویر/فضای خالی می‌تونه برای عکس مدل باشه */}
        <div className="flex-1 hidden md:block"></div>

        {/* راست: متن و تایمر */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
            <p className="text-sm md:text-base">{description}</p>
          </div>

          {/* تایمر */}
          <div className="flex flex-wrap gap-4 mt-4">
            {[
              { label: "روز", value: pad(timeLeft.days) },
              { label: "ساعت", value: pad(timeLeft.hours) },
              { label: "دقیقه", value: pad(timeLeft.minutes) },
              { label: "ثانیه", value: pad(timeLeft.seconds) },
            ].map((unit, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[70px]"
              >
                <div className="text-xl font-semibold">{unit.value}</div>
                <div className="text-xs">{unit.label}</div>
              </div>
            ))}
          </div>

          {/* دکمه */}
          <div className="mt-4">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 bg-white cursor-pointer hover:bg-gray-300 text-gray-900 font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
            >
              {ctaLabel}
            </button>
          </div>
        </div>

        {/* تصویر مدل (روی موبایل پنهان، دسکتاپ نمایش) */}
        <div className="flex-1 hidden md:flex justify-center">
          <div className="w-full max-w-sm">
            <img
              src={assets.hero_img}
              alt="model"
              className="rounded-2xl object-cover w-full h-full shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* فیدبک کوچک پائینی در صورت نیاز */}
    </div>
  );
};

// مثال استفاده
export default function SpecialOfferExample() {
  // زمان پایان، مثلاً ۳ روز بعد
  const future = new Date();
  future.setDate(future.getDate() + 3);
  const isoEnd = future.toISOString();

  return (
    <div className=" py-12">
      <SpecialOffer
        endTime={isoEnd}
        backgroundImage={assets.hero_img}
        onCtaClick={() => alert("رفتن به پیشنهاد ویژه")}
      />
    </div>
  );
}
