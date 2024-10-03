import api from '../assets/images/icon-api.svg';
import budget from '../assets/images/icon-budgeting.svg';
import onBoard from '../assets/images/icon-onboarding.svg';
import onLine from '../assets/images/icon-online.svg';

function Middle() {
    return (
        <section className="py-8 pointer-events-none max-lg:px-20 bg-slate-300 lg:px-40">
            <div className="pt-6 pb-12 max-lg:align-middle max-lg:justify-center">
                <h1 className='py-4 text-3xl max-lg:text-2xl max-lg:text-center text-custom-dark-blue'>Why choose Easybank?</h1>
                <p className='lg:w-[46%] max-lg:text-center max-lg:justify-center max-lg:align-middle'>
                    We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
                </p>
            </div>
            <div className='lg:pb-12 max-lg:pb-8'>
                <ul className='flex max-lg:flex-col gap-x-6 max-lg:gap-y-8 max-lg:justify-center max-lg:align-middle'>
                    <li className='max-lg:text-center'>
                        <img src={onLine} alt="online" className='lg:w-[20%] max-lg:pb-4 lg:pb-8 max-lg:mx-auto'/>
                        <h1 className='text-2xl lg:pb-6 max-lg:py-4 text-custom-dark-blue'>
                            Online Banking
                        </h1>
                        <p className='lg:w-[86%]'>
                            Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                        </p>
                    </li>
                    <li className='max-lg:text-center'>
                        <img src={budget} alt='budget' className='lg:w-[20%] max-lg:pb-4 lg:pb-8 max-lg:mx-auto'/>
                        <h1 className='text-2xl lg:pb-6 max-lg:py-4 text-custom-dark-blue'>
                            Simple Budgeting
                        </h1>
                        <p className='lg:w-[85%]'>
                            See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.
                        </p>
                    </li>
                    <li className='max-lg:text-center'>
                        <img src={onBoard} alt='onboard' className='lg:w-[20%] max-lg:pb-4 lg:pb-8 max-lg:mx-auto'/>
                        <h1 className='text-2xl lg:pb-6 max-lg:py-4 text-custom-dark-blue'>
                            Fast Onboarding
                        </h1>
                        <p className='lg:w-[85%]'>
                            We don't do branches. Open your account in minutes online and start taking control of your finances right away.
                        </p>
                    </li>
                    <li className='max-lg:text-center'>
                        <img src={api} alt='api' className='lg:w-[20%] max-lg:pb-4 lg:pb-8 max-lg:mx-auto'/>
                        <h1 className='text-2xl lg:pb-6 max-lg:py-4 text-custom-dark-blue'>
                            Open API
                        </h1>
                        <p className='lg:w-[90%]'>
                            Manage your savings, investments pension, and much more from one account. Tracking your money has never been easier.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Middle;

