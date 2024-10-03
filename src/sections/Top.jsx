import desktopBg from "../assets/images/bg-intro-desktop.svg";
import phones from "../assets/images/image-mockups.png";

const Top = () => {
    return (
        <section className="relative pb-40 pt-60 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
            <div className="container">
                <div className="absolute lg:right-[calc(50%-1200px)] lg:top-[calc(50%-400px)] w-[1230px] pointer-events-none max-lg:top-[-100px] max-lg:left-0 max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center">
                    <img src={desktopBg} alt="background" className="absolute lg:right-40 max-lg:h-[400px] max-lg:w-full max-lg:top-8 lg:-bottom-82 lg:-top-40"/>
                    <img src={phones} alt="phones" className="absolute lg:top-0 lg:left-0 z-20 lg:w-[59%] max-lg:h-[400px] max-lg:w-auto max-lg:top-5"/>
                </div>
                <div className="relative z-2 lg:max-w-512 max-lg:max-w-388 max-lg:items-center max-lg:justify-center max-lg:flex max-lg:flex-col max-lg:top-40 lg:pl-40">
                    <h1 className="lg:text-5xl max-lg:text-3xl max-lg:text-center max-lg:px-28 lg:w-[30%] text-custom-dark-blue">Next generation digital banking</h1>
                    <p className="pt-8 font-semibold max-lg:px-14 text-wrapper max-lg:text-center lg:w-[35%]">
                        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </p>
                    <div className="flex pt-8 max-lg:justify-center">
                        <button onClick={() => window.location.href = "/requestInvite"} className="px-8 py-2 transition duration-75 bg-green-500 rounded-full max-lg:mb-10 hover:bg-green-800">
                            Request Invite
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Top;

