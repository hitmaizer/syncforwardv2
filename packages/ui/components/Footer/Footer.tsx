import * as S from './Footer.styles';
import { FooterProps } from './Footer.types';

const Footer = (props: FooterProps) => {
  const { children } = props;

  return <S.Container>{children}</S.Container>;
};

export default Footer;
