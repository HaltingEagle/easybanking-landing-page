import confetti from '../assets/images/image-confetti.jpg';
import currency from '../assets/images/image-currency.jpg';
import restaurant from '../assets/images/image-restaurant.jpg';
import plane from '../assets/images/image-plane.jpg'

function Bottom() {
    return (
        <section className="pointer-events-none max-lg:px-20 lg:px-40 bg-slate-200">
            <h1 className='text-3xl text-left pt-9 pb-7 max-lg:text-center'>Latest Articles</h1>
            <div>
                <ul className='flex max-lg:flex-col gap-x-8 max-lg: gap-y-4' >
                    <li className='bg-slate-50 max-lg:inline-block'>
                        <div className='flex justify-center'>
                            <img src={currency} className='pb-8 lg:w-[323px] lg:h-[249px]'/>
                        </div>
                        <div className='px-8'>
                            <p className='pb-4 text-sm text-custom-gray'>By Claire Robinson</p>
                            <h1 className='pb-3 text-2xl text-custom-dark-blue'>
                                Receive money in any currency with no fees
                            </h1>
                            <p className='pb-8'>
                            The world is getting smaller and we&#39;re becoming more mobile. So why should you be forced to only receive money in a single …
                            </p>
                        </div>
                    </li>
                    <li className='bg-slate-50 max-lg:flex-1'>
                        <div className='flex justify-center'>
                            <img src={restaurant} className='pb-8 lg:w-[323px] lg:h-[249px]'/>
                        </div>
                        <div className='px-8'>
                            <p className='pb-4 text-sm text-custom-gray'>By Wilson Hutton</p>
                            <h1 className='pb-3 text-2xl text-custom-dark-blue'>
                                Treat yourself without worrying about money
                            </h1>
                            <p className='pb-8'>
                                Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …
                            </p>
                        </div>
                    </li>
                    <li className='bg-slate-50 max-lg:flex-1'>
                        <div className='flex justify-center'>
                            <img src={plane} className='pb-8 lg:w-[323px] lg:h-[249px]'/>
                        </div>
                        <div className='px-8'>
                            <p className='pb-4 text-sm text-custom-gray'>By Wilson Hutton</p>
                            <h1 className='pb-3 text-2xl text-custom-dark-blue'>
                                Take your Easybank card wherever you go
                            </h1>
                            <p className='pb-8'>
                            We want you to enjoy your travels. This is why we don&#39;t charge any fees on purchases while you&#39;re abroad. We&#39;ll even show you …
                            </p>
                        </div>
                    </li>
                    <li className='bg-slate-50 max-lg:flex-1'>
                        <div className='flex justify-center'>
                            <img src={confetti} className='pb-8 lg:w-[323px] lg:h-[249px]'/>
                        </div>
                        <div className='px-8'>
                            <p className='pb-4 text-sm text-custom-gray'>By Claire Robinson</p>
                            <h1 className='pb-3 text-2xl text-custom-dark-blue'>
                                Our invite-only Beta accounts are now live!
                            </h1>
                            <p className='pb-8'>
                                After a lot of hard work by the whole team, we&#39;re excited to launch our closed beta. It&#39;s easy to request an invite through the site ...
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Bottom
