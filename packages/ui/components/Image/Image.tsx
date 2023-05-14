import NextImage from 'next/image';

import { ImageProps } from './Image.types';

const Image = (props: ImageProps) => {
  return <NextImage {...props} />;
};

Image.defaultProps = {
  quality: 80,
  unoptimized: true,
};

export default Image;
