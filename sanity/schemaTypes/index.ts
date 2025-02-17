import { type SchemaTypeDefinition } from 'sanity';
import { lotteryType } from './lotteryType';
import { winnersType } from './winnersType';
import { lotteryTicketsType } from './lotteryTicketsType';
import { newsType } from './newsPostType';
import { recentWinType } from './recentWinType';
import { specialsType } from './specialsType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    lotteryTicketsType,
    lotteryType,
    newsType,
    recentWinType,
    specialsType,
    winnersType,
  ],
};
