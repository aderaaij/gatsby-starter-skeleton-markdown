import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../site-config/';

const Favicons = () => (
    <Helmet>
        {/* Favicons Stuff */}
        <link rel="apple-touch-icon" sizes="180x180" href={`/${config.faviconDir}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`/${config.faviconDir}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`/${config.faviconDir}/favicon-16x16.png`} />
        <link rel="mask-icon" href={`/${config.faviconDir}/safari-pinned-tab.svg`} color="#5bbad5" />
        <link rel="shortcut icon" href={`/${config.faviconDir}/favicon.ico`} />
        <meta name="msapplication-config" content={`/${config.faviconDir}/browserconfig.xml`} />
    </Helmet>
);

export default Favicons;
