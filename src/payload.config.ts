import cloudinaryPlugin from 'payload-cloudinary-plugin/dist/plugins';
import path from 'path';
import { Archetypes } from './collections/arknights/Archetypes';
import { Avatars } from './collections/arknights/Avatars';
import { buildConfig } from 'payload/config';
import { EventHeaders } from './collections/arknights/EventHeaders';
import { Events } from './collections/arknights/Events';
import { ItemIcons } from './collections/arknights/ItemIcons';
import { Materials } from './collections/arknights/Materials';
import { Operators } from './collections/arknights/Operators';
import { Skins } from './collections/arknights/Skins';
import { Users } from './collections/Users';

export default buildConfig({
  serverURL: process.env.PAYLOAD_APP_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,

    // Arknights
    Archetypes,
    Events,
    Avatars,
    Materials,
    Operators,
    Skins,

    // Arknights Media
    EventHeaders,
    ItemIcons,
  ],
  plugins: [cloudinaryPlugin()],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  csrf: [
    process.env.AK_FRONTEND_URL,
  ],
  cors: "*",
});
