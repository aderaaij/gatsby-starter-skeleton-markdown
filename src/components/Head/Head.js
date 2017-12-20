import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'emotion';
import config from '../../../site-config/';
import Piwik from './Piwik';
import Typekit from './Typekit';

const Head = props => (
    <Helmet
        title={config.siteDescription}
        htmlAttributes={{ lang: 'EN' }}
    >
        {/* <Piwik /> */}

        {/* <Typekit id={config.typekitID} /> */}

    </Helmet>
);

export default Head;
