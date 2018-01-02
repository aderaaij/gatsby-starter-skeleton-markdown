import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import SEO from '../components/SEO/SEO';
import PostsList from '../components/PostsList/PostsList';
import config from '../../site-config';
import '../graphql/archive';

// console.log(archiveQuery);

const BlogList = (props) => {
    const { edges } = props.data.allMarkdownRemark;
    return (
        <div>
            <SEO />
            <Helmet>
                <title>{`Blog | ${config.siteName}`}</title>
                <link rel="canonical" href={`${config.siteUrl}/about/`} />
            </Helmet>
            <PostsList edges={edges} />
        </div>
    );
};

BlogList.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BlogList;

export const query = graphql`
    query PostsArchive {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
            edges {
                node {
                    ...defaultArchiveQuery
                }
            }
        }
    }
`;
