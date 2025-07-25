import React from 'react'

function Login() {
    return (
        <div className='font-sans bg-gradient-to-br from-white via-[#f7e9d0] to-[#fff8e1] dark:bg-gradient-to-br dark:from-[#1a202c] dark:via-[#2d3748] dark:to-[#1a202c] transition-all flex items-center justify-center min-h-screen px-4 text-gray-200'>
            <div className="wow animate__ animate__fadeInUpSmall bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md 
         border border-gray-300 dark:border-gray-700 
         space-y-6 text-gray-900 dark:text-gray-200 animated" style={{ visibility: 'visible', animationName: 'fadeInUpSmall' }}>

                <div className="text-center space-y-1">
                    <h1 className="text-2xl sm:text-3xl font-bold">ورود به حساب کاربری</h1>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                        خوش آمدید! لطفاً اطلاعات خود را وارد کنید.
                    </p>
                </div>

                <form className="space-y-6" id="loginForm" autoComplete="off">

                    <div>
                        <label htmlFor="email" className="text-sm mb-1 block">ایمیل</label>
                        <div className="flex items-center bg-gray-100 dark:bg-gray-700 
               rounded-xl px-4 py-3 
               focus-within:ring-2 focus-within:ring-blue-500 transition">
                            <i data-lucide="mail" className="w-5 h-5 text-gray-500 dark:text-gray-400 ml-3"></i>
                            <input type="email" id="email" name="email" className="w-full bg-transparent text-gray-900 dark:text-white outline-none 
                 text-sm sm:text-base placeholder-gray-400 dark:placeholder-gray-500" placeholder="you@example.com" required="" />
                        </div>
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="text-sm mb-1 block">رمز عبور</label>
                        <div className="flex items-center bg-gray-100 dark:bg-gray-700 
               rounded-xl px-4 py-3 focus-within:ring-2 
               focus-within:ring-blue-600 relative transition shadow-lg">
                            <i data-lucide="lock" className="w-5 h-5 text-gray-500 dark:text-gray-400 ml-3"></i>
                            <input type="password" id="password" name="password" className="w-full bg-transparent text-gray-900 dark:text-white outline-none pr-12  
                 text-sm sm:text-base placeholder-gray-400 dark:placeholder-gray-500" placeholder="••••••••" required="" />
                            <button type="button" id="togglePassword" className="absolute left-4 top-1/2 -translate-y-1/2 
                 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 z-10">
                                <i data-lucide="eye-off" className="w-5 h-5" id="eyeIcon"></i>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-xs sm:text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="form-checkbox accent-yellow-600" />
                            <span>مرا به خاطر بسپار</span>
                        </label>
                        <a href="/pages/forgot-password.html" className="text-yellow-600 hover:underline">فراموشی رمز؟</a>
                    </div>

                    <button type="submit" className="w-full py-3 rounded-xl transition duration-300 font-semibold text-sm sm:text-base shadow-lg
         bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300
         text-yellow-800">
                        ورود
                    </button>


                    <a href="/pages/sms.html" className="flex justify-center items-center w-full py-3 
                     bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300
         text-yellow-800 rounded-xl 
             transition duration-300 font-semibold 
             text-sm sm:text-base">
                        ورود با کد یک بار مصرف
                    </a>
                </form>


                <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    حساب ندارید؟
                    <a href="/pages/register.html" className="text-yellow-600 hover:underline">ثبت‌نام</a>
                </p>
            </div>
        </div>
    )
}

export default Login