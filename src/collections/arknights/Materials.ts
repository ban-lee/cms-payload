import { CollectionConfig } from 'payload/types';

export const Materials: CollectionConfig = {
  slug: 'materials',
  admin: {
    useAsTitle: 'name',
    group: 'AK',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'rarity',
      type: 'select',
      defaultValue: '3',
      options: [
        {
          label: 'T1',
          value: '1',
        },
        {
          label: 'T2',
          value: '2',
        },
        {
          label: 'T3',
          value: '3',
        },
        {
          label: 'T4',
          value: '4',
        },
        {
          label: 'T5',
          value: '5',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'itemId',
          type: 'text',
        },
        {
          name: 'sortId',
          type: 'number',
        },
      ],
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'ak-icons',
    },
  ],
}
