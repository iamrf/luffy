const Footer = () => {
    return ( 
        <section className="footer w-full font-primary font-light bg-opacity-100">
            <div className="px-4 md:px-0 py-12 container mx-auto flex flex-col">
                <img className="w-full md:w-40" src="./images/luffy_logo.svg" alt="لوگو" />
                <div className="footer_info mt-8 flex flex-col md:flex-row text-md">
                    <div className="footer_phone flex">
                        <span className="opacity-60"> تلفن : </span>
                        <span dir="ltr" className="mr-2">۰۹۱۳۰۹۰۴۰۸۴</span>
                    </div>
                    <div className="footer_work mt-8 md:mt-0 flex md:mr-8">
                        <span className="opacity-60"> ساعت کاری : </span>
                        <span className="mr-2 flex items-center text-sm">شنبه تا پنج شنبه ساعت 
                            <span className="font-bold mx-1">
                                ۸ صبح
                            </span>
                            تا 
                            <span className="font-bold mx-1">
                                ۸ شب
                            </span>
                        </span>
                    </div>
                    <div className="footer_email mt-8 md:mt-0 flex md:mr-8">
                        <span className="opacity-60"> ایمیل : </span>
                        <span dir="ltr" className="mr-2">info@loffyvpn.tk</span>
                    </div>
                    <div className="footer_social mt-8 md:mt-0 md:mr-auto flex">
                        <span className="opacity-60"> شبکه های اجتماعی : </span>
                        <span dir="ltr" className="mr-2">info@loffyvpn.tk</span>
                    </div>
                    
                </div>
            </div>
        </section>
     );
}
 
export default Footer;