import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import youtube from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";

function Footer() {
    return (
        <section className="bg-gray-700 lg:pt-10 lg:px-40">
            <div className="flex max-lg:gap-y-10 lg:flex-row lg:justify-between max-lg:flex-col max-lg:justify-center max-lg:items-center">
                <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
                    <a href="/"><img src={logo} alt="logo" className="transition duration-75 max-lg:pt-8 hover:opacity-45"/></a>
                    <ul className="flex gap-x-4 lg:py-14 max-lg:justify-center max-lg:pt-8 max-lg:gap-x-4">
                        <li><a href="/facebook"><img src={facebook} alt="facebook" className="transition duration-75 hover:opacity-45"/></a></li>
                        <li><a href="/youtube"><img src={youtube} alt="youtube" className="transition duration-75 hover:opacity-45"/></a></li>
                        <li><a href="/twitter"><img src={twitter} alt="twitter" className="transition duration-75 hover:opacity-45"/></a></li>
                        <li><a href="/pinterest"><img src={pinterest} alt="pinterest" className="transition duration-75 hover:opacity-45"/></a></li>
                        <li><a href="/instagram"><img src={instagram} alt="instagram" className="transition duration-75 hover:opacity-45"/></a></li>
                    </ul>
                </div>
                <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
                    <div className="flex flex-col lg:flex-row lg:gap-x-10">
                        <ul className="flex flex-col gap-y-4 max-lg:items-center max-lg:gap-y-4 max-lg:pb-4">
                            <li><a href="/aboutUs" className="no-underline duration-75 trainsition hover:text-green-700">About Us</a></li>
                            <li><a href="/contact" className="duration-75 trainsition hover:text-green-700">Contact</a></li>
                            <li><a href="blog" className="duration-75 trainsition hover:text-green-700">Blog</a></li>
                        </ul>
                        <ul className="flex flex-col gap-y-4 max-lg:items-center max-lg:gap-y-4">
                            <li><a href="careers" className="duration-75 trainsition hover:text-green-700">Careers</a></li>
                            <li><a href="support" className="duration-75 trainsition hover:text-green-700how">Support</a></li>
                            <li><a href="privacyPolicy" className="duration-75 trainsition hover:text-green-700">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-left max-lg:flex max-lg:justify-center lg:pr-20">
                    <button onClick={() => window.location.href = "/requestInvite"} className="px-6 py-3 transition duration-75 bg-green-700 rounded-full hover:bg-green-800">
                            Request Invite
                    </button>
                    <p className="py-8 text-custom-gray">© Easybank. All Rights Reserved</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;

