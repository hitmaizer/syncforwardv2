'use client';

import Navbar from '@ui-components/Navbar';
import Footer from '@ui-components/Footer';
import { navItems } from '@constants/navItems';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar navLinks={navItems} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
