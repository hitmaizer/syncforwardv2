import { ImageProps as NextImageProps } from 'next/image';

export type ImageProps = Pick<
  NextImageProps,
  | 'src'
  | 'alt'
  | 'blurDataURL'
  | 'placeholder'
  | 'layout'
  | 'quality'
  | 'width'
  | 'height'
  | 'objectFit'
  | 'objectPosition'
  | 'unoptimized'
>;
