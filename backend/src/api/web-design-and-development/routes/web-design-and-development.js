'use strict';

/**
 * web-design-and-development router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::web-design-and-development.web-design-and-development', {
    config: {
        find: {
            middlewares:["api::about-us.about-us-data"],
        }
    }
});
