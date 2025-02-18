import { DocumentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export interface LotteryTicketsType {
  _id: string;
  lotteryName: string;
  superPrize: string;
  drawNumber: string;
  drawDate: string;
  ticketPrice: string;
  imageUrl: string;
}

export const lotteryTicketsType = defineType({
  name: 'lotteryTickets',
  title: 'Lottery Tickets',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'lotteryName',
      title: 'Название лотереи',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'superPrize',
      title: 'Суперприз',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'drawNumber',
      title: 'Номер тиража',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'drawDate',
      title: 'Дата розыгрыша',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ticketPrice',
      title: 'Цена билета',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Изображение билета',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});
