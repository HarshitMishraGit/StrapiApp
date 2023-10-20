'use strict';

/**
 * digital-marketing-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::digital-marketing-service.digital-marketing-service', {
    config: {
        find: {
            middlewares:["api::about-us.about-us-data"],
        }
    }
});
