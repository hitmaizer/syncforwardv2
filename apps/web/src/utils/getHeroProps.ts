export const getHeroProps = (data: any) => {
  return {
    title: data?.title,
    introText: data?.introText,
    subtitle: data?.subtitle,
    bgImage: {
      src: data?.bgImage.data.attributes.url || '',
      blurDataURL: data?.bgImage.data.attributes.placeholder || '',
      alt: data?.bgImage.data.attributes.alternativeText || '',
    },
    cta: {
      label: data?.cta.label,
      href: data?.cta.url,
    },
  };
};
