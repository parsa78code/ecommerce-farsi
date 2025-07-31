import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ShopContext } from "../context/ShopContext";
// فرض بر اینه ProductItem رو ایمپورت کردی
import ProductItem from "./ProductItem";

export default function ProductSlider({ title = "محصولات پرفروش" }) {
  // ✅ حالا اینجا مجازیم
  const { products } = useContext(ShopContext);

  return (
    <div className="my-12 relative">
      {/* عنوان */}
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl">{title}</h2>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>

      {/* اسلایدر */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        spaceBetween={20}
        slidesPerView={1.5}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          1024: { slidesPerView: 4 },
        }}
        dir="rtl"
      >
        {products?.map((item) => (
          <SwiperSlide key={item._id}>
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* فلش‌های سفارشی */}
      <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-700 rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
