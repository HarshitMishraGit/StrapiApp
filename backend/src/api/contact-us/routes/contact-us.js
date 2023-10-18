'use strict';

/**
 * contact-us router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contact-us.contact-us',{
    config: {
        find: {
            middlewares:["api::about-us.about-us-data"],
        }
    }
});
