import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const lotteriesType = defineType({
  name: 'lotteries',
  title: 'Lotteries',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'lotteryName',
      title: 'Название лотереи',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Дата и время розыгрыша',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'drawNumber',
      title: 'Номер тиража',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prizeAmount',
      title: 'Выигрышная сумма',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Иконка лотереи',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});
