import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Prosjekter',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Bilde',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),
    defineType({
      name: 'dateRange',
      title: 'Periode (Dato)',
      type: 'object',
      fields: [
        {
          name: 'from',
          title: 'Start',
          type: 'date',
          options: {
            dateFormat: 'YYYY-MM-DD',
            calendarTodayLabel: 'Today'
          }
        },
        {
          name: 'to',
          title: 'Slutt',
          type: 'date',
          options: {
            dateFormat: 'YYYY-MM-DD',
            calendarTodayLabel: 'Today'
          },
          validation: Rule => Rule.custom((toDate, context) => {

            const fromDate = context.parent.from;

            if (toDate && fromDate && toDate < fromDate) {
              return 'Slutt dato kan ikke være før start dato';
            }

            return true;
          })
        }
      ]
    }),
    defineField({
      name: 'companytitle',
      title: 'Navn på arbeidsgiver',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Beskrivelse av prosjekt (Max 50 ord)',
      type: 'text',
      validation: Rule => Rule.custom(text => {
        const wordCount = text.trim().split(/\s+/).length;
        return wordCount <= 50;
      }).warning('Body text must be no more than 150 words'),
    }),

  ],

})
