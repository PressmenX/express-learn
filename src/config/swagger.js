const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product API',
      version: '1.0.0',
      description: 'Dokumentasi REST API Product'
    },
  },
  apis: ['./src/routes/*.js'], 
}

module.exports = swaggerJsdoc(options)