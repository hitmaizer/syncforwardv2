import { SVGProps, forwardRef } from 'react';
import styled from 'styled-components';
import { compose, space, color } from 'styled-system';
import { IconProps } from './types';
import { size } from './sizeVariant';
const SvgComponent = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, svgRef) => {
  return <svg viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M33.286 1.831c.535.532.92 1.195 1.117 1.923.7 2.673.714 8.252.714 8.252s0 5.579-.714 8.251a4.297 4.297 0 01-3.045 3.02c-2.673.717-13.396.717-13.396.717s-10.72 0-13.393-.706a4.292 4.292 0 01-3.031-3.03C.82 17.584.82 12.005.82 12.005s0-5.58.717-8.252a4.292 4.292 0 013.03-3.03C7.239.006 17.963.006 17.963.006s10.72 0 13.396.716a4.298 4.298 0 011.928 1.108zm-9.843 10.175l-8.91 5.141V6.864l8.91 5.142z" fill="currentColor" /></svg>;
});
const Youtube = styled(SvgComponent)<IconProps>({
  flex: 'none',
  verticalAlign: 'middle'
}, compose(space, color, size));
Youtube.defaultProps = {
  size: 'md'
};
Youtube.displayName = "PsYoutube";
export default Youtube;