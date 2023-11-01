'use strict';

/**
 * social-media-optimization router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::social-media-optimization.social-media-optimization', {
    config: {
        find: {
            middlewares:["api::about-us.about-us-data"],
        }
    }
});
