'use strict';

/**
 * surveillance-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::surveillance-service.surveillance-service');
