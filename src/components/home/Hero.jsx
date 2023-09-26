const HomeHero = () => {
    return ( 
        <section className="relative min-h-screen w-full flex items-center font-primary select-none">
            <div className="container mx-auto px-4">
                <div className="h-full w-full flex flex-col md:flex-row justify-around md:justify-between items-around md:items-center">
                    <div className="relative w-full pt-28 md:pt-0 md:w-1/2 px-4 md:px-0 font-light leading-loose">
                        <span className="absolute -right-12 -top-12 h-full w-60 bg-secondary rounded-full blur-3xl opacity-5"></span>

                        <h2 className="text-sm md:text-xl opacity-60 text-center md:text-right">
                        امن ترین سرویس تغییر آی پی
                        </h2>
                        <h1 className="mt-4 md:mt-8 mb-4 md:mb-8 font-bold text-xl md:text-2xl text-center md:text-right">
                        سرویس کاهش پینگ لوفی
                        </h1>
                        <div className="flex flex-col items-center md:items-start">
                            <p className="mt-4 opacity-60 leading-10 md:text-xl text-justify">
                                با خرید اشتراک لوفی، میتوانید 
                                    <span className="mx-2 font-bold">
                                        بدون محدودیت کاربر
                                    </span>
                                    از این سرویس استفاده کنید.
                            </p>
                            <p className="mt-4 md:mt-6 opacity-60 leading-10 md:text-xl text-justify">
                                سرویس های ما مناسب تریدرها، گیمر ها، برنامه نویس ها و حتی همه ی کاربران اینترنت می باشد.
                            </p>
                            <div className="w-full mt-8 flex justify-center md:justify-start items-center">
                                <p className="ml-4 opacity-90 leading-10 text-lg font-semibold">
                                    با ۵ گیگابایت حجم
                                </p>
                                <a href="https://luffyvpn.online/" className="px-4 py-2 bg-gradient-to-l from-primary to-secondary hover:scale-105 rounded-lg font-regular text-xl transition-all">
                                    <span className="font-semibold ml-1">
                                    رایگان
                                    </span>
                                     شروع کن !
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full md:w-1/2 font-light leading-loose select-none">
                        <img className="mt-12 md:mt-0 w-full h-auto" src="./images/world.png" alt="hero" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default HomeHero;
