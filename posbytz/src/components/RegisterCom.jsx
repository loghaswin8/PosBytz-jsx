import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const businessTypes = [
    {
        category: 'Restaurant',
        options: ['Restaurant', 'Bar & Restaurant', 'Resto bar & pub', 'Others'],
    },
    {
        category: 'Qsr',
        options: ['Cafe', 'Ice cream parlour', 'Food Truck', 'Juice Shop', 'Pizza shop', 'Chats and Cakes', 'Food court', 'Cafetaria'],
    },
    {
        category: 'Retail',
        options: ['Meat & Fish', 'Rice Traders', 'Supermarket', 'Liquor', 'Fancy store'],
    },
    {
        category: 'Fashion & Lifestyle',
        options: ['Boutique', 'Textile', 'Florist', 'Jewelry', 'Toys'],
    },
];

const RegisterCom = () => {
    const [email, setEmail] = useState('');
    console.log(email);
    const [phone, setPhone] = useState('');
    console.log(phone);
    const [selectedOption, setSelectedOption] = useState('');
    console.log(selectedOption);
    const [countryCodes, setCountryCodes] = useState([]);
    console.log(countryCodes);
    const [selectedCountry, setSelectedCountry] = useState('IN'); // Default country code
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    console.log(password);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        // Fetch country codes from JSON file
        fetch('/data/CountryCodes.json')
            .then((response) => response.json())
            .then((data) => {
                setCountryCodes(data);
            });
    }, []);

    const validateForm = () => {
        let formErrors = {};
        let valid = true;

        if (!email) {
            formErrors.email = 'Email is required';
            valid = false;
        }
        if (!selectedOption) {
            formErrors.option = 'Please select an option.';
            valid = false;
        }
        if (!phone) {
            formErrors.phone = 'Phone no is required.';
            valid = false;
        }

        setErrors(formErrors);
        return valid;
    };

    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (validateForm()) {
            try {
                // Combine lead and user data in one request
                const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users`, {
                    leadData: {
                        email,
                        phone,
                        businessType: selectedOption,
                        countryCode: selectedCountry,
                    },
                    userData: {
                        email,
                        phone,
                        password,
                    },
                });
    
                setSuccessMessage('User and lead registered successfully!');
            } catch (error) {
                setErrorMessage('Error during registration. Please try again.');
                console.error('Error during registration:', error);
            }
        } else {
            setErrorMessage('Validation failed, please check the form.');
        }
    };
    


    return (
        <section className="flex justify-center items-center bg-gray-100">
            <div className="flex flex-col justify-center items-center pt-7">
                <div className="mb-4 mr-10">
                    <img
                        src="https://posbytz.s3.ap-south-1.amazonaws.com/partners/1/logo_1630189049088.png"
                        className="w-[200px] h-auto mr-[145px]"
                        alt="Logo"
                    />
                </div>
                <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg h-[420px] mb-[60px]">
                    <h2 className="text-2xl font-semibold mb-4">Register Account</h2>
                    <p className="text-gray-800 text-center mt-[5px] text-[12px]" style={{ color: 'grey' }}>
                        Free on-boarding support. No credit card required.
                    </p>

                    {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mt-2 relative">
                            <select
                                id="options"
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                style={{ border: '0.3px groove grey' }}
                            >
                                <option value="" disabled>Select Business Type</option>
                                {businessTypes.map((type) => (
                                    <React.Fragment key={type.category}>
                                        <option value="" disabled className='text-[20px]'>
                                            {type.category}
                                        </option>
                                        {type.options.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </select>
                            {errors.option && (
                                <p className="text-red-500 text-sm mt-2 absolute">{errors.option}</p>
                            )}
                        </div>
                        <div className="mb-2 mt-2 relative top-5">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                placeholder="Enter your email"
                                style={{ border: '1px groove grey' }}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-3 absolute">{errors.email}</p>
                            )}
                        </div>
                        <div className="mb-2 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md mt-[35px]"
                                placeholder="Create your password"
                                style={{ border: '1px groove grey' }}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1 absolute">{errors.password}</p>
                            )}
                            <div
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                <span className="bg-orange-500 p-2 rounded text-white absolute mt-[18px] right-0 top-1/2 transform -translate-y-1/2">
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    )}
                                </span>
                            </div>
                        </div>
                        <div className="login-inputs country-mobile flex items-center justify-between mt-2 py-2">
                            <div className="country-input-container relative">
                                <select
                                    id="country-selector"
                                    value={selectedCountry}
                                    onChange={(e) => {
                                        setSelectedCountry(e.target.value);
                                        const selectedOption = countryCodes.find(code => code.code === e.target.value);
                                        if (selectedOption) {
                                            setPhone(`+${selectedOption.dial_code} `); // Set initial phone number with dial code
                                        }
                                    }}
                                    className="country-select w-[55px] bg-white shadow-none w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                >
                                    {countryCodes.map((country) => (
                                        <option key={country.code} value={country.code} data-emoji={country.emoji}>
                                            {country.emoji} {country.name} ({country.dial_code})
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <input
                                type="text"
                                name="phone_number"
                                className="phone-input w-full px-3 py-2 border border-gray-300 rounded-md"
                                placeholder="Your mobile number"
                                required
                                value={phone.replace('+', '')} // Remove + sign for user input
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-2 absolute">{errors.phone}</p>
                            )}
                        </div>

                        <p className="text-gray-800  text-center text-[12px] relative top-1" style={{ color: 'black' }}>
                            By clicking Register, I accept the <a href="https://posbytz.com/terms-and-conditions/" target="_blank" className="text-blue-800">Terms &amp; Conditions</a>
                        </p>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-[20px]"
                        >
                            Register
                        </button>
                    </form>
                </div>
                <p className='relative bottom-[35px] pt-3'>
                    Already have an account?{' '}
                    <Link to="/Login" className="text-blue-800 cursor-pointer">
                        Login
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default RegisterCom;
