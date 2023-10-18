'use strict';

/**
 * wordpress-development-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wordpress-development-service.wordpress-development-service');
