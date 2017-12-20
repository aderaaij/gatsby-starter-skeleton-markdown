const config = require('./site-config/');

module.exports = {
    siteMetadata: {
        title: 'Gatsby ',
        siteUrl: config.siteUrl,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-emotion',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: config.siteName,
                short_name: config.siteName,
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#ffffff',
                display: 'minimal-ui',
                icons: [
                    {
                        src: '/favicons/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/favicons/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-sitemap',
    ],
};
