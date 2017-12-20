import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import Head from '../components/Head/Head';

const TemplateWrapper = ({ children }) => (
    <div>
        <Head />
        {children()}
    </div>
);

export default TemplateWrapper;

TemplateWrapper.propTypes = {
    children: PropTypes.func.isRequired,
};
