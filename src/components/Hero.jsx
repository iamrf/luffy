import OnionPattern from "./OnionPattern";

const HomeHero = () => {
    return ( 
        <section className="relative h-screen w-full flex items-center select-none">
            <OnionPattern className="absolute right-0 top-0" />
            <div className="container mx-auto">
                <div className="h-full w-full flex flex-col md:flex-row justify-around md:justify-between items-around md:items-center">
                    <div className="relative w-full md:w-1/2 px-4 md:px-0 font-thin leading-loose">
                        <span className="absolute -right-12 -top-12 h-full w-60 bg-secondary rounded-full blur-3xl opacity-5"></span>

                        <h2 className="text-xl opacity-60">
                        امن ترین سرویس تغییر آی پی
                        </h2>
                        <h1 className="mt-8 mb-16 font-bold text-3xl">
                        سرویس کاهش پینگ لوفی
                        </h1>
                        <div>
                            <p className="opacity-60">
                        لوفی تمام تلاشش را میکند تا تریدر ها, برنامه نویسان, طراحان, گیمر ها و ...از سرعت و کیفیت بدون محدودیت های ایجاد شده استفاده کنند.
                            </p>
                            <p className="opacity-60">
                        با پیوستن به گروه لوفی محدودیت های اتصال به دنیای آزاد برطرف خواهد شد
                            </p>
                            <button className="mt-8 px-6 py-3 bg-gradient-to-l from-primary to-secondary rounded-lg">
                                به لوفی ملحق شوید
                            </button>
                        </div>
                    </div>

                    <div className="relative w-full md:w-1/2 font-thin leading-loose select-none">
                        <img src="./images/hero.png" alt="hero" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default HomeHero;
