import { FC } from 'react';
import { Header } from '../Header/Header';
import { LayoutProps } from './Layout.props';

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
};
