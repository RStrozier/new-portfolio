import { ReactNode } from 'react';
import { FiAlignJustify } from 'react-icons/fi';

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
      <footer>
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
  );
};

export default Layout;