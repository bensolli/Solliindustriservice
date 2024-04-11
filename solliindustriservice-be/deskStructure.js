export const myStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Front Page')
        .child(
          S.document()
            .schemaType('frontPage')
            .documentId('frontPage')
        ),
      ...S.documentTypeListItems().filter(listItem => !['siteSettings', 'frontPage'].includes(listItem.getId()))
    ]);