import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Favicons = props => (
    <Helmet>
        {/* Favicons Stuff */}
        {console.log(props)}
        <link rel="apple-touch-icon" sizes="180x180" href={`${props.dir}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${props.dir}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${props.dir}/favicon-16x16.png`} />
        <link rel="mask-icon" href={`${props.dir}/safari-pinned-tab.svg`} color="#5bbad5" />
        <link rel="shortcut icon" href={`${props.dir}/favicon.ico`} />
        <meta name="msapplication-config" content={`${props.dir}/browserconfig.xml`} />
    </Helmet>
);

export default Favicons;

Favicons.propTypes = {
    dir: PropTypes.string.isRequired,
};
