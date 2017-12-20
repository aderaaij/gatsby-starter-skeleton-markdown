import React from 'react';
import styled, { css } from 'react-emotion';
import SEO from '../components/SEO/SEO';
import config from '../../site-config/';

const Home = () => (
    <div>
        <SEO />
        <h1>{config.siteTitle}</h1>
        <p>{config.siteDescription}</p>
    </div>
);

export default Home;
