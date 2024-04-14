import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'frontPage',
  title: 'Front Page',
  type: 'document',
  fields: [
    defineField({
      name: 'bannerBilde',
      title: 'Banner bilde',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'h1Title',
        title: '(h1) Hoved tittel',
        type: 'string',
      }),
    defineField({
        name: 'titlePink',
        title: 'Del av tittelen som er i rosa',
        type: 'string'
      }),
      defineField({
        name: 'ingress',
        title: 'Ingress',
        type: 'string'
      }),
      {
        name: 'h2Undertittel',
        title: '(h2) Undertittel',
        type: 'string'
      },

      {
        name: 'h3Undertittel',
        title: '(h3) Undertittel',
        type: 'string'
      },

      {
        name: 'erfaring',
        title: 'Erfaring',
        type: 'array',
        of: [{type: 'string'}]
      }

  ],
})
