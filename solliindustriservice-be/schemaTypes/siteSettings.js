import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Navn på nettsted',
      type: 'string',
    }),
    {
      name: 'description',
      title: 'Beskrivelse på nettsted',
      type: 'text'
    },
    defineField({
      name: 'weblogo',
      title: 'Bilde av logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'linkedin',
      title: 'Link til Linkedin profil',
      type: 'string',
    }),

  ],
})
