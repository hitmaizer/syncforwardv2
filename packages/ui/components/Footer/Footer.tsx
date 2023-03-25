/* eslint-disable react/no-array-index-key */

import * as S from './Footer.styles';
import { FooterProps } from './Footer.types';

const Footer = (props: FooterProps) => {
  const { children, footerItems } = props;

  return (
    <S.Container>
      <S.ItemsWrapper>
        {footerItems?.map((item, index) => {
          const { href, iconName } = item;

          return (
            <S.FooterItem key={index}>
              <S.Link href={href}>
                <S.Icon name={iconName} />
              </S.Link>
            </S.FooterItem>
          );
        })}
      </S.ItemsWrapper>
      {children}
    </S.Container>
  );
};

export default Footer;
