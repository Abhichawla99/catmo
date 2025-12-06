import { AnimeNavBar } from '@/components/ui/anime-navbar';
import { Home, Briefcase, FolderOpen, Users, Phone } from 'lucide-react';

const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'Work', url: '/work', icon: FolderOpen, matchPaths: ['/game'] },
    { name: 'About', url: '/about', icon: Users },
    { name: 'Book a Call', url: '/contact', icon: Phone, isButton: true },
];

export const Navbar = () => {
    return <AnimeNavBar items={navItems} defaultActive="Home" />;
};
