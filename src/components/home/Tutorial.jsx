const HomeTutorial = () => {
    return ( 
        
        <section id="tutorial" className="mt-20 md:mt-32">
            <div className="px-4 md:px-0 container mx-auto font-primary text-center">
                <div className="w-full flex flex-col justify-center items-center">
                    <h3 className="font-light text-2xl">آموزش اتصال</h3>
                    <p className="mt-8 font-thin">
                    سرویس لوفی در همه دستگاه ها و سیستم عاملها قابل استفاده است . برنامه های متنوعی برای استفاده از سرویس وجود دارد که در برخی مواقع روی سرعت و کیفیت سرویس تاثیر دارد. 
                    </p>
                    <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                        <button className="px-6 py-3 bg-gradient-to-t from-dark to-primary hover:bg-gradient-to-l hover:from-primary hover:to-secondary hover:scale-105 rounded-lg font-normal transition-all">
                        آموزش اتصال در اندروید
                        </button>
                        <button className="px-6 py-3 bg-gradient-to-t from-primary to-secondary hover:bg-gradient-to-l hover:from-primary hover:to-secondary hover:scale-105 rounded-lg font-normal transition-all">
                        آموزش اتصال در آیفون
                        </button><button className="px-6 py-3 bg-gradient-to-t from-primary to-secondary hover:bg-gradient-to-l hover:from-primary hover:to-secondary hover:scale-105 rounded-lg font-normal transition-all">
                        آموزش اتصال در مک
                        </button><button className="px-6 py-3 bg-gradient-to-t from-primary to-secondary hover:bg-gradient-to-l hover:from-primary hover:to-secondary hover:scale-105 rounded-lg font-normal transition-all">
                        آموزش اتصال در ویندوز
                        </button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default HomeTutorial;