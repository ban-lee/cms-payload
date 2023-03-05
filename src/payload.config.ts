import cloudinaryPlugin from 'payload-cloudinary-plugin/dist/plugins';
import path from 'path';
import { Archetypes } from './collections/arknights/Archetypes';
import { Avatars } from './collections/arknights/Avatars';
import { buildConfig } from 'payload/config';
import { Users } from './collections/Users';

export default buildConfig({
  serverURL: 'http://localhost:1337',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
  ],
  plugins: [cloudinaryPlugin()],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  csrf: [
    "http://localhost:3000",
  ],
  cors: "*",
});
