const Footer = () => {
    return ( 
        <section id="footer" className="footer w-full font-primary font-light bg-opacity-100">
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
                <hr className="my-8 opacity-30"/>
                <div className="footer_copyright w-full flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col md:flex-row md:items-center">
                        <div className="flex items-center ml-8">
                            <span class="material-icons ml-2">
                            dns
                            </span>
                            <span>
                                +۱۵ سرور
                            </span>
                        </div>
                        <div className="flex items-center ml-8 mt-4 md:mt-0">
                            <span class="material-icons ml-2">
                            fmd_good
                            </span>
                            <span>
                                +۱۰ لوکیشن
                            </span>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0">
                            <span class="material-icons ml-2">
                            person_outline
                            </span>
                            <span>
                                +۱۰۰۰ کاربر
                            </span>
                        </div>
                    </div>
                    <p className="text-sm mt-8 md:mt-0">
                    کلیه حقوق مادی و معنوی این سایت محفوظ و هرگونه کپی برداری از آن پیگرد قانونی دارد.
                    </p>
                </div>
            </div>
        </section>
     );
}
 
export default Footer;