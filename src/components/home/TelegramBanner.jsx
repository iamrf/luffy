const TelegramBanner = () => {
    return ( 
        <section className="banner font-primary my-48 select-none">
            <div className="px-4 md:px-0 container mx-auto">
                <div className="relative w-full h-auto px-8 py-12 bg-white rounded-md">
                    <img className="relative md:absolute -top-2/4 md:top-auto md:-bottom-1/4 md:left-0 auto w-auto md:w-4/12" src="./images/telegram.png" alt="asdasd" />
                    <div>
                        <h4 className="mt-8 md:mt-0 font-light text-lg md:text-2xl text-dark text-center md:text-right">
                            با عضویت در 
                            کانال تلگرام
                            <span className="mx-2 font-semibold">
                            لوفی
                            </span>
                        </h4>
                        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-start items-center mt-8">
                            <p className="text-center md:text-right font-light text-blue">
                            از بروز رسانی سرورها و اخبار فیلترینگ مطلع شوید
                            </p>
                            <a href="/telegram" className="mt-8 md:mt-0 md:mr-8 flex items-center text-white bg-blue py-2 px-8 rounded-md hover:scale-110 myAnimation1">
                                <span class="material-icons">
                                diversity_3
                                </span>
                                <span className="mr-2">
                                عضویت
                                </span> 
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
     );
}
 
export default TelegramBanner;