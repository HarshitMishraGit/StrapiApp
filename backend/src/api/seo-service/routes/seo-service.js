'use strict';

/**
 * seo-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::seo-service.seo-service', {
    config: {
        find: {
            middlewares:["api::about-us.about-us-data"],
        }
    }
});
