'use strict';

/**
 * `about-us-data` middleware
 */
const populate = {
      "seoInformation": {
        "populate": true
      },
      "faqs": {
        "populate": {
          "questionAnswer": {
            "populate": true
          }
        }
      }
  }

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In about-us-data middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }
    await next();
  };
};
