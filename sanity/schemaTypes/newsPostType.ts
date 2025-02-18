import { DocumentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export interface NewsType {
  _id: string;
  newsTitle: string;
  drawDate: string;
  image: string;
}

export const newsType = defineType({
  name: 'news',
  title: 'news',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'newsTitle',
      title: 'Заголовок новости',
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
      name: 'image',
      title: 'Изображение новости',
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
