module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"undefined","head":true,"anonymize":true,"respectDNT":true,"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/@weknow/gatsby-remark-twitter/gatsby-browser.js'),
      options: {"plugins":[],"align":"center"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Lou Tigroudja's Portfolio website","short_name":"NS Portfolio","start_url":"/","background_color":"#141420","theme_color":"#141420","display":"standalone","icon":"src/images/ns-icon-2x.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"c973d497722341ccef09175fcb7e41fb"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
