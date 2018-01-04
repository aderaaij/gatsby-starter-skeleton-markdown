export const defaultPostQuery = graphql`
fragment postQuery on MarkdownRemark {
    html
    timeToRead
    excerpt
    fields {
        slug
    }
    frontmatter {
        title
        published
        date(formatString: "DD MMMM, YYYY")
        category
        tags
        cover {
            id
            childImageSharp {
                sizes(
                    maxWidth: 1200,
                ) {
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                }
            }
        }
    }
}
`;
