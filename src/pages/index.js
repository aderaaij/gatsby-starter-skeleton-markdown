import React from 'react';
import SEO from '../components/SEO/SEO';
import config from '../../site-config/';

const Home = () => (
    <div>
        <SEO />
        <h2>{config.meta.siteName} homepage</h2>
        <p>{config.meta.siteDescription}</p>
    </div>
);

export default Home;
