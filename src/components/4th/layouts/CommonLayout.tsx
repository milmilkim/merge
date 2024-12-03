import { Outlet } from 'react-router-dom';
import Stars from '@/components/4th/layouts/Stars';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const CommonLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="w-screen min-h-screen merge-4th">
      <Stars />
      <Outlet />
      <Footer />
    </div>
  );
};

export default CommonLayout;
