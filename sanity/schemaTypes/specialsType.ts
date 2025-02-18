import { DocumentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export interface SpecialsType {
  actionName: string;
  description: string;
  startDate: string;
  endDate: string;
  lotteries: string[];
  imageUrl: string;
}

export const specialsType = defineType({
  name: 'specials',
  title: 'specials',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'actionName',
      title: 'Название акции',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание акции',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Дата начала',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Дата окончания',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lotteries',
      title: 'Лотереи, участвующие в акции',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'lotteryTickets' }] }],
    }),
    defineField({
      name: 'image',
      title: 'Изображение акции',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt текст',
          type: 'string',
          description: 'Описание изображения для улучшения доступности',
        }),
        defineField({
          name: 'caption',
          title: 'Подпись к изображению',
          type: 'string',
          description: 'Подпись под изображением',
        }),
      ],
    }),
  ],
});
