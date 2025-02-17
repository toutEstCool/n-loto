import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('lottery').title('lottery'),
      S.documentTypeListItem('winners').title('winners'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !['lottery', 'winners'].includes(item.getId()!),
      ),
    ]);
