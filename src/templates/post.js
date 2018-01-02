import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import SEO from '../components/SEO/SEO';
import '../graphql/post';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: false,
        };
    }

    componentDidMount() {
        this.setState({
            fadeIn: true,
        });
    }

    render() {
        const { markdownRemark } = this.props.data;
        const { frontmatter, html } = markdownRemark;
        const { published } = frontmatter;
        return (
            <article>
                <SEO type="post" post={markdownRemark} />
                {!published &&
                <Helmet>
                    <meta name="robots" content="noindex" />
                </Helmet>
                }
                <h1>{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </article>
        );
    }
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BlogPost;

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            ...postQuery
        }
    }
`;
