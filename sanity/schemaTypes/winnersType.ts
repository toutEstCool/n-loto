import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

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
      name: 'company',
      title: 'Компания',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyPrice',
      title: 'Цена билета',
      type: 'string',
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
