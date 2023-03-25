import { createElement, useState } from 'react';

import { useEffectOnce } from 'react-use';
import SfApple from 'ui/icons/Apple';
import { IconProps } from 'ui/icons/types';

type IconType = typeof SfApple;

interface CustomIconProps extends IconProps {
  name?: string;
}

const Icon = (props: CustomIconProps) => {
  const { name = 'SfApple', ...rest } = props;
  const [icon, setIcon] = useState<IconType>(SfApple);

  const iconName = name.replace('Sf', '');

  useEffectOnce(() => {
    import(`../../icons/${iconName}`).then((module) => setIcon(module.default));
  });

  return <>{createElement(icon, rest)}</>;
};

export default Icon;
