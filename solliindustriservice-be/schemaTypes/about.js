import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'Om han',
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
      name: 'ingress',
      title: 'Ingress',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Beskrivelse (Max 500 ord)',
      type: 'array',
      of: [{ type: 'block' }], // Only allow plain text blocks (paragraphs)
      options: {
        layout: 'block',
      },
    }),
  ],
});
