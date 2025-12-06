export const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-black">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-gray-400">
                    <div>&copy; manuv.co</div>
                    <div className="text-sm text-gray-500">Built for businesses that move fast.</div>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">Email</a>
                </div>
            </div>
        </footer>
    );
};
