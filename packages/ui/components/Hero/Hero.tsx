import * as S from './Hero.styles';
import { HeroProps } from './Hero.types';

const Hero = (props: HeroProps) => {
  const { title, introText, subtitle, bgImage, cta } = props;

  return (
    <S.Hero>
      <S.BackgroundImage {...bgImage} />
      <S.Content>
        <S.IntroText>{introText}</S.IntroText>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Link href={cta.href}>
          <S.Cta>{cta.label}</S.Cta>
        </S.Link>
      </S.Content>
    </S.Hero>
  );
};

export default Hero;
