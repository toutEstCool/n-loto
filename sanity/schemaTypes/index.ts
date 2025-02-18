import { type SchemaTypeDefinition } from 'sanity';
import { lotteryType } from './lotteryType';
import { winnersType } from './winnersType';
import { lotteryTicketsType } from './lotteryTicketsType';
import { newsType } from './newsPostType';
import { recentWinType } from './recentWinType';
import { specialsType } from './specialsType';
import { mapCoordsType } from './mapCoordsType';
import { momentaryLottery } from './mommentaryLotteryType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    lotteryTicketsType,
    lotteryType,
    newsType,
    recentWinType,
    specialsType,
    winnersType,
    mapCoordsType,
    momentaryLottery,
  ],
};
