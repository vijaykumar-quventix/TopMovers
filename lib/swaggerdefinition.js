// swagger setup

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'TopMovers App',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express.  ',
  },
  components: {
    securitySchemes: {
      jwt: {
        type: "http",
        scheme: "bearer",
        in: "header",
        bearerFormat: "JWT"
      },
    }
  },
  security: [{
    jwt: []
  }],
  consumes: [
    'application/json'
  ],
  produces: [
    'application/json'
  ],
  servers: [
    {
      url: process.env.BASEURL_LOCAL,
      description: 'Development server',
    },
  ],
};
