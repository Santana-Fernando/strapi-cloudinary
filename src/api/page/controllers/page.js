const { createCoreController } = require('@strapi/strapi').factories;
 
module.exports = createCoreController('api::page.page', ({ strapi }) => ({
    async find(ctx) {
        const populateList = [
            'menu.menu',
            'sections.metadata',
            'sections.image',
            'sections.text_grid',
            'sections.image_grid.image',
        ]
        // Push any additional query params to the array
        populateList.push(ctx.query.populate)
        ctx.query.populate = populateList.join(',')
 
        const content = await super.find(ctx)
        return content
    }
}))