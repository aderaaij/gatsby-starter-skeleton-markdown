import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../site-config/';
import Typekit from './Typekit';
import Favicons from './Favicons';

const Head = () => (
    <div>
        <Helmet
            htmlAttributes={{ lang: 'en' }}
        />
        {config.typekitID &&
            <Typekit id={config.typekitID} />
        }

        {config.faviconDir &&
            <Favicons dir={config.faviconDir} />
        }
    </div>
);

export default Head;
