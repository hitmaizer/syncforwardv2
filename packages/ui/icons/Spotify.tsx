import { SVGProps, forwardRef } from 'react';
import styled from 'styled-components';
import { compose, space, color } from 'styled-system';
import { IconProps } from './types';
import { size } from './sizeVariant';
const SvgComponent = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, svgRef) => {
  return <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef} {...props}><path d="M12.046 0a12 12 0 10-.004 24 12 12 0 00.004-24zm5.502 17.314a.747.747 0 01-1.029.25c-2.816-1.723-6.36-2.12-10.54-1.158a.747.747 0 11-.333-1.457c4.571-1.046 8.492-.596 11.661 1.337a.747.747 0 01.24 1.028zm1.468-3.266a.938.938 0 01-.944.434.936.936 0 01-.343-.127c-3.224-1.988-8.143-2.563-11.957-1.404a.937.937 0 01-.543-1.792c4.357-1.322 9.776-.682 13.48 1.59a.932.932 0 01.307 1.292v.007zm.127-3.403C15.275 8.348 8.896 8.136 5.203 9.258a1.126 1.126 0 11-.652-2.155c4.24-1.287 11.284-1.04 15.739 1.604a1.124 1.124 0 11-1.147 1.93v.008z" fill="currentColor" /></svg>;
});
const Spotify = styled(SvgComponent)<IconProps>({
  flex: 'none',
  verticalAlign: 'middle'
}, compose(space, color, size));
Spotify.defaultProps = {
  size: 'md'
};
Spotify.displayName = "SfSpotify";
export default Spotify;