/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    archetypes: Archetype;
    events: Event;
    'ak-avatars': AkAvatar;
    materials: Material;
    operators: Operator;
    skins: Skin;
    'ak-headers': AkHeader;
    'ak-icons': AkIcon;
  };
  globals: {};
}
export interface User {
  id: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
  password?: string;
}
export interface Archetype {
  id: string;
  class?: 'Vanguard' | 'Guard' | 'Defender' | 'Sniper' | 'Caster' | 'Medic' | 'Supporter' | 'Specialist';
  archetype?: string;
  createdAt: string;
  updatedAt: string;
}
export interface Event {
  id: string;
  name: string;
  materials?: string[] | Material[];
  header?: string | AkHeader;
  dates: {
    startCn?: string;
    endCn?: string;
    start?: string;
    end?: string;
    estimatedStart?: string;
  };
  free: {
    freeOperators?: string | Operator;
    freeSkins?: string | Skin;
  };
  new: {
    newOperators?: string[] | Operator[];
    newSkins?: string[] | Skin[];
  };
  rerun: {
    rerunSkins?: string[] | Skin[];
  };
  createdAt: string;
  updatedAt: string;
}
export interface Material {
  id: string;
  name?: string;
  rarity?: '1' | '2' | '3' | '4' | '5';
  itemId?: string;
  sortId?: number;
  icon?: string | AkIcon;
  createdAt: string;
  updatedAt: string;
}
export interface AkIcon {
  id: string;
  alt?: string;
  cloudinary: {
    public_id?: string;
    original_filename?: string;
    format?: string;
    secure_url?: string;
    resource_type?: string;
  };
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
export interface AkHeader {
  id: string;
  alt?: string;
  topColour?: string;
  cloudinary: {
    public_id?: string;
    original_filename?: string;
    format?: string;
    secure_url?: string;
    resource_type?: string;
  };
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
export interface Operator {
  id: string;
  rarity: number;
  name: string;
  archetype?: string | Archetype;
  searchableName?: string;
  charId?: string;
  createdAt: string;
  updatedAt: string;
}
export interface Skin {
  id: string;
  name?: string;
  brand?:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20';
  operator?: string | Operator;
  skinId?: string;
  charId?: string;
  imgId?: string;
  createdAt: string;
  updatedAt: string;
}
export interface AkAvatar {
  id: string;
  alt?: string;
  cloudinary: {
    public_id?: string;
    original_filename?: string;
    format?: string;
    secure_url?: string;
    resource_type?: string;
  };
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
