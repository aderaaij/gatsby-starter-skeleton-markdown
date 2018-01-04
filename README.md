# 🗝📃 Gatsby Starter Skeleton Markdown

A starter kit for a fresh [GatsbyJS](https://www.gatsbyjs.org/) based site with a minimum amount of configuration but some opinionated choices. This starter includes markdown support but does not try and make too much assumptions on how your data is structured.

does not (yet) include any datasource nor does it try to make too much assumptions on how your data is structured.

## 🔥 Features

This starter incudes some default [Gatsby plugins](https://www.gatsbyjs.org/docs/plugins/) and custom components to deliver an SEO friendly [PWA](https://developers.google.com/web/progressive-web-apps/).

* Global site-config file
* Normalize.css
* Header Component
* SEO Component
* TypeKit Component (optional)
* Posts drafts with `robots.txt`

Plugins:

* gatsby-plugin-manifest
* gatsby-plugin-offline
* gatsby-plugin-react-helmet
* gatsby-plugin-sitemap
* gatsby-image
* gatsby-remark-images
* gatsby-transformer-remark
* gatsby-plugin-sharp
* gatsby-transformer-sharp

## 👩‍💻 Install

You can clone this repository to a local folder and run `yarn install` to install all dependencies and `yarn develop` to start developing. It's recommended that you install GatsbyJS globally beforehand. In that case you can also install by using the following command: `gatsby new blog https://github.com/aderaaij/gatsby-starter-skeleton.git`. Now you're set!

### ⚒ Config

Now you're all set-up you should have a look at the `/site-config/index.js`. This is where you can set up some global values like your sites title, description and all that jazz. The config file is used in the following places:

* `components/Head`
* `components/SEO`
* `gatsby-config.js`

### 💆🏽‍♀️ Head

The `Head/Head` component is used in your `layout.js` file as we need it on all pages and doesn't contain any data that needs to be changed based on the current route. By default this Head component only does three things:  

* Sets the `HTML` `lang` attribute (to `en` by default).
* Loads the favicons if `faviconDir` is defined in the `site-config/index.js`
* Loads Typekit if `typekitID` is defined in the `site-config/index.js`

#### ✏️ Typekit

If you fill in a Typekit ID, the Typekit component will be automatically added to the head using the [advanced embed code](https://blog.typekit.com/2015/08/04/new-embed-code-for-asynchronous-font-loading/). This is the least render-blocking way to load your Typekit fonts and will ensure your performance doesn't suffer. The Flash Of Unstyled Text (FOUT) can be solved with CSS. In general the FOUC will only happen once as the font is cached after that. 

* To do: Create a way to choose Typekit embed code. 

#### 🛸 Favicons

Who doesn't like favicons? The Favicon component includes referals to all the Favicons you want / need. You just need to generate them with ['The real favicon generator'](https://realfavicongenerator.net/) and place them in the `static/favicons`
folder. If you don't want any favicons, empty the `faviconDir` value in `site-config/index.js` and you'll be set. 

### 🕵🏽‍♀️ SEO

The SEO component provides all the title and description tags and includes seperate components for Open Graph data and a Twitter Card. This component must be included on _page level_ (see `pages/index.js`) because it should change depending on what the current page is. By default, there are no props defined and we take all our values from `/site-config/indexjs`. 
There's a `meta` object you can redefine if there are props passed down.

Please let me know if this part is not clear. Seeing I don't want to make any assumptions on how your data is structured, I made it as re-configurable as possible. 

#### 👴🏽 OGMeta

The [Open Graph](http://ogp.me/) meta values are included by default. 

#### 🐦 TwitterCard

The TwitterCard component adds [Twitter Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started) metadata to the head. This is only loaded when a Twitter username is filled in at `site-config/index`.
