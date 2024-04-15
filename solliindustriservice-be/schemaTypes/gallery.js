import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Prosjekter',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),
    defineField({
      name: 'companytitle',
      title: 'Navn på arbeidsgiver',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'mainImage',
      title: 'Bilde av referanseperson',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

  ],

})
