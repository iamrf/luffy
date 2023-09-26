import { useState } from 'react';
import { BsCheckSquare } from 'react-icons/bs';

const monthlyPlans = [
    {
        id:1,
        title: 'پلن برنزی',
        description: 'برای کاربران با مصرف معمولی و به صرفه',
        servers: 'هلند - آلمان',
        type: 'ماهیانه',
        items: [
            '۳۰ گیگابایت',
            '۲ سرور پر سرعت',
            '۴ کاربره',
            'آی پی ثابت ندارد'
        ],
        price: '۱۲۰.۰۰۰',
        image: './images/intro/global.svg'
    },
    {
        id:2,
        title: 'پلن نقره ای',
        description: 'برای کاربران با مصرف معمولی و به صرفه',
        servers: 'هلند - آلمان - فرانسه',
        type: 'ماهیانه',
        items: [
            '۶۰ گیگابایت',
            '۳ سرور پر سرعت',
            '۵ کاربره',
            'آی پی ثابت ندارد'
        ],
        price: '۲۳۵.۰۰۰',
        image: './images/intro/global.svg'
    },
    {
        id:3,
        title: 'پلن طلایی',
        description: 'برای کاربران با مصرف بالا و حرفه ای',
        servers: 'هلند - آلمان - فرانسه - انگلیس',
        type: 'ماهیانه',
        items: [
            '۱۲۰ گیگابایت',
            '۴ سرور پر سرعت',
            'بدون محدودیت کاربر',
            'آی پی ثابت دارد'
        ],
        price: '۳۹۹.۰۰۰',
        image: './images/intro/global.svg'
    },
    {
        id:4,
        title: 'پلن VIP',
        description: 'برای کاربران با مصرف بالا و حرفه ای',
        servers: 'هلند - آلمان - فرانسه - انگلیس - آمریکا',
        type: 'ماهیانه',
        items: [
            '۲۰۰ گیگابایت',
            '۵ سرور پر سرعت',
            'بدون محدودیت کاربر',
            'آی پی ثابت دارد'
        ],
        price: '۴۹۹.۰۰۰',
        image: './images/intro/global.svg'
    },
]

const quarterPlans = [
    {
        id:1,
        title: 'پلن VIP100',
        description: 'برای کاربران با مصرف معمولی و به صرفه',
        servers: 'هلند - آلمان - فرانسه - انگلیس - آمریکا',
        type: '۳ ماهه',
        items: [
            '۱۰۰ گیگابایت',
            '۵ سرور پر سرعت',
            'بدون محدودیت کاربر',
            'آی پی ثابت دارد'
        ],
        price: '۶۵۰.۰۰۰',
        image: './images/intro/global.svg'
    },
    {
        id:2,
        title: 'پلن VIP200',
        description: 'برای کاربران با مصرف معمولی و به صرفه',
        servers: 'هلند - آلمان - فرانسه - انگلیس - آمریکا',
        type: '۳ ماهه',
        items: [
            '۲۰۰ گیگابایت',
            '۵ سرور پر سرعت',
            'بدون محدودیت کاربر',
            'آی پی ثابت دارد'
        ],
        price: '۸۲۰.۰۰۰',
        image: './images/intro/global.svg'
    },
    {
        id:3,
        title: 'پلن VIP500',
        description: 'برای کاربران با مصرف بالا و سوپر حرفه ای',
        servers: 'هلند - آلمان - فرانسه - انگلیس - آمریکا',
        type: '۳ ماهه',
        items: [
            '۵۰۰ گیگابایت',
            '۵ سرور پر سرعت',
            'بدون محدودیت کاربر',
            'آی پی ثابت دارد'
        ],
        price: '۹۹۹.۰۰۰',
        image: './images/intro/global.svg'
    },
    {
        id:4,
        title: 'پلن VIP900',
        description: 'برای کاربران با مصرف بالا و سوپر حرفه ای',
        servers: 'هلند - آلمان - فرانسه - انگلیس - آمریکا',
        type: '۳ ماهه',
        items: [
            '۹۰۰ گیگابایت',
            '۵ سرور پر سرعت',
            'بدون محدودیت کاربر',
            'آی پی ثابت دارد'
        ],
        price: '۱.۵۰۰.۰۰۰',
        image: './images/intro/global.svg'
    },
]

const HomePlansItem = (props) => {
    return (
        <div className={`home_plans_item p-4 md:p-8 flex flex-col items-center rounded-2xl transition-all`}>
            <h4 className="text-center text-xl font-semibold">{props.plan.title}</h4>
            <h6 className="mt-6 text-center text-md font-thin">{props.plan.description}</h6>
            <h6 className="mt-6 text-center text-sm font-thin">{props.plan.servers}</h6>
            {props.plan.items.map(item=>
                <div key={item.id} className="w-full mt-8 flex justify-between items-center text-lg">
                    <span>
                        {item}
                    </span>
                    <span>
                        <BsCheckSquare className='text-xl' />
                    </span>
                </div>
            )}
            <a href="https://luffyvpn.online/" className="w-full mt-8 px-6 py-3 text-center border bg-transparent hover:bg-gradient-to-l hover:from-secondary hover:to-primary border-secondary rounded-lg text-secondary hover:text-white font-regular transition-all duration-300">
                <span className="font-bold ml-2">
                {props.plan.price}
                </span>
                    تومان | {props.planType}
            </a>
        </div>
    )
}


const HomePlans = () => {
    const [activeTab, setActiveTab] = useState(monthlyPlans)

    return ( 
        <section id="plans" className="relative min-h-20 mt-40 font-primary">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <h3 className="font-bold text-2xl">پلن ها</h3>
                    <div className='relative w-full md:w-auto mt-8 md:mt-0 p-2 grid grid-cols-2 gap-4 border-2 border-bgrt rounded-md shadow-2xl shadow-bgrt'>
                            <button onClick={()=>setActiveTab(monthlyPlans)} className={`plansBtn px-8 py-2 ${activeTab===monthlyPlans && "bg-white text-dark"} rounded-md transition-all border-opacity-30`}>۱ ماهه</button>
                            <button onClick={()=>setActiveTab(quarterPlans)} className={`plansBtn px-8 py-2 ${activeTab!==monthlyPlans && "bg-white text-dark"} rounded-md transition-all border-opacity-30`}>۳ ماهه</button>
                    </div>
                </div>
                <div className={`mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>
                    {activeTab.map(plan=>
                        <HomePlansItem key={plan.id} plan={plan} planType={plan.type} />
                    )}
                </div>
            </div>
        </section>
     );
}
 
export default HomePlans;