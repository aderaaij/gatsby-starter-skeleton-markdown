import React from 'react';
import Helmet from 'react-helmet';

const OGMeta = props => (
    <Helmet>
        {/* opengraph metadata */}
        <meta property="og:locale" content={props.meta.locale} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.meta.title} />
        <meta property="og:description" content={props.meta.description} />
        <meta property="og:url" content={props.meta.url} />
        <meta property="og:site_name" content={props.meta.siteName} />
        <meta property="og:image" content={props.meta.image} />
        <meta property="og:image:secure_url" content={props.meta.image} />
    </Helmet>
);

export default OGMeta;
