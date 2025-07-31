import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const linkClasses = "flex flex-col items-center gap-1 relative group"; // برای hover animation

  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-mediume">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>

      <ul className="hidden sm:flex gap-10 fon text-gray-700">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "text-black" : ""}`
          }
        >
          <p>صفحه اصلی</p>
          {/* خط زیر متن */}
          <span className="absolute bottom-[-5px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-2/4"></span>
        </NavLink>

        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? " text-black" : ""}`
          }
        >
          <p>کالکشن</p>
          <span className="absolute bottom-[-5px]  w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-2/4"></span>
        </NavLink>

        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? " text-black" : ""}`
          }
        >
          <p>مقالات</p>
          <span className="absolute bottom-[-5px]  w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-2/4"></span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "text-black" : ""}`
          }
        >
          <p>درباره ما</p>
          <span className="absolute bottom-[-5px] w-0 h-[2px]  bg-black transition-all duration-300 group-hover:w-2/4"></span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "text-black" : ""}`
          }
        >
          <p>ارتباط با ما</p>
          <span className="absolute bottom-[-5px] w-0 h-[2px]  bg-black transition-all duration-300 group-hover:w-2/4"></span>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />

        <div className="group relative">
          <Link to="/login">
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-memu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">پروفایل من</p>
              <p className="cursor-pointer hover:text-black">سفارش های من</p>
              <p className="cursor-pointer hover:text-black">خروج از حساب</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* sidebar menu for small scrn */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>برگشت</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            صفحه اصلی
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            کالکشن
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            درباره ما
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            ارتباط با ما
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
