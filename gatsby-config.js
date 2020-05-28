module.exports = {
    siteMetadata: {
        title: `Lou Tigroudja`,
        description: `Portfolio website of Lou Tigroudja, Student Developer`,
        author: `Lou Tigroudja <lou.tigroudja07@gmail.com>`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`,
                head: true,
                anonymize: true,
                respectDNT: true,
                pageTransitionDelay: 0,
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true,
                tailwind: true,
                ignore: [
                    'prismjs/',
                    'templates/blogpost.css',
                    'components/spinner.css',
                ],
                develop: false,
                whitelist: [],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: '~',
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            prompt: {
                                user: 'root',
                                host: 'localhost',
                                global: false,
                            },
                        },
                    },
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'noopener noreferrer',
                        },
                    },
                    {
                        resolve: '@weknow/gatsby-remark-twitter',
                        options: {
                            align: 'center',
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Lou Tigroudja's Portfolio website`,
                short_name: `NS Portfolio`,
                start_url: `/`,
                background_color: `#141420`,
                theme_color: `#141420`,
                display: `standalone`,
                icon: `src/images/ns-icon-2x.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};