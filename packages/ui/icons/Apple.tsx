import { SVGProps, forwardRef } from 'react';
import styled from 'styled-components';
import { compose, space, color } from 'styled-system';
import { IconProps } from './types';
import { size } from './sizeVariant';
const SvgComponent = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, svgRef) => {
  return <svg viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef} {...props}><path d="M15.73 12.742c-.032-1.95.799-3.47 2.49-4.558-.95-1.407-2.357-2.198-4.22-2.375a5.888 5.888 0 00-2.537.477c-.605.258-1.23.466-1.868.624a5.44 5.44 0 01-1.685-.527 5.64 5.64 0 00-2.123-.528 5.182 5.182 0 00-2.757.83A5.885 5.885 0 001 8.876a8.32 8.32 0 00-.956 4.13c.006 1.467.247 2.923.714 4.313a14.726 14.726 0 001.708 3.633c.46.745 1 1.437 1.612 2.063.664.664 1.327.995 2.034.959a5.057 5.057 0 001.751-.504 4.937 4.937 0 012.027-.455c.68.011 1.35.166 1.964.455a4.975 4.975 0 001.845.48 3.035 3.035 0 001.99-.935c.258-.241.493-.507.7-.793.256-.331.534-.736.843-1.197.216-.332.428-.697.637-1.082.212-.396.4-.805.564-1.224.076-.176.146-.355.206-.537.06-.183.126-.372.185-.564a5.158 5.158 0 01-1.546-1.082 5.279 5.279 0 01-1.549-3.795zM12.822 3.861a5.327 5.327 0 001.22-3.357V.262c.001-.08-.006-.16-.022-.24a4.481 4.481 0 00-1.812.551 5.049 5.049 0 00-1.579 1.271 5.023 5.023 0 00-1.244 3.241v.246c0 .077.008.153.023.229 1.274.102 2.416-.448 3.414-1.699z" fill="currentColor" /></svg>;
});
const Apple = styled(SvgComponent)<IconProps>({
  flex: 'none',
  verticalAlign: 'middle'
}, compose(space, color, size));
Apple.defaultProps = {
  size: 'md'
};
Apple.displayName = "PsApple";
export default Apple;