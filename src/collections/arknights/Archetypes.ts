import { CollectionConfig } from 'payload/types';

export const Archetypes: CollectionConfig = {
  slug: 'archetypes',
  admin: {
    useAsTitle: 'archetype',
    group: 'AK',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'class',
          type: 'select',
          options: [
            'Vanguard',
            'Guard',
            'Defender',
            'Sniper',
            'Caster',
            'Medic',
            'Supporter',
            'Specialist',
          ],
        },
        {
          name: 'archetype',
          type: 'text',
        },
      ],
    },
  ],
}
