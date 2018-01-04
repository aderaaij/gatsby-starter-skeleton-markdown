export const archiveQuery = graphql`
    fragment defaultArchiveQuery on MarkdownRemark {
        fields {
            slug
        }
        excerpt
        timeToRead
        frontmatter {
            title
            tags
            category
            published
            date(formatString: "DD MMMM, YYYY")
            cover {
                id
                relativePath
                childImageSharp {
                    resolutions(
                        width: 250, height: 250
                    ) {
                        tracedSVG
                        src
                        srcSet
                    }
                }
            }
        }        
    }
`;
