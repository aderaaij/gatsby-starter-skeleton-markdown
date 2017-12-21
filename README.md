# 🗝 Gatsby Starter Skeleton
A starter kit for a fresh [GatsbyJS](https://www.gatsbyjs.org/) based site with a minimum amount of configuration but some opinionated choices. This starter does not (yet) include any datasource nor does it try to make too much assumptions on how your data is structured.

## Features
This starter incudes some default [Gatsby plugins](https://www.gatsbyjs.org/docs/plugins/) and custom components to deliver an SEO friendly [PWA](https://developers.google.com/web/progressive-web-apps/).

Default plugins: 
* gatsby-plugin-manifest
* gatsby-plugin-offline
* gatsby-plugin-react-helmet
* gatsby-plugin-sitemap

Other additions
* Global site-config file
* Normalize.css
* Header Component
* SEO Component
* TypeKit integration (optional)
* Opinionated ESLint configuration

## Getting started

### Install
You can clone this repository to a local folder and run `yarn install` to install all dependencies and `yarn develop` to start developing. It's recommended that you install GatsbyJS globally beforehand. In that case you can also install by using the following command: `gatsby new blog https://github.com/aderaaij/gatsby-starter-skeleton.git`. Now you're set!

### Config
Now you're all set-up you should have a look at the `/site-config/index.js`. This is where you can set up some global values like your sites title, description and all that jazz. This config file is used in all the components in the `components/Head` and `components/SEO` folder. 
