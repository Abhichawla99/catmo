import { Hero } from '../components/sections/Hero';
import { WhyAgents } from '../components/sections/WhyAgents';
import { Contact } from '../components/sections/Contact';
import { SEO } from '../components/seo/SEO';

export const HomePage = () => {
    return (
        <>
            <SEO
                title="Catmo Media - Digital Advertising | Marketing Strategy and Digital Advertising"
                description="Amplifying purpose-driven businesses. We turn digital marketing into measurable growth through data-driven campaigns for regulated industries."
                keywords="digital advertising, marketing strategy, regulated industries, compliance marketing, data-driven campaigns"
                canonical="https://www.catmomedia.ca/"
                ogUrl="https://www.catmomedia.ca/"
            />
            <Hero />
            <WhyAgents />
            <Contact />
        </>
    );
};
