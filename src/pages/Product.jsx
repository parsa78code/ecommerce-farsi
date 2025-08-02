import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-20 transition-opacity ease-in duration-500 opacity-100">
      {/* -------product data------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ----prudact image ------*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scrollc justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* -----product info------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col- gap-4 my-8">
            <p>انتخاب سایز</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "not-only:border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white cursor-pointer px-8 py-3 text-sm active:bg-gray-700"
          >
            اضافه به سبد خرید
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>۱۰۰٪ محصول اورجینال.</p>
            <p>امکان پرداخت در محل برای این محصول وجود دارد.</p>
            <p>سیاست بازگشت و تعویض آسان تا ۷ روز.</p>
          </div>
        </div>
      </div>

      {/* --------description & rewiw section----------- */}
      <div className="mt-20" dir="rtl">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">توضیحات</b>
          <p className="border px-5 py-3 text-sm">نظرات (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 leading-7">
          <p>
            یک وب‌سایت فروشگاهی بستری آنلاین است که فرآیند خرید و فروش محصولات
            یا خدمات را از طریق اینترنت تسهیل می‌کند. این وب‌سایت به‌عنوان یک
            بازارچه مجازی عمل می‌کند که کسب‌وکارها و افراد می‌توانند محصولات خود
            را به نمایش بگذارند، با مشتریان تعامل داشته باشند و تراکنش‌ها را
            بدون نیاز به حضور فیزیکی انجام دهند. وب‌سایت‌های فروشگاهی به دلیل
            راحتی، دسترسی آسان و گستره جهانی که ارائه می‌دهند، بسیار محبوب
            شده‌اند.
          </p>
          <p>
            وب‌سایت‌های فروشگاهی معمولاً محصولات یا خدمات را همراه با توضیحات
            دقیق، تصاویر، قیمت‌ها و هرگونه تنوع موجود (مانند سایز یا رنگ) نمایش
            می‌دهند. هر محصول معمولاً صفحه اختصاصی خود را با اطلاعات مرتبط دارد
            تا مشتری بتواند تصمیم آگاهانه‌ای بگیرد.
          </p>
        </div>
      </div>

      {/* ------disply related products------ */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
