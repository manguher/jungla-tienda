const { sanitizeEntity } = require('strapi-utils');
const Shopify = require('shopify-api-node');

const shopify = new Shopify({
    shopName: 'jungla-tienda',
    apiKey: 'f88e9690ff747696860c1c6f2724022b',
    password: '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'
});

module.exports = {
    async findOne(ctx) {

        const { id } = ctx.params;

        const entity = await strapi.services.producto.findOne({ id });
        entity.shopify = await shopify.product.get(entity.shopifyId)
        return sanitizeEntity(entity, { model: strapi.models.producto });
    },
};