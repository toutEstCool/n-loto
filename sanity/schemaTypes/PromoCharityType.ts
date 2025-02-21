import { DocumentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export interface PromoCharityType {
  _id: string;
  title: string;
  description: string[];
  date: string;
  companyName: string;
  companyLogo: string;
  ticketPrice: string;
  bannerImage: string;
}

export const promoCharityType = defineType({
  name: 'promoCharity',
  title: 'Promo Charity',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Название акции',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Дата проведения',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyName',
      title: 'Название компании',
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
      name: 'ticketPrice',
      title: 'Цена билета',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bannerImage',
      title: 'Баннер акции',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
