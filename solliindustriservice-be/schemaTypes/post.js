import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Referanser',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Navn på selskap',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Navn på refeanseperson',
      type: 'string',
    }),
    defineField({
      name: 'workTitle',
      title: 'Tittel på refeanseperson',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
   /* defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),*/
    defineField({
      name: 'body',
      title: 'Quote (max 30 ord)',
      type: 'text',
      validation: Rule => Rule.custom(text => {
        const wordCount = text.trim().split(/\s+/).length;
        return wordCount <= 30;
      }).warning('Text must be no more than 150 words'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Bilde av referanseperson',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'logoImage',
      title: 'Bilde av logo til bedrift',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
   /* defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),*/

  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
