import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'emotion';
import config from '../../../site-config/';
import Piwik from '../Piwik/Piwik';
import Typekit from '../Typekit/Typekit';

const Head = props => (
    <div>
        <Helmet
            title={config.siteDescription}
            htmlAttributes={{ lang: 'EN' }}
        />
        <Piwik />
        <Typekit />
        {children()}
    </div>
);

export default Head;
