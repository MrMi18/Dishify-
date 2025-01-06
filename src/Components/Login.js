<circle cx="9.5" cy="18.5" r="1.5"/>
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Shimmer from "./Shimmer";
import Test from "./Test";

const Login = () => {
    const loginRequestHandler = () =>{
        toast.warning("Invalid request login or signup is currently not available ");
    }
    
    return (
        
        <div className="flex justify-center items-center h-screen bg-gray-100 mt-20">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                {/* Login/Register Toggle */}
                <div className="flex justify-between mb-6">
                    <button className="w-1/2 py-2 text-center text-white bg-blue-500 rounded-l-lg hover:bg-blue-600 focus:outline-none">
                        Login
                    </button>
                    <button  onClick={loginRequestHandler}
                    className="w-1/2 py-2 text-center bg-gray-200 rounded-r-lg hover:bg-gray-300 focus:outline-none">
                        Register
                    </button>
                </div>

                {/* Input Fields */}
                <form className="space-y-4" onSubmit={loginRequestHandler}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                     
                        
                        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Sign In
                    </button>
                </form>

                {/* Social Media Sign-In */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">Or sign in with</p>
                    <div className="flex justify-center mt-4 space-x-4">
                        {/* Facebook */}
                        <button  onClick={loginRequestHandler}
                         className="p-2 rounded-full text-white">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
                                <path
                                    fill="#fff"
                                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.717-0.095,2.572-0.29"
                                />
                            </svg>
                        </button>

                        {/* Google */}
                        <button  onClick={loginRequestHandler}
                        className="p-2 rounded-full text-white">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                <path
                                    fill="#EA4335"
                                    d="M24 9.5c-3.14 0-5.98 1.17-8.14 3.1l-6.6-6.6C13.83 2.5 18.61 0 24 0c8.99 0 16.49 5.19 20.3 12.84l-7.6 6.12C34.37 14.07 29.45 9.5 24 9.5z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
           
        </div>
        
        
    );
};

export default Login;
