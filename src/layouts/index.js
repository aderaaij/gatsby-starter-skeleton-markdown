import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import 'normalize.css';
import config from '../../site-config/';
import Head from '../components/Head/Head';

const TemplateWrapper = ({ children }) => (
    <div style={{ padding: 20 }}>
        <Head />
        <h1><Link to="/">{config.meta.siteTitle}</Link></h1>
        <nav>
            <ul>
                <li><Link to="posts">Posts</Link></li>
            </ul>
        </nav>
        {children()}
    </div>
);

export default TemplateWrapper;

TemplateWrapper.propTypes = {
    children: PropTypes.func.isRequired,
};
