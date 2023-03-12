export interface NavbarProps {
  children?: React.ReactNode;
  navLinks?: Link[];
}

type Link = {
  label: string;
  href: string;
};
