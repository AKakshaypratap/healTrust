const Header = () => {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center h-16">
            <div className="flex items-center">
                <img src="/images/Logo.png" 
                     alt="Heal Trust Logo" 
                     className="h-16 w-auto object-contain mr-2" /> 
                <h1 className="text-2xl font-bold text-blue-600">Heal Trust</h1>
            </div>
            <div className="flex items-center">
                <a href="#features" className="mx-4 text-gray-700 hover:text-blue-600 transition duration-300">Features</a>
                <a href="#contact" className="mx-4 text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Start Campaign</button>
            </div>
        </nav>
    );
}

export default Header;
