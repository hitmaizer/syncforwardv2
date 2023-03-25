import { IconName } from '@icons';

type FooterItem = {
  iconName: IconName;
  href: string;
};

export interface FooterProps {
  children?: React.ReactNode;
  footerItems?: FooterItem[];
}
