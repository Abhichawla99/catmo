import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    canonical?: string;
    ogUrl?: string;
}

export const SEO = ({ title, description, keywords, ogImage, canonical, ogUrl }: SEOProps) => {
    useEffect(() => {
        // Set favicon for all pages
        const setFavicon = () => {
            let faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
            if (!faviconLink) {
                faviconLink = document.createElement('link');
                faviconLink.rel = 'icon';
                document.head.appendChild(faviconLink);
            }
            faviconLink.type = 'image/svg+xml';
            faviconLink.href = '/favicon.svg';

            // Also set apple-touch-icon
            let appleIconLink = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
            if (!appleIconLink) {
                appleIconLink = document.createElement('link');
                appleIconLink.rel = 'apple-touch-icon';
                document.head.appendChild(appleIconLink);
            }
            appleIconLink.href = '/favicon.svg';
        };

        setFavicon();

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

        // Set OG URL
        const ogUrlMeta = document.querySelector('meta[property="og:url"]');
        const urlToSet = ogUrl || canonical || window.location.href;
        if (ogUrlMeta) {
            ogUrlMeta.setAttribute('content', urlToSet);
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:url');
            meta.content = urlToSet;
            document.head.appendChild(meta);
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
    }, [title, description, keywords, ogImage, canonical, ogUrl]);

    return null;
};
