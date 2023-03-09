import { CollectionConfig } from 'payload/types';

export const ItemIcons: CollectionConfig = {
  labels: {
    singular: 'Icon',
    plural: 'Icons',
  },
  slug: 'ak-icons',
  admin: {
    group: 'AK',
    disableDuplicate: true,
    useAsTitle: 'alt',
  },
  access: {
    read: () => true,
  },
  upload: {
    staticURL: '/ak-icons',
    staticDir: 'ak-icons',
    disableLocalStorage: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}
