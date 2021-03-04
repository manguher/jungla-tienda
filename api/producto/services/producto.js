module.exports = {
    findOne(params, populate) {
      return strapi.query('producto').findOne(params, populate);
    },
  };