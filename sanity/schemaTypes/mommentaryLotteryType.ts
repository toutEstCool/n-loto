import { DocumentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export interface MomentaryLotteriesType {
  title: string;
  ticketPrice: number;
  mainPrize: string;
  imageUrl: string;
}

export const momentaryLottery = defineType({
  name: 'momentaryLottery',
  title: 'Моментальная Лотерея',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Квест-Лотерея',
    }),
    defineField({
      name: 'ticketPrice',
      title: 'Цена билета',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
      initialValue: 100,
    }),
    defineField({
      name: 'mainPrize',
      title: 'Главный приз',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
      initialValue: 1000000,
    }),
    defineField({
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
