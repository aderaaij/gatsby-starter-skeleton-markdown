webpackJsonp([0x93712ef0c6fe],{24:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(1),l=n(a),o=r(2),u=n(o),d=r(43),f=n(d),c=r(44),i=n(c),s=function(e){var t=e.postInfo,r=t.tags,n=t.date,a=t.path,o=t.title,u=t.category,d=t.excerpt,c=t.published,s=t.cover;return l.default.createElement("article",{style:{margin:"40px 0",paddingBottom:20,borderBottom:"1px solid #999"}},!c&&l.default.createElement("strong",null,"unpublished"),l.default.createElement("h2",null,l.default.createElement(i.default,{to:a},o)),l.default.createElement("span",null,"date: ",n),l.default.createElement(f.default,{style:{width:250,height:250},resolutions:s.childImageSharp.resolutions}),l.default.createElement("p",null,d),(r||n)&&l.default.createElement("div",null,l.default.createElement("span",null,"category: ",l.default.createElement(i.default,{to:"/categories/"+u},u)),l.default.createElement("div",null,"tags:",l.default.createElement("ul",null,r.map(function(e,t){return l.default.createElement("li",{key:e},l.default.createElement(i.default,{to:"/tags/"+e},l.default.createElement("span",null,e)))})))))};s.propTypes={postInfo:u.default.object.isRequired},t.default=s,e.exports=t.default},25:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=r(1),d=n(u),f=r(2),c=n(f),i=r(24),s=n(i),p=function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.getPostList=function(){var e=[],t=this.props.edges;return t.forEach(function(t){e.push({published:t.node.frontmatter.published,path:t.node.fields.slug,tags:t.node.frontmatter.tags,category:t.node.frontmatter.category,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},t.prototype.renderPostExcerpt=function(){var e=this.getPostList();return e.map(function(e){return!!e.published&&d.default.createElement(s.default,{key:e.title,postInfo:e})})},t.prototype.render=function(){return d.default.createElement("div",null,this.renderPostExcerpt())},t}(d.default.Component);p.propTypes={edges:c.default.array.isRequired},t.default=p,e.exports=t.default},27:function(e,t){"use strict";t.__esModule=!0;t.archiveQuery="** extracted graphql fragment **"},124:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=r(1),l=n(a),o=r(8),u=n(o),d=r(2),f=n(d),c=r(26),i=n(c),s=r(25),p=n(s),m=r(10),h=n(m);r(27);var y=function(e){var t=e.data.allMarkdownRemark.edges,r=e.pathContext.category;return l.default.createElement("div",null,l.default.createElement(i.default,null),l.default.createElement(u.default,null,l.default.createElement("title",null,"Posts in category '"+r+"'  | "+h.default.meta.siteName),l.default.createElement("link",{rel:"canonical",href:h.default.siteUrl+"/about/"})),l.default.createElement(p.default,{edges:t}))};y.propTypes={data:f.default.object.isRequired,pathContext:f.default.object.isRequired},t.default=y;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-category-js-7dc9cceaf99c74f5d93d.js.map