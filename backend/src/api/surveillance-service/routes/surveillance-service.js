'use strict';

/**
 * surveillance-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::surveillance-service.surveillance-service', {
    config: {
        find: {
            middlewares:["api::about-us.about-us-data"],
        }
    }
});
