import { SVGProps, forwardRef } from 'react';
import styled from 'styled-components';
import { compose, space, color } from 'styled-system';
import { IconProps } from './types';
import { size } from './sizeVariant';
const SvgComponent = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, svgRef) => {
  return <svg viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef} {...props}><path d="M21.92 19.446H0L10.236.553h21.917L21.92 19.446z" fill="currentColor" /></svg>;
});
const Bandcamp = styled(SvgComponent)<IconProps>({
  flex: 'none',
  verticalAlign: 'middle'
}, compose(space, color, size));
Bandcamp.defaultProps = {
  size: 'md'
};
Bandcamp.displayName = "SfBandcamp";
export default Bandcamp;