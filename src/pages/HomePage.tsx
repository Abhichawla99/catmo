import { Hero } from '../components/sections/Hero';
import { WhyAgents } from '../components/sections/WhyAgents';
import { ROICalculator } from '../components/sections/ROICalculator';
import { Agents } from '../components/sections/Agents';
import { Contact } from '../components/sections/Contact';
import { SEO } from '../components/seo/SEO';

export const HomePage = () => {
    return (
        <>
            <SEO
                title="Custom AI Development & Bespoke Automation Solutions | manuv.co"
                description="Premium bespoke AI solutions and n8n workflow automation for B2B businesses. Custom AI agents, process automation, and intelligent systems built by expert engineers."
                keywords="custom AI development, bespoke AI solutions, n8n automation, AI workflow automation, enterprise AI"
                canonical="https://manuv.co/"
            />
            <Hero />
            <WhyAgents />
            <ROICalculator />
            <Agents />
            <Contact />
        </>
    );
};
