import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('lotteryTickets').title('Lottery Tickets'),
      S.documentTypeListItem('lottery').title('lottery'),
      S.documentTypeListItem('news').title('news'),
      S.documentTypeListItem('recentWin').title('recentWin'),
      S.documentTypeListItem('specials').title('specials'),
      S.documentTypeListItem('winners').title('winners'),
      S.documentTypeListItem('mapCoords').title('mapCoords'),
      S.documentTypeListItem('momentaryLottery').title('momentaryLottery'),
      S.documentTypeListItem('promoCharity').title('promoCharity'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            'lotteryTickets',
            'lottery',
            'news',
            'recentWin',
            'specials',
            'winners',
            'mapCoords',
            'momentaryLottery',
            'promoCharity',
          ].includes(item.getId()!),
      ),
    ]);
