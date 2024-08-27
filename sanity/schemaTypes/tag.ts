export default {
  name: 'tag',
  type: 'document',
  title: 'Tags',
  fields: [
    {
      name: 'name',
      title: 'Tag Name',
      type: 'string',
      description: 'The name of the tag (e.g., "Sale", "New Arrival", "Popular")',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      description: 'URL-friendly version of the tag name',
    },
  ],
}

