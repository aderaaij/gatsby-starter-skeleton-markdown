import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link, { navigateTo } from 'gatsby-link';

const PostExcerpt = (props) => {
    // const { postInfo } = props;
    const {
        tags, date, path, title, category, excerpt, published, cover,
    } = props.postInfo;
    return (
        <article style={{ margin: '40px 0' }}>

            {!published &&
            <span>unpublished</span>
            }
            <span>category: <Link to={`/categories/${category}`}>{category}</Link></span>
            <h2>
                <Link to={path}>{title}</Link>
            </h2>
            <p>{excerpt}</p>
            {(tags || date) &&
            <div>
                <div>tags: {tags.map(tag => (
                    <Link to={`/tags/${tag}`}>
                        <span>{tag}</span>
                    </Link>
                ))}
                </div>
                <span>date: {date}</span>
            </div>
            }

        </article>
    );
};


PostExcerpt.propTypes = {
    postInfo: PropTypes.object.isRequired,
};

export default PostExcerpt;
