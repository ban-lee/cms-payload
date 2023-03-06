import { CollectionConfig } from 'payload/types';

export const Operators: CollectionConfig = {
  slug: 'operators',
  admin: {
    useAsTitle: 'name',
    group: 'AK',
    defaultColumns: [
      'name',
      'rarity',
      'archetype',
    ],
    listSearchableFields: [
      'name',
      'searchableName',
    ],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'rarity',
          type: 'number',
          required: true,
          min: 1,
          max: 6,
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          unique: true,
        },
      ],
    },
    {
      name: 'archetype',
      type: 'relationship',
      relationTo: 'archetypes',
      admin: {
        allowCreate: false,
      },
    },
    {
      name: 'searchableName',
      type: 'text',
    },
    {
      name: 'charId',
      type: 'text',
    },
  ],
}
