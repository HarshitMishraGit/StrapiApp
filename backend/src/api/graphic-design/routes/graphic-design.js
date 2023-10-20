'use strict';

/**
 * graphic-design router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::graphic-design.graphic-design', {
    config: {
        find: {
            middlewares:["api::about-us.about-us-data"],
        }
    }
});
