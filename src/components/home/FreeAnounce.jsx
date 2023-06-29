import OnionPattern from "../assets/OnionPattern";

const FreeAnounce = () => {
    return ( 
        <section className="relative mt-40 font-primary">
            {/* <OnionPattern className="absolute left-0 top-0 rotate-180" /> */}
            <div className="container mx-auto">
                <div className="w-full flex flex-col md:flex-row justify-between items-center">
                    <div className="w-full md:w-1/2 flex justify-around">
                        <img className="w-1/2 m-2 md:ml-8 md:mb-16" src="./images/5g.png" alt="5G" />
                        <img className="w-1/2 m-2 md:mr-8 md:mt-16" src="./images/user_laptop1.png" alt="user friendly" />
                    </div>
                    <div className="w-full md:w-1/2 mt-16 md:mt-0 px-4 md:px-16 flex flex-col items-center md:items-start">
                        <h4 className="mb-8 text-2xl font-thin">
                            <span className="font-bold ml-2">
                                ۵ گیگابایت
                            </span>
                            حجم رایگان!
                        </h4>
                        <p className="font-thin leading-10 text-center md:text-right">
                            با ملحق شدن به لوفی علاوه بر خدمات فوق العاده و اینترنت پرسرعت و  باکیفیت و بدون محدودیت 
                            <span className="font-semibold mx-2">
                                ۵ گیگابایت اینترنت رایگان
                            </span>
                             از ما هدیه بگیرید.
                        </p>
                        <button className="mt-8 px-6 py-3 bg-gradient-to-l from-primary to-secondary hover:scale-105 rounded-lg font-thin transition-all">
                            ورود به محیط کاربری
                        </button>
                    </div>

                </div>
            </div>
        </section>
     );
}
 
export default FreeAnounce;