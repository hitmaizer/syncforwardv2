import * as S from './Navbar.styles';
import { NavbarProps } from './Navbar.types';

const Navbar = (props: NavbarProps) => {
  const { navLinks, children } = props;

  return (
    <S.Container>
      <S.Content>
        {/* <Logo /> */}
        <h1>Sync Forward</h1>
        <S.LinksSection>
          {navLinks?.map((link) => {
            const { href, label } = link;
            return (
              <S.Link key={href} href={href}>
                <S.LinkText>{label}</S.LinkText>
              </S.Link>
            );
          })}
        </S.LinksSection>
        {children}
      </S.Content>
    </S.Container>
  );
};

export default Navbar;
