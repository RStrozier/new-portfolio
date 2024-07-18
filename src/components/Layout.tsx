import { ReactNode } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import Footer from './footer/Footer';

interface LayoutProps {
    children: ReactNode;
  }

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
        <nav>
        <FiAlignJustify 
        size={34}/>
        </nav>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;