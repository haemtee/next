_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var o=n("nKUr"),c=n("YFqc"),i=n.n(c),a=function(){return Object(o.jsxs)("nav",{children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("img",{src:"/logo.png",width:128,loading:"lazy",height:76})}),Object(o.jsx)(i.a,{href:"/",children:Object(o.jsx)("a",{children:"Home"})}),Object(o.jsx)(i.a,{href:"/about",children:Object(o.jsx)("a",{children:"About"})}),Object(o.jsx)(i.a,{href:"/ninjas",children:Object(o.jsx)("a",{children:"Ninja Listing"})})]})},u=function(){return Object(o.jsx)("footer",{children:"Copyright 2021 Net Ninja"})},s=function(e){var t=e.children;return Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)(a,{}),t,Object(o.jsx)(u,{})]})};n("zPlV");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(o.jsx)(s,{children:Object(o.jsx)(t,f({},n))})}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c=o(n("q1tI")),i=n("elyg"),a=n("nOHt"),u=n("vNVm"),s={};function l(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),o=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],a=n[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),p=f.href,d=f.as,b=e.children,v=e.replace,h=e.shallow,j=e.scroll,O=e.locale;"string"===typeof b&&(b=c.default.createElement("a",null,b));var g=c.Children.only(b),y=g&&"object"===typeof g&&g.ref,w=(0,u.useIntersection)({rootMargin:"200px"}),m=r(w,2),x=m[0],_=m[1],E=c.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);(0,c.useEffect)((function(){var e=_&&t&&(0,i.isLocalURL)(p),r="undefined"!==typeof O?O:n&&n.locale,o=s[p+"%"+d+(r?"%"+r:"")];e&&!o&&l(n,p,d,{locale:r})}),[d,p,_,O,t,n]);var P={ref:E,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,a,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:u,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,n,p,d,v,h,j,O)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(n,p,d,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var N="undefined"!==typeof O?O:n&&n.locale,L=(0,i.getDomainLocale)(d,N,n&&n.locales,n&&n.domainLocales);P.href=L||(0,i.addBasePath)((0,i.addLocale)(d,N,n&&n.defaultLocale))}return c.default.cloneElement(g,P)};t.default=f},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,o=(0,c.useRef)(),s=(0,c.useState)(!1),l=r(s,2),f=l[0],p=l[1],d=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,i=r.elements;return i.set(e,t),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){a||f||(0,i.default)((function(){return p(!0)}))}),[f]),[d,f]};var c=n("q1tI"),i=o(n("0G5g")),a="undefined"!==typeof IntersectionObserver;var u=new Map},zPlV:function(e,t,n){}},[[0,0,1,2]]]);