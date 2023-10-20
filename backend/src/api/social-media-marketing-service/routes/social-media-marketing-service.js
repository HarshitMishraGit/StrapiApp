'use strict';

/**
 * social-media-marketing-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::social-media-marketing-service.social-media-marketing-service', {
    config: {
        find: {
            middlewares:["api::about-us.about-us-data"],
        }
    }
});
