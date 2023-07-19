import { FaBeer } from 'react-icons/fa';


const data = [
    {
        id:1,
        title: 'ریجن های مختلف',
        content: 'سرورهای اختصاصی و آی پی ثابت از کشورهای آلمان, هلند, انگلیس, فرانسه، آمریکا و ...',
        icon:'public',
        image: './images/intro/global.svg'
    },
    {
        id:2,
        title: 'پشتیبانی قوی',
        content: '۲۴ ساعته در طول هفته حتی روزهای تعطیل از طریق تیکت و تلگرام        ',
        icon:'support_agent',
        image: './images/intro/message-time.svg'
    },
    {
        id:3,
        title: 'سرعت فوق العاده',
        content: 'بهترین سرعت و پینگ برای وبگردی یوتیوب اینستاگرام و ...        ',
        icon:'network_check',
        image: './images/intro/favorite-chart.svg'
    },
    {
        id:4,
        title: 'امنیت بالا',
        content: 'از جدیدترین متدهای رمزنگاری شده و سرورها استفاده میکنیم        ',
        icon:'gpp_good',
        image: './images/intro/shield-security.svg'
    }
]

const HomeIntroItem = (props) => {
    return (
        <div className="introItem relative mt-4 hover:mt-0 myAnimation1">
            <span className="introItemLamp absolute -top-1 h-4 rounded-md z-0 myAnimation1"></span>
            <div className="relative w-full px-4 py-6 z-10 flex flex-col items-center bg-white rounded-2xl backdrop-blur-2xl bg-opacity-5">
                <span class="material-icons text-2xl myAnimation1">
                    {props.item.icon}
                </span>
                <h4 className="mt-4 mb-4 text-lg myAnimation1">{props.item.title}</h4>
                <p className="font-thin leading-loose opacity-70">{props.item.content}</p>
            </div>
        </div>
    )
}

const HomeIntro = () => {
    return ( 
        <section id="whyluffy" className="mt-16 select-none">
            <div className="container mx-auto font-primary text-center">
                <h3 className="text-center font-regular text-2xl">
                    چرا لوفی را انتخاب کنیم؟
                </h3>
                <div className="mt-16 px-4 md:px-0 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {data.map(item => 
                        <HomeIntroItem key={item.id} item={item} />    
                    )}
                </div>
            </div>
        </section>
     );
}
 
export default HomeIntro;