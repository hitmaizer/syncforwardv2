import { SpaceProps } from 'styled-system';

import SfApple from './Apple';
import SfBandcamp from './Bandcamp';
import SfBeatport from './Beatport';
import SfSoundcloud from './Soundcloud';
import SfSpotify from './Spotify';
import SfYoutube from './Youtube';

interface BaseProps {
  color?: string;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export type IconProps = BaseProps & SpaceProps;

export { SfApple, SfBandcamp, SfBeatport, SfSoundcloud, SfSpotify, SfYoutube };

export type IconName =
  | 'SfApple'
  | 'SfBandcamp'
  | 'SfBeatport'
  | 'SfSoundcloud'
  | 'SfSpotify'
  | 'SfYoutube';
