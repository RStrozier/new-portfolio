import { ReactNode } from 'react';
import { FiAlignJustify } from 'react-icons/fi';

interface LayoutProps {
    children: ReactNode;
  }

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        <nav>
        <FiAlignJustify 
        size={32}/>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
  );
};

export default Layout;