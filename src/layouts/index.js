import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'emotion';
import 'normalize.css';
import config from '../../site-config/';
import Head from '../components/Head/Head';
import Typekit from '../components/Head/Typekit';
import Piwik from '../components/Head/Piwik';

injectGlobal`
    * {
        box-sizing: border-box;
    }
`;

const TemplateWrapper = ({ children }) => (
    <div>
        <Head />
        {config.typekitID &&
            <Typekit id={config.typekitID} />
        }
        {children()}
    </div>
);

export default TemplateWrapper;
