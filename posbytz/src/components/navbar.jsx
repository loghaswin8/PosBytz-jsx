import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({
    navbarItems = [],
    companyDropdownItems = [],
    exploreDropdownItems = [],
    partnerDropdownItems = [],
    languageDropdownItems = []
}) => {
    const location = useLocation();

    const getInitialStyles = () => {
        if (location.pathname === '/About-us' || location.pathname === '/Support' || location.pathname === '/Contact-us') {
            return {
                bgColor: 'bg-[#694F8E]',
                textColor: 'text-white',
                dropdownTextColor: 'text-black',
                image: "https://posbytz.com/wp-content/uploads/2021/09/logo_light.svg"
            };
        } else if (location.pathname === '/Career') {
            return {
                bgColor: 'bg-[#E1D7C6]',
                textColor: 'text-black',
                dropdownTextColor: 'text-black',
                image: "https://posbytz.com/wp-content/uploads/2021/09/logo_default_2x.svg"
            };
        }
        return {
            bgColor: 'bg-white',
            textColor: 'text-black',
            dropdownTextColor: 'text-black',
            image: "https://posbytz.com/wp-content/uploads/2021/09/logo_default_2x.svg"
        };
    };

    const [bgColor, setBgColor] = useState(getInitialStyles().bgColor);
    const [textColor, setTextColor] = useState(getInitialStyles().textColor);
    const [dropdownTextColor, setDropdownTextColor] = useState(getInitialStyles().dropdownTextColor);
    const [image, setImage] = useState(getInitialStyles().image);

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/About-us' || location.pathname === '/Support' || location.pathname === '/Contact-us') {
                if (window.scrollY > 100) {
                    setBgColor('bg-white');
                    setTextColor('text-black');
                    setDropdownTextColor('text-gray-800');
                    setImage("https://posbytz.com/wp-content/uploads/2021/09/logo_default_2x.svg");
                } else {
                    setBgColor('bg-[#694F8E]');
                    setTextColor('text-white');
                    setDropdownTextColor('text-black');
                    setImage("https://posbytz.com/wp-content/uploads/2021/09/logo_light.svg");
                }
            } else if (location.pathname === '/Career') {
                if (window.scrollY > 50) {
                    setBgColor('bg-white');
                    setTextColor('text-black');
                    setDropdownTextColor('text-gray-800');
                    setImage("https://posbytz.com/wp-content/uploads/2021/09/logo_default_2x.svg");
                } else {
                    setBgColor('bg-[#E1D7C6]');
                    setTextColor('text-black');
                    setDropdownTextColor('text-black');
                    setImage("https://posbytz.com/wp-content/uploads/2021/09/logo_default_2x.svg");
                }
            } else {
                setBgColor('bg-white');
                setTextColor('text-black');
                setDropdownTextColor('text-gray-800');
                setImage("https://posbytz.com/wp-content/uploads/2021/09/logo_default_2x.svg");
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    return (


        <nav className={`fixed top-0 w-full z-50 shadow-lg p-3.5 flex items-center h-[78px] ${bgColor} mt-10`}>
            <div className="bg-[#13112d] p-2 text-left border-b border-gray-300 fixed top-0 left-0 right-0 z-[1001] m-0 box-border">
                <a className="text-white no-underline" href="https://posbytz.com/">
                    Email: <span className="text-[#c3c1ca]">support@posbytz.com</span>
                </a>
            </div>

            <div className="relative flex items-center">
                <Link to="/">
                    <img
                        src={image}
                        alt="Posbytz Logo"
                        className="w-[130px] h-[80px] cursor-pointer"
                    />
                </Link>
            </div>
            <ul className={`flex flex-grow justify-center relative right-8 gap-5 m-0 list-none ${textColor}`}>
                {navbarItems && navbarItems.map((item, index) => (
                    <li key={index} className={`group relative ${item.label === 'Company' ? 'company-item' : ''}`}>
                        <Link
                            to={item.path}
                            className="text-l font-semibold hover:text-orange-600 transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-600 after:transition-all after:duration-300 group-hover:after:w-full"
                        >
                            {item.label}
                        </Link>
                        {/* Dropdowns */}
                        {item.label === 'Company' && (
                            <div className={`absolute left-[-35px] mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${dropdownTextColor}`}>
                                {companyDropdownItems.map((dropdownItem, index) => (
                                    <Link to={dropdownItem.path} key={index}>
                                        <span className="block px-4 py-2 hover:text-orange-600">{dropdownItem.label}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                        {item.label === 'Explore' && (
                            <div className={`absolute left-[-35px] mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${dropdownTextColor}`}>
                                {exploreDropdownItems.map((dropdownItem, index) => (
                                    <Link to={dropdownItem.path} key={index}>
                                        <span className="block px-4 py-2 hover:text-orange-600">{dropdownItem.label}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                        {item.label === 'Partner' && (
                            <div className={`absolute left-[-35px] mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${dropdownTextColor}`}>
                                {partnerDropdownItems.map((dropdownItem, index) => (
                                    <Link to={dropdownItem.path} key={index}>
                                        <span className="block px-4 py-2 hover:text-orange-600">{dropdownItem.label}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                        {item.label === 'Language' && (
                            <div className={`absolute left-[-35px] mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${dropdownTextColor}`}>
                                {languageDropdownItems.map((dropdownItem, index) => (
                                    <Link to={dropdownItem.path} key={index}>
                                        <span className="block px-4 py-2 hover:text-orange-600">{dropdownItem.label}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <button className="bg-orange-500 text-white rounded-full text-l font-semibold w-[140px] h-[50px] flex items-center justify-center cursor-pointer absolute right-4">
                Get Started
            </button>
        </nav>
    );
};

export default Navbar;
