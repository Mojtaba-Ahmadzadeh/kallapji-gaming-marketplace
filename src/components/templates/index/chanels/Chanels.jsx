import React from 'react';

function Chanels() {
    return (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">

            {/* === Telegram Card === */}
            <div className="group rounded-2xl shadow-lg border p-5 flex items-center gap-4 w-full max-w-md transition-shadow duration-300
                bg-white text-gray-800 border-blue-400 hover:shadow-blue-300/20
                dark:bg-[#151B2D] dark:text-white dark:border-[#007ADC] dark:hover:shadow-blue-500/20">

                {/* Telegram Icon */}
                <img
                    src="/images/Telegram_logo.svg"
                    alt="Telegram"
                    className="w-[4rem] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105"
                />

                {/* Content */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-Shabnam-Bold-FD">کانال تلگرام کالاپجی گیم</h2>

                    {/* CTA Button */}
                    <a
                        href="https://t.me/yourchannel"
                        target="_blank"
                        className="group relative inline-flex items-center justify-center gap-x-1 overflow-hidden rounded-full border-2 border-blue-500 px-6 py-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-500 hover:text-white shadow-md hover:shadow-xl"
                    >
                        {/* Gradient background effect */}
                        <span className="absolute inset-0 z-0 transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-3 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-10 rounded-full" />

                        {/* Telegram icon in button */}
                        <img
                            src="/images/Telegram_logo (1).svg"
                            alt="Telegram"
                            className="relative z-10 w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                        />

                        <span className="relative z-10">مشاهده کانال</span>
                    </a>
                </div>
            </div>

            {/* === WhatsApp Card (actually titled as Instagram in your text) === */}
            <div className="group rounded-2xl shadow-lg border p-5 flex items-center gap-4 w-full max-w-md transition-shadow duration-300
                bg-white text-gray-800 border-green-400 hover:shadow-green-300/20
                dark:bg-[#151B2D] dark:text-white dark:border-[#25D366] dark:hover:shadow-green-500/20">

                {/* WhatsApp Icon */}
                <img
                    src="/images/whatsapp--v1.png"
                    alt="WhatsApp"
                    className="w-[5.5rem] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105"
                />

                {/* Content */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-Shabnam-Bold-FD">صفحه واتساپ کالاپجی گیم</h2>

                    {/* CTA Button */}
                    <a
                        href="https://wa.me/yourwhatsapplink"
                        target="_blank"
                        className="group relative inline-flex items-center justify-center gap-x-1 overflow-hidden rounded-full border-2 border-green-500 px-6 py-2 text-sm font-semibold text-green-600 transition-all duration-300 hover:bg-green-500 hover:text-white shadow-md hover:shadow-xl"
                    >
                        {/* Gradient background effect */}
                        <span className="absolute inset-0 z-0 transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-10 rounded-full" />

                        {/* WhatsApp icon in button */}
                        <img
                            src="/images/whatsapp--v1.png"
                            alt="WhatsApp"
                            className="relative z-10 w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                        />

                        <span className="relative z-10">مشاهده صفحه</span>
                    </a>
                </div>
            </div>

            {/* === Instagram Card === */}
            <div className="group rounded-2xl shadow-lg border p-5 flex items-center gap-4 w-full max-w-md transition-shadow duration-300
                bg-white text-gray-800 border-pink-400 hover:shadow-pink-300/20
                dark:bg-[#151B2D] dark:text-white dark:border-[#E1306C] dark:hover:shadow-pink-500/20">

                {/* Instagram Icon */}
                <img
                    src="/images/instagram-new--v1.png"
                    alt="Instagram"
                    className="w-[5.5rem] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105"
                />

                {/* Content */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-Shabnam-Bold-FD">صفحه اینستاگرام کالاپجی گیم</h2>

                    {/* CTA Button */}
                    <a
                        href="https://www.instagram.com/yourpage"
                        target="_blank"
                        className="group relative inline-flex items-center justify-center gap-x-1 overflow-hidden rounded-full border-2 border-pink-500 px-6 py-2 text-sm font-semibold text-pink-600 transition-all duration-300 hover:bg-pink-500 hover:text-white shadow-md hover:shadow-xl"
                    >
                        {/* Gradient background effect */}
                        <span className="absolute inset-0 z-0 transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 opacity-10 rounded-full" />

                        {/* Instagram icon in button */}
                        <img
                            src="/images/instagram-new--v1.png"
                            alt="Instagram"
                            className="relative z-10 w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                        />

                        <span className="relative z-10">مشاهده صفحه</span>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Chanels;
