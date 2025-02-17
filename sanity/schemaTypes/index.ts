import { type SchemaTypeDefinition } from 'sanity';
import { lotteryType } from './lotteryType';
import { winnersType } from './winnersType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [lotteryType, winnersType],
};
