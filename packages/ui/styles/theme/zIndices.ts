export const zIndexOrder = [
  'tronGrid',
  'stakingForm',
  'base',
  'scrollGradient',
  'marqueeGradient',
  'cardCountdown',
  'menu',
  'aside',
  'rankingBadge',
  'bannerOverlay',
  'bannerInformation',
  'mobileAsideToggle',
  'mobileMenu',
  'mobileMenuClose',
  'mobileMenuBottom',
  'goToTop',
  'navbar',
  'filterSidebar',
  'modalOverlay',
  'modal',
  'tooltip',
] as const;

type ZIndexValues = (typeof zIndexOrder)[number];
export type ZIndexRecord = Record<ZIndexValues, number>;

const zIndices = zIndexOrder.reduce(
  (acc: ZIndexRecord, current: ZIndexValues, index: number) => {
    acc[current] = index;
    return acc;
  },
  {} as ZIndexRecord
);

export default zIndices;
