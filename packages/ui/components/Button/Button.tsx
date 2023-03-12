'use client';

import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = ({ children }: ButtonProps) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
