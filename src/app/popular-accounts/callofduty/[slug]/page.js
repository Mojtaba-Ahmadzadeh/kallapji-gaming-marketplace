"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import CommentsSection from "@/components/modules/commentsSection/CommentsSection";

const mockSelectedAccounts = {
  "vip-880cp-account-880": {
    name: "اکانت لجندری پابجی",
    price: "3,200,000 تومان",
    oldPrice: "3,500,000 تومان",
    description: "اکانتی خاص با اسکین‌های نایاب، سطح بالا و امنیت کامل.",
    images: [
      "/images/Gemini_Generated_Image_hr5zhxhr5zhxhr5z.jpeg",
      "/images/Gemini_Generated_Image_hr5zhxhr5zhxhr5z.jpeg",
      "/images/Gemini_Generated_Image_hr5zhxhr5zhxhr5z.jpeg",
      "/images/Gemini_Generated_Image_hr5zhxhr5zhxhr5z.jpeg",
    ],
    features: {
      adNumber: "205",
      adDate: "1402/04/15",
      accountLevel: "90",
      accountName: "mojtaba",
      UID: "471985198t1t9u1u",
      CP: "20",
      region: "هند",
      multiplayerRank: "پرو",
      battleRoyaleRank: "لجند",
      firstSyncedNetwork: "اکتیویژن",
      secondSyncedNetwork: "سینک نشده",
      mythicSkinsCount: "2",
      mythicGunsCount: "2",
      legendarySkinsCount: "2",
      legendaryGunsCount: "2",
      epicSkinsCount: "2",
      epicGunsCount: "2",
    },
    taxPercent: 9,
    rating: 4.8,
  },
};

function ProductDetails({ params }) {
  const { slug } = params;
  const product = mockSelectedAccounts[slug];

  if (!product) return notFound();

  // متغیرهای کمکی برای محاسبات مالی
  const basePrice = parseInt(product.price.replace(/[^\d]/g, "")); // حذف کاراکتر غیرعددی
  const taxAmount = Math.round((basePrice * product.taxPercent) / 100);
  const totalPrice = basePrice + taxAmount;

  return (
    <main className="container max-w-screen-2xl mt-16 px-4 mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-5 sm:p-6 rounded-3xl border border-gray-200 dark:border-zinc-700 shadow-xl">

          {/* تصویر بزرگ اول */}
          <div className="w-full aspect-video bg-black/10 dark:bg-white/10 rounded-2xl overflow-hidden shadow-sm mb-6">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain transition-all duration-500 hover:scale-105 rounded-2xl"
            />
          </div>

          {/* تصاویر کوچک */}
          <div className="flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-200 dark:scrollbar-track-zinc-700 mb-6">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.name} - تصویر ${i + 1}`}
                className="flex-shrink-0 w-28 h-20 sm:w-32 sm:h-24 object-cover rounded-xl border-2 border-transparent hover:border-yellow-500 transition-all cursor-pointer"
              />
            ))}
          </div>

          {/* ویژگی‌ها */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-800 dark:text-gray-300">
            {Object.entries(product.features).map(([key, value]) => {
              // برای رنگ و استایل خاص برخی ویژگی‌ها:
              let textClass = "text-xl font-bold";
              let colorClass = "";
              if (
                key.includes("mythic") ||
                key.includes("legendary") ||
                key.includes("epic")
              ) {
                if (key.includes("mythic")) colorClass = "text-red-600 font-bold";
                else if (key.includes("legendary")) colorClass = "text-yellow-400 font-bold";
                else if (key.includes("epic")) colorClass = "text-purple-500 font-bold";
                textClass = colorClass;
              }

              // نام قابل نمایش کلیدها به فارسی:
              const labelMap = {
                adNumber: "شماره آگهی",
                adDate: "تاریخ درج آگهی",
                accountLevel: "لول اکانت",
                accountName: "نام اکانت",
                UID: "یو آی دی (UID)",
                CP: "تعداد سی پی (CP)",
                region: "ریجین",
                multiplayerRank: "رنگ مولتی پلیر",
                battleRoyaleRank: "رنگ بتل رویال",
                firstSyncedNetwork: "اولین شبکه سینک شده",
                secondSyncedNetwork: "دومین شبکه سینک شده",
                mythicSkinsCount: "تعداد اسکین های متیک (mythic)",
                mythicGunsCount: "تعداد تفنگ (gun) های متیک (mythic)",
                legendarySkinsCount: "تعداد اسکین های لجندری (Legendary)",
                legendaryGunsCount: "تعداد تفنگ (gun) های لجندری (Legendary)",
                epicSkinsCount: "تعداد اسکین های اپیک (epic)",
                epicGunsCount: "تعداد تفنگ (gun) های اپیک (epic)",
              };

              return (
                <div
                  key={key}
                  className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl text-center shadow"
                >
                  <p className="text-gray-500 text-xs">{labelMap[key] || key}</p>
                  <p className={textClass}>{value}</p>
                </div>
              );
            })}
          </div>

          {/* توضیحات */}
          <div className="mt-10">
            <h2 className="text-lg font-extrabold text-gray-900 dark:text-white mb-4">توضیحات</h2>
            <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
              {product.description}
            </p>
          </div>
        </div>

        {/* بخش سمت راست قیمت */}
        <div className="space-y-6 mt-10 lg:mt-0">
          <div className="bg-white dark:bg-zinc-900 border border-yellow-500 p-6 sm:p-7 rounded-3xl shadow-lg space-y-6 transition-all duration-300 hover:shadow-yellow-300/40 dark:hover:shadow-yellow-900/40">

            {/* قیمت */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-lg font-bold text-gray-800 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 17a1 1 0 01-2 0v-1H7a1 1 0 010-2h2v-2H7a1 1 0 010-2h2V8H7a1 1 0 010-2h2V5a1 1 0 012 0v1h2a1 1 0 010 2h-2v2h2a1 1 0 010 2h-2v2h2a1 1 0 010 2h-2v1z"></path>
                  </svg>
                  قیمت پایه
                </div>
                <span className="text-lg font-bold text-gray-700 dark:text-gray-200">
                  ۷۹۰,۰۰۰ تومان
                </span>
              </div>

              {/* مالیات */}
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>۹٪ مالیات بر ارزش افزوده</span>
                <span>۷۱,۱۰۰ تومان</span>
              </div>

              <hr className="border-gray-300 dark:border-gray-700" />

              {/* مجموع */}
              <div className="flex items-center justify-between">
                <span className="text-base font-extrabold text-gray-800 dark:text-gray-100">
                  مبلغ قابل پرداخت
                </span>
                <span className="text-2xl font-extrabold text-yellow-600 dark:text-yellow-400">
                  ۸۶۱,۱۰۰ تومان
                </span>
              </div>
            </div>

            {/* دکمه افزودن به سبد خرید */}
            <div className="flex flex-col gap-3">
              <button
                className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-yellow-400/50"
                onClick={() => alert("به سبد خرید اضافه شد")}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5H19M7 13l1 5h9m-4 4a1 1 0 100-2 1 1 0 000 2zm-6 0a1 1 0 100-2 1 1 0 000 2z"
                  ></path>
                </svg>
                افزودن به سبد خرید
              </button>
            </div>

            {/* ویژگی‌های محصول */}
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>✅ تضمین اصالت و صحت اطلاعات</li>
              <li>🚀 ارسال فوری پس از خرید</li>
              <li>
                ⭐ امتیاز کاربران: <span className="text-yellow-500 font-bold">۴.۸ / ۵</span>
              </li>
            </ul>

            {/* هشدار امنیتی */}
            <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-xs font-medium p-3 rounded-xl flex items-start gap-2">
              <svg
                className="w-5 h-5 mt-0.5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8.257 3.099c.763-1.36 2.723-1.36 3.486 0l6.518 11.637c.75 1.339-.213 3.01-1.743 3.01H3.482c-1.53 0-2.493-1.67-1.743-3.01L8.257 3.1zM11 14a1 1 0 10-2 0 1 1 0 002 0zm-1-2a.75.75 0 01-.75-.75v-3.5a.75.75 0 011.5 0v3.5A.75.75 0 0110 12z"></path>
              </svg>
              <span>
                <strong>هشدار:</strong> لطفاً بدون هماهنگی با پشتیبانی کالاپجی گیم اقدام به پرداخت نکنید.
                سایت هیچ‌گونه مسئولیتی در قبال خرید مستقیم از فروشنده ندارد.
              </span>
            </div>

          </div>

        </div>
      </div>
      <CommentsSection />
    </main>
  );
}

export default ProductDetails;
