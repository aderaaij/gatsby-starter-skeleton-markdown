import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link, { navigateTo } from 'gatsby-link';

const PostExcerpt = (props) => {
    const {
        tags, date, path, title, category, excerpt, published, cover,
    } = props.postInfo;
    return (
        <article style={{ margin: '40px 0', paddingBottom: 20, borderBottom: '1px solid #999' }}>

            {!published &&
            <strong>unpublished</strong>
            }
            <h2>
                <Link to={path}>{title}</Link>
            </h2>
            <span>date: {date}</span>
            <Img style={{ width: 250, height: 250 }} resolutions={cover.childImageSharp.resolutions} />
            <p>{excerpt}</p>
            {(tags || date) &&
            <div>
                <span>category: <Link to={`/categories/${category}`}>{category}</Link></span>
                <div>
                    tags:
                    <ul>{tags.map((tag, i) => (
                        <li key={tag}>
                            <Link to={`/tags/${tag}`}>

                                <span>{tag}</span>
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            }

        </article>
    );
};


PostExcerpt.propTypes = {
    postInfo: PropTypes.object.isRequired,
};

export default PostExcerpt;
