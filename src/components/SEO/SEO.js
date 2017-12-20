import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../site-config/';

const SEO = () => {
    let currentTitle;
    let currentDescription;
    let currentImage;
    let currentUrl;

    if (config) {
        currentDescription = config.siteDescription;
        currentTitle = config.siteTitle;
        currentUrl = config.siteUrl;
        currentImage = config.siteUrl + config.siteLogo;
    }

    return (
        <Helmet>
            <title>{currentTitle}</title>
            {/* standard meta stuff */}
            <meta name="description" content={currentDescription} />
            <meta name="image" content={currentImage} />
            <meta name="mobile-web-app-capable" content="yes" />

            {/* opengraph metadata */}
            <meta property="og:locale" content={config.siteLanguage} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={currentTitle} />
            <meta property="og:description" content={currentDescription} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content={config.siteName} />
            <meta property="og:image" content={currentImage} />
            <meta property="og:image:secure_url" content={currentImage} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:description" content={currentDescription} />
            <meta name="twitter:title" content={currentTitle} />
            {config.contact.twitter &&
            <meta name="twitter:site" content={`@${config.contact.twitter}`} />
            }
            <meta name="twitter:image" content={currentImage} />

            {/* Icon Stuff */}
            <link rel="apple-touch-icon" sizes="180x180" href={`${config.siteUrl}/favicons/apple-touch-icon.png`} />
            <link rel="icon" type="image/png" sizes="32x32" href={`${config.siteUrl}/favicons/favicon-32x32.png`} />
            <link rel="icon" type="image/png" sizes="16x16" href={`${config.siteUrl}/favicons/favicon-16x16.png`} />
            <link rel="mask-icon" href={`${config.siteUrl}/favicons/safari-pinned-tab.svg`} color="#5bbad5" />
            <link rel="shortcut icon" href={`${config.siteUrl}/favicons/favicon.ico`} />
            <meta name="msapplication-config" content={`${config.siteUrl}/favicons/browserconfig.xml`} />

            <meta name="theme-color" content={config.siteColor} />
        </Helmet>
    );
};

export default SEO;
