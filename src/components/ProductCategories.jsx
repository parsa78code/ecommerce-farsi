import damanImg from "../assets/dam2.svg";
// import pirahanImg from "../assets/pirahan.svg";
// import shalvarImg from "../assets/shalvar.svg";
import crupImg from "../assets/crup.svg";
/**
 * هر آیتم دسته‌بندی می‌تونه این ساختار رو داشته باشه:
 * {
 *   title: "دامن",
 *   image: "https://...jpg",
 *   subtitle?: "جدید", // اختیاری، مثل تگ یا وضعیت
 *   actionLabel?: "مشاهده", // نوشته دکمه
 *   onClick?: () => {} // هندلر کلیک
 * }
 */

const CategoryCard = ({
  title,
  image,
  subtitle,
  // actionLabel = "",
  // onClick,
}) => {
  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-105">
      {/* تصویر */}
      <div className="w-full h-64 bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* اورلی رنگی روی هاور */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="flex flex-col gap-2">
          {subtitle && (
            <span className="self-start bg-white/90 text-xs font-medium px-3 py-1 rounded-full shadow">
              {subtitle}
            </span>
          )}
          <h3 className="text-white font-bold text-lg">{title}</h3>
          {/* <button
            onClick={onClick}
            className="mt-2 bg-white/90 text-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:bg-white transition"
          >
            {actionLabel}
          </button> */}
        </div>
      </div>

      {/* پایین کارت (همیشه نمایش داده می‌شود) */}
      {/* <div className="bg-white pt-3 pb-2 px-3 text-center">
        <div className="text-sm font-medium text-gray-700">{title}</div>
      </div> */}
    </div>
  );
};

const ProductCategories = ({ categories }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      {/* عنوان بخش */}
      <div className="flex justify-center items-center mb-8">
        <h2 className="text-3xl   pb-1">دسته‌بندی محصولات</h2>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>

      {/* گرید دسته‌بندی‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <CategoryCard
            key={i}
            title={cat.title}
            image={cat.image}
            subtitle={cat.subtitle}
            actionLabel={cat.actionLabel}
            onClick={cat.onClick}
          />
        ))}
      </div>
    </div>
  );
};

// نمونه استفاده
export default function ExampleWrapper() {
  const categories = [
    {
      title: "دامن",
      subtitle: "جدید",
      image: damanImg,
      actionLabel: "مشاهده",
      onClick: () => alert("دامن"),
    },
    {
      title: "پیراهن",
      image: damanImg,
      actionLabel: "مشاهده",
      onClick: () => alert("پیراهن"),
    },
    {
      title: "شلوار",
      image: damanImg,
      subtitle: "پرفروش",
      onClick: () => alert("شلوار"),
    },
    {
      title: "کراپ و تاپ",
      image: crupImg,
      actionLabel: "مشاهده",
      onClick: () => alert("کراپ و تاپ"),
    },
  ];

  return <ProductCategories categories={categories} />;
}
