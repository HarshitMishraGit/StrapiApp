'use strict';

/**
 * custom-web-development-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::custom-web-development-service.custom-web-development-service', {
    config: {
        find: {
            middlewares:["api::about-us.about-us-data"],
        }
    }
});
