import { CollectionConfig } from 'payload/types';

export const Avatars: CollectionConfig = {
  labels: {
    singular: 'Avatar',
    plural: 'Avatars',
  },
  slug: 'ak-avatars',
  admin: {
    group: 'AK',
    disableDuplicate: true,
    useAsTitle: 'alt',
  },
  access: {
    read: () => true,
  },
  upload: {
    staticURL: '/ak-avatars',
    staticDir: 'ak-avatars',
    disableLocalStorage: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}
