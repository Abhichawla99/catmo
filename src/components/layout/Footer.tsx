import { Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-black">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-gray-400">
                    <div>&copy; 2026 <span className="text-white font-bold drop-shadow-[0_0_8px_rgba(65,72,255,0.4)]">Catmo Media</span>. All Rights Reserved</div>
                    <div className="text-sm text-gray-500">Amplifying purpose-driven businesses.</div>
                </div>
                <div className="flex gap-6">
                    <a
                        href="https://www.linkedin.com/company/catmomedia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#4148ff] transition-all duration-300 flex items-center gap-2 group"
                    >
                        <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};
