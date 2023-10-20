'use strict';

/**
 * e-commerce-website-development-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::e-commerce-website-development-service.e-commerce-website-development-service', {
    config: {
        find: {
            middlewares:["api::about-us.about-us-data"],
        }
    }
});
