import { SVGProps, forwardRef } from 'react';
import styled from 'styled-components';
import { compose, space, color } from 'styled-system';
import { IconProps } from './types';
import { size } from './sizeVariant';
const SvgComponent = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, svgRef) => {
  return <svg viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef} {...props}><path d="M16.047 14.12a5.688 5.688 0 01-5.714 5.713c-3.16 0-5.683-2.49-5.683-5.714 0-1.516.574-2.858 1.486-3.863l-3.864 3.863-2.028-2.027 4.358-4.31c.59-.591.896-1.356.896-2.204V.167h2.858v5.411c0 1.661-.59 3.065-1.74 4.214l-.127.128a5.69 5.69 0 013.847-1.486 5.665 5.665 0 015.711 5.685zm-2.584 0c0-1.692-1.404-3.065-3.13-3.065-1.74 0-3.096 1.437-3.096 3.064 0 1.675 1.373 3.096 3.096 3.096a3.116 3.116 0 003.13-3.096z" fill="currentColor" /></svg>;
});
const Beatport = styled(SvgComponent)<IconProps>({
  flex: 'none',
  verticalAlign: 'middle'
}, compose(space, color, size));
Beatport.defaultProps = {
  size: 'md'
};
Beatport.displayName = "PsBeatport";
export default Beatport;