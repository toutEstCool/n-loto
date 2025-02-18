import { DocumentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const mapCoordsType = defineType({
  name: 'mapCoords',
  title: 'mapCoords',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'place',
      title: 'место',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'latitude',
      title: 'широта',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'longitude',
      title: 'долгота',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
