const HomeHero = () => {
    return ( 
        <section className="relative min-h-screen w-full flex items-center font-primary select-none">
            <div className="container mx-auto">
                <div className="h-full w-full flex flex-col md:flex-row justify-around md:justify-between items-around md:items-center">
                    <div className="relative w-full md:w-1/2 px-4 md:px-0 font-light leading-loose">
                        <span className="absolute -right-12 -top-12 h-full w-60 bg-secondary rounded-full blur-3xl opacity-5"></span>

                        <h2 className="text-sm md:text-xl opacity-60 text-center md:text-right">
                        امن ترین سرویس تغییر آی پی
                        </h2>
                        <h1 className="mt-8 mb-8 font-bold text-xl md:text-2xl text-center md:text-right">
                        سرویس کاهش پینگ لوفی
                        </h1>
                        <div className="flex flex-col items-center md:items-start">
                            <p className="opacity-60 leading-10">
                        لوفی تمام تلاشش را میکند تا تریدر ها, برنامه نویسان, طراحان, گیمر ها و ...از سرعت و کیفیت بدون محدودیت های ایجاد شده استفاده کنند.
                            </p>
                            <p className="opacity-60 leading-10">
                        با پیوستن به گروه لوفی محدودیت های اتصال به دنیای آزاد برطرف خواهد شد.
                            </p>
                            <button className="mt-8 px-6 py-3 bg-gradient-to-l from-primary to-secondary hover:scale-105 rounded-lg font-light transition-all">
                                به لوفی ملحق شوید
                            </button>
                        </div>
                    </div>

                    <div className="relative w-full md:w-1/2 font-light leading-loose select-none">
                        <img className="w-auto h-auto" src="./images/hero.png" alt="hero" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default HomeHero;
