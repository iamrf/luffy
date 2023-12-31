const Navbar = () => {
    return ( <div className="z-30 absolute top-0 right-0 left-0 font-primary">
        <div className="container mx-auto py-8 md:py-12">
            <div className="w-full px-4 md:px-0 flex items-center">
                <img className="w-36 md:w-40" src="./images/luffy_logo.svg" alt="لوگو" />
                <ul className="hidden md:flex font-light">
                    <a href="#whyluffy" className="pr-12 pl-4 opacity-60 hover:opacity-100 transition-all">
                        <span className="navlink py-4">
                            مزایای لوفی
                        </span>
                    </a>
                    <a href="#plans" className="px-4 opacity-60 hover:opacity-100 transition-all">
                        <span className="navlink py-4">
                            پلن ها
                        </span>
                    </a>
                    {/* <a href="#tutorial" className="px-4 opacity-60 hover:opacity-100 transition-all">
                        <span className="navlink py-4">
                            آموزش
                        </span>
                    </a> */}
                    <a href="#footer" className="px-4 opacity-60 hover:opacity-100 transition-all">
                        <span className="navlink py-4">
                            تماس با ما
                        </span>
                    </a>
                </ul>
                <a href="https://luffyvpn.online" className="mr-auto flex items-center font-thin text-md md:text-lg md:opacity-50 hover:opacity-100 transition-all">
                    <span class="material-icons text-md md:text-2xl">
                    person_outline
                    </span>
                    <span className="mx-2">
                        ورود / ثبت نام
                    </span>
                    <span class="material-icons text-md md:text-2xl">
                    chevron_left
                    </span>
                </a>
            </div>
        </div>
    </div> );
}
 
export default Navbar;