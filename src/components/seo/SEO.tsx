import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    canonical?: string;
}

export const SEO = ({ title, description, keywords, ogImage, canonical }: SEOProps) => {
    useEffect(() => {
        // Set title
        document.title = title;

        // Set meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description;
            document.head.appendChild(meta);
        }

        // Set keywords if provided
        if (keywords) {
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute('content', keywords);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'keywords';
                meta.content = keywords;
                document.head.appendChild(meta);
            }
        }

        // Set OG tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', title);
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:title');
            meta.content = title;
            document.head.appendChild(meta);
        }

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.setAttribute('content', description);
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:description');
            meta.content = description;
            document.head.appendChild(meta);
        }

        if (ogImage) {
            const ogImg = document.querySelector('meta[property="og:image"]');
            if (ogImg) {
                ogImg.setAttribute('content', ogImage);
            } else {
                const meta = document.createElement('meta');
                meta.setAttribute('property', 'og:image');
                meta.content = ogImage;
                document.head.appendChild(meta);
            }
        }

        // Set canonical URL
        if (canonical) {
            let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
            if (link) {
                link.href = canonical;
            } else {
                link = document.createElement('link');
                link.rel = 'canonical';
                link.href = canonical;
                document.head.appendChild(link);
            }
        }
    }, [title, description, keywords, ogImage, canonical]);

    return null;
};
