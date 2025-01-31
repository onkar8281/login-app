import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add backend API call logic
        console.log("Form submitted with:", formData);
        // After successful login, navigate to the home page
        navigate("/home");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    {/* Username Input */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Password Input */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Login
                    </button>
                </form>
                {/* Link to register page */}
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:text-blue-600">
                        Create Account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;