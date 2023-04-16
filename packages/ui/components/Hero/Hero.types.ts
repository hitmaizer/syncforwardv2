import { ImageProps } from '@ui-components/Image/Image.types';

export interface HeroProps {
  title: string;
  subtitle: string;
  bgImage: Pick<ImageProps, 'src' | 'blurDataURL' | 'alt'>;
  introText: string;
  cta: {
    label: string;
    href: string;
  };
}
