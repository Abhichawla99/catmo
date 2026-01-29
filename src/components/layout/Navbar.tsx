import { AnimeNavBar } from '@/components/ui/anime-navbar';
import { Home, Briefcase, FolderOpen, Users, Phone } from 'lucide-react';

const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'Case Studies', url: '/case-studies', icon: FolderOpen },
    { name: 'About', url: '/about', icon: Users },
    { name: 'Book a Meeting', url: 'https://calendar.app.google/QdxMrAa98Eq9Q7aU7', icon: Phone, isButton: true, isExternal: true },
];

export const Navbar = () => {
    return <AnimeNavBar items={navItems} defaultActive="Home" />;
};
