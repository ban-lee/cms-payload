import { CollectionConfig } from 'payload/types';

export const Skins: CollectionConfig = {
  slug: 'skins',
  admin: {
    useAsTitle: 'name',
    group: 'AK',
    defaultColumns: [
      'name',
      'brand',
      'operator',
    ],
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
      name: 'brand',
      type: 'select',
      options: [
        { label: 'Test Collection', value: '1' },
        { label: 'EPOQUE', value: '2' },
        { label: 'Made by 0011', value: '3' },
        { label: '0011/Tempest', value: '4' },
        { label: 'Coral Coast', value: '5' },
        { label: 'MARTHE', value: '6' },
        { label: 'Witch Feast', value: '7' },
        { label: 'Cambrian Series', value: '8' },
        { label: 'Icefield Messenger', value: '9' },
        { label: 'Vitafield', value: '10' },
        { label: 'Raythean Pioneer', value: '11' },
        { label: 'Raythean Striker', value: '12' },
        { label: 'Bloodline of Combat', value: '13' },
        { label: 'Rhodes Kitchen', value: '14' },
        { label: 'Dreambind Castle', value: '15' },
        { label: 'Whistlewind', value: '16' },
        { label: 'Ambience Synesthesia', value: '17' },
        { label: 'Collab Series', value: '18' },
        { label: 'Shining Steps', value: '19' },
        { label: 'Achievement Star', value: '20' },
      ],
    },
    {
      name: 'operator',
      type: 'relationship',
      relationTo: 'operators',
    },
    {
      name: 'skinId',
      label: 'Skin ID',
      type: 'text',
    },
    {
      name: 'charId',
      label: 'Character ID',
      type: 'text',
    },
    {
      name: 'imgId',
      label: 'Image ID',
      type: 'text',
    },
  ],
}
