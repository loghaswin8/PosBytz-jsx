import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginCom = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validateForm = () => {
        let formErrors = {};
        let valid = true;

        if (!email) {
            formErrors.email = 'Email is required';
            valid = false;
        }

        if (!password) {
            formErrors.password = 'Password is required';
            valid = false;
        }

        setErrors(formErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted successfully');
        } else {
            console.log('Validation failed', errors);
        }
    };

    return (
        <section className="flex justify-center items-center bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pt-7 ml-[80px]">
                <section className="flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <img
                            src="https://posbytz.s3.ap-south-1.amazonaws.com/partners/1/logo_1630189049088.png"
                            className="w-[200px] h-auto mr-[190px]"
                            alt="Logo"
                        />
                    </div>
                    <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg h-[420px] mb-[60px]">
                        <h2 className="text-2xl font-semibold mb-4">Welcome back!</h2>
                        <p className="text-gray-800 text-center mt-[5px] text-[12px] mr-[15px]" style={{ color: 'grey' }}>
                            Login to your dashboard with your username and password.
                        </p>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md relative top-[25px]"
                                    placeholder="Enter your email"
                                    style={{ border: '1px groove grey' }}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-6 absolute">{errors.email}</p>
                                )}
                            </div>

                            <div className="mb-4 relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md mt-[35px]"
                                    placeholder="Enter your password"
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

                            <p className="text-gray-800 text-center mt-[5px] text-[12px] mr-[235px] relative top-[25px]">Forgot password?</p>
                            <p className="text-gray-800 text-center mt-[5px] text-[12px] mr-[95px] w-[300px] relative top-[40px]" style={{ color: 'black' }}>By clicking Login, I accept the <a href="https://posbytz.com/terms-and-conditions/" target="_blank" className="text-blue-800">Terms &amp; Conditions</a></p>
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-[70px]"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                    <p className='relative bottom-[35px]'>
                        Don't have an account?{' '}
                        <Link to="/Register" className="text-blue-800 cursor-pointer">
                            Register Now!
                        </Link>
                    </p>
                </section>
            </div>
        </section>
    );
};

export default LoginCom;
