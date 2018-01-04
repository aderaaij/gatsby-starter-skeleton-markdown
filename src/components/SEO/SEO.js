import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../../../site-config/';
import TwitterCard from './TwitterCard';
import OGMeta from './OGMeta';

const SEO = (props) => {
    const { post } = props;
    const meta = {
        locale: config.meta.siteLanguage,
        siteName: config.meta.siteName,
    };

    if (post) {
        const { frontmatter } = post;
        meta.description = props.post.excerpt;
        meta.title = `${frontmatter.title} | ${config.meta.siteTitle}`;
        if (frontmatter.cover) {
            meta.image = frontmatter.cover.childImageSharp.sizes.src;
        } else {
            meta.image = config.meta.siteUrl + config.meta.siteLogo;
        }
        meta.url = config.meta.siteUrl + props.post.fields.slug;
    } else if (config) {
        meta.description = config.meta.siteDescription;
        meta.title = config.meta.siteTitle;
        meta.image = config.meta.siteUrl + config.meta.siteLogo;
        meta.url = config.meta.siteUrl;
        meta.siteColor = config.meta.siteColor;
    }

    return (
        <div>
            <Helmet>
                <title>{meta.title}</title>
                {/* standard meta stuff */}
                <meta name="description" content={meta.description} />
                <meta name="image" content={meta.image} />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content={meta.siteColor} />
            </Helmet>
            <OGMeta meta={meta} />
            {config.contact.twitter &&
            <TwitterCard meta={meta} />
            }
        </div>
    );
};

SEO.propTypes = {
    post: PropTypes.object,
};

export default SEO;
