import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../site-config/';
import Typekit from './Typekit';

const Head = () => (
    <div>
        <Helmet
            title={config.siteDescription}
            htmlAttributes={{ lang: 'EN' }}
        />
        {config.typekitID &&
            <Typekit id={config.typekitID} />
        }
    </div>
);

export default Head;
