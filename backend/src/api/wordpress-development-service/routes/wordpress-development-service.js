'use strict';

/**
 * wordpress-development-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::wordpress-development-service.wordpress-development-service', {
    config: {
        find: {
            middlewares:["api::about-us.about-us-data"],
        }
    }
});
