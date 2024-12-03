import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const CommonLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="w-screen min-h-screen merge-5th">
      <Outlet />
    </div>
  );
};

export default CommonLayout;
