import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../site-config/';
import TwitterCard from './TwitterCard';
import OGMeta from './OGMeta';

const SEO = () => {
    const meta = {
        locale: config.meta.siteLanguage,
        siteName: config.meta.siteName,
    };

    if (config) {
        meta.description = config.meta.siteDescription;
        meta.title = config.meta.siteTitle;
        meta.image = config.meta.siteUrl + config.meta.siteLogo;
        meta.url = config.meta.siteUrl;
        meta.siteColor = config.meta.siteColor;
    }

    return (
        <div>
            <Helmet>
                <title>{meta.title}</title>
                {/* standard meta stuff */}
                <meta name="description" content={meta.description} />
                <meta name="image" content={meta.image} />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content={meta.siteColor} />
            </Helmet>
            <OGMeta meta={meta} />
            {config.contact.twitter &&
            <TwitterCard meta={meta} />
            }
        </div>
    );
};

export default SEO;
