import { CollectionConfig } from 'payload/types';

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'name',
    group: 'AK',
    defaultColumns: [
      'name',
      'materials',
      'dates',
    ],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'materials',
      type: 'relationship',
      relationTo: 'materials',
      hasMany: true,
    },
    {
      name: 'header',
      type: 'upload',
      relationTo: 'ak-headers',
    },
    {
      name: 'dates',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'start',
              label: 'Start (EN)',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'dayAndTime',
                },
              },
            },
            {
              name: 'end',
              label: 'End (EN)',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'dayAndTime',
                },
              },
            }
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'startCn',
              label: 'Start (CN)',
              type: 'date',
              admin: {
                date: {
                  displayFormat: 'yyy-MM-dd',
                },
              },
            },
            {
              name: 'endCn',
              label: 'End (CN)',
              type: 'date',
              admin: {
                date: {
                  displayFormat: 'yyy-MM-dd',
                },
              },
            }
          ],
        },
      ],
    },
    {
      name: 'free',
      type: 'group',
      fields: [
        {
          name: 'freeOperators',
          type: 'relationship',
          relationTo: 'operators',
        },
        {
          name: 'freeSkins',
          type: 'relationship',
          relationTo: 'skins',
        },
      ],
    },
    {
      name: 'new',
      type: 'group',
      fields: [
        {
          name: 'newOperators',
          type: 'relationship',
          relationTo: 'operators',
          hasMany: true,
        },
        {
          name: 'newSkins',
          type: 'relationship',
          relationTo: 'skins',
          hasMany: true,
        },
      ],
    },
    {
      name: 'rerun',
      type: 'group',
      fields: [
        {
          name: 'rerunSkins',
          type: 'relationship',
          relationTo: 'skins',
          hasMany: true,
        },
      ],
    },
  ],
}
