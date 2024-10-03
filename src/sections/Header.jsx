import clsx from "clsx";
import { useState } from "react";
import logo from "../assets/images/logo.svg";
import open from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full lg:px-40 max-lg:px-10 bg-slate-200">
            <div className="container flex items-center justify-between pt-4 pb-4 max-lg:px-4 max-lg:py-4">
                <a className="cursor-pointer z-2" href="/">
                    <img src={logo} alt="logo" className="transition duration-75 hover:opacity-45"/>
                </a>
                <div className={clsx("max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0", isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none")}>
                    <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
                        <div className="flex items-center justify-between max-lg:relative max-lg:z-2 max-lg:flex-col">
                            <ul className="flex w-full max-lg:block max-lg:px-12">
                                <li className="relative flex items-center max-lg:flex-col max-lg:py-6 max-lg:my-6 max-lg:mx-0.5 lg:space-x-7 max-lg:gap-3 max-lg:bg-white" onClick={handleClose}>
                                    <a href="/home" className="transition duration-75 hover:text-green-700">Home</a>
                                    <a href="/about" className="transition duration-75 hover:text-green-700">About</a>
                                    <a href="/contact" className="transition duration-75 hover:text-green-700">Contact</a>
                                    <a href="/blog" className="transition duration-75 hover:text-green-700">Blog</a>
                                    <a href="/careers" className="transition duration-75 hover:text-green-700">Careers</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button onClick={() => window.location.href = "/requestInvite"} className="right-0 hidden px-8 py-3 transition duration-75 bg-green-500 rounded-full lg:block hover:bg-green-800">
                    Request Invite
                </button>
                <button className="flex items-center justify-center rounded-full lg:hidden z-2 size-10" onClick={() => setIsOpen((prevState) => !prevState)}>
                    <img src={`${isOpen ? close : open}`} alt="menu" className="object-contain border-none size-1/2"/>
                </button>
            </div>
        </header>
    );
}

export default Header;
