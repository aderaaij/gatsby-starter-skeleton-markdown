import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../site-config/';

const TwitterCard = props => (
    <Helmet>
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={props.siteDescription} />
        <meta name="twitter:title" content={props.siteTitle} />
        <meta name="twitter:site" content={`@${config.contact.twitter}`} />
        <meta name="twitter:image" content={props.siteLogo} />
    </Helmet>
);

export default TwitterCard;
