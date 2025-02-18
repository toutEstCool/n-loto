import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export interface WinnersType {
  _id: string;
  name: string;
  region: string;
  amount: string;
  price: string;
  company: string;
  companyLogo: string;
  thumbnail: string;
  videoUrl: string;
}

export const winnersType = defineType({
  name: 'winners',
  title: 'Winners',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Имя победителя',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'region',
      title: 'Регион',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'amount',
      title: 'Выигрыш',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Стоимость билета',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'компания',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyLogo',
      title: 'Логотип компании',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'video',
      title: 'Видео-превью',
      type: 'object',
      fields: [
        defineField({
          name: 'thumbnail',
          title: 'Обложка видео',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'videoUrl',
          title: 'Ссылка на видео',
          type: 'url',
          validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
        }),
      ],
    }),
  ],
});
