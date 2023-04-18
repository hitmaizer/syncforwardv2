export interface HeroSectionProps {
  introText: string;
  title: string;
  subtitle: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  bgImage: BgImage;
  cta: Cta;
}

export interface BgImage {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewURL: null;
  provider: string;
  providerMetadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
  placeholder: string;
}

export interface Formats {
  large: Format;
  small: Format;
  medium: Format;
  thumbnail: Format;
}

export interface Format {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  providerMetadata: ProviderMetadata;
}

export interface ProviderMetadata {
  publicID: string;
  resourceType: string;
}

export interface Cta {
  id: number;
  label: string;
  url: string;
}
