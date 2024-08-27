export default {
  name: 'category',
  type: 'document',
  title: 'Categories',
  fields: [
    {
      name: 'name',
      title: 'Name of Category',
      type: 'string',
    },
    {
      name: 'subCategories', // Field name corrected to be valid
      title: 'Sub-Categories', // Title can still have spaces and special characters
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      description: 'Select sub-categories that fall under this category',
    },
  ],
}
