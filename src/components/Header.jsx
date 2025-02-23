import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center">
                <img src="/images/Logo.png" alt="Heal Trust Logo" className="h-16 w-auto object-contain mr-2" />
                <h1 className="text-2xl font-bold text-[#3D8D7A]">Heal Trust</h1>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center">
                <a href="#features" className="mx-4 text-gray-700 hover:text-[#3D8D7A] transition duration-300">Features</a>
                <a href="#contact" className="mx-4 text-gray-700 hover:text-[#3D8D7A] transition duration-300">Contact</a>

                {/* Authentication Controls */}
                {isLoading ? (
                    <p className="text-gray-500 mx-4">Loading...</p>
                ) : isAuthenticated ? (
                    // Show User Profile & Logout Button
                    <div className="flex items-center">
                        <img src={user.picture} alt={user.name} className="h-10 w-10 rounded-full border border-gray-300 mr-2" />
                        <span className="text-gray-700 mr-4">{user.name}</span>
                        <button 
                            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} 
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    // Show Login & Register Buttons
                    <button 
                        onClick={() => loginWithRedirect()} 
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Login / Register
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Header;
