import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../site-config/';

const TwitterCard = props => (
    <Helmet>
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={props.meta.description} />
        <meta name="twitter:title" content={props.meta.title} />
        <meta name="twitter:site" content={`@${config.contact.twitter}`} />
        <meta name="twitter:image" content={props.meta.image} />
    </Helmet>
);

export default TwitterCard;
