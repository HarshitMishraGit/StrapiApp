'use strict';

/**
 * ppc-marketing router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ppc-marketing.ppc-marketing', {
    config: {
        find: {
            middlewares:["api::about-us.about-us-data"],
        }
    }
});
