import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    Heading: Attribute.String;
    Description: Attribute.Text;
    Links: Attribute.Component<'hp-components.link-to-case-hp', true>;
  };
}

export interface HpComponentsLinkToCaseHp extends Schema.Component {
  collectionName: 'components_hp_components_link_to_case_hp_s';
  info: {
    displayName: 'Link to Case [HP]';
    icon: 'attachment';
  };
  attributes: {
    Title: Attribute.String;
    Link: Attribute.String;
    Doctor: Attribute.String;
    DoctorDescription: Attribute.Text;
    Thumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDescription: Attribute.Text;
    MetaImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.hero': BlocksHero;
      'hp-components.link-to-case-hp': HpComponentsLinkToCaseHp;
      'seo.meta-data': SeoMetaData;
    }
  }
}
