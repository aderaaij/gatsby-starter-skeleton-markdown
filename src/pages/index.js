import React from 'react';
import styled, { css } from 'react-emotion';
import SEO from '../components/SEO/SEO';
import config from '../../site-config/';

const Home = () => (
    <div>
        <SEO />
        <h1>{config.meta.siteTitle}</h1>
        <p>{config.meta.siteDescription}</p>
    </div>
);

export default Home;
