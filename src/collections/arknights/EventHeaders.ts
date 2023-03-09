import { CollectionConfig } from 'payload/types';

export const EventHeaders: CollectionConfig = {
  labels: {
    singular: 'Header',
    plural: 'Headers',
  },
  slug: 'ak-headers',
  admin: {
    group: 'AK',
    disableDuplicate: true,
    useAsTitle: 'alt',
  },
  access: {
    read: () => true,
  },
  upload: {
    staticURL: '/ak-headers',
    staticDir: 'ak-headers',
    disableLocalStorage: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'topColour',
      type: 'text',
    },
  ],
}
