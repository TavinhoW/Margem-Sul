const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-6 mt-auto">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex space-x-4 mb-4">
                    <a href="#" aria-label="Tiktok">
                        <img className="w-10 h-10 hover:opacity-75 transition duration-300 ease-in-out" src="public/Tiktok.png" alt="Tiktok" />
                    </a>
                    <a href="#" aria-label="YouTube">
                        <img className="w-11 h-11 hover:opacity-75 transition duration-300 ease-in-out" src="public/Youtube.png" alt="YouTube" />
                    </a>
                </div>
                <p className="text-sm">
                    © 2025 Margem Sul, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
