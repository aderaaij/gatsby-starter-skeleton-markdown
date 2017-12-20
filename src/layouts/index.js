import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'emotion';
import 'normalize.css';
import config from '../../site-config/';
import Piwik from '../components/Piwik/Piwik';
import Typekit from '../components/Typekit/Typekit';

injectGlobal`
    * {
        box-sizing: border-box;
    }
`;

const TemplateWrapper = ({ children }) => (
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

export default TemplateWrapper;
