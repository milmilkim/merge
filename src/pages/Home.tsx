import MainAnimation from '@/components/Home/MainAnimation';
import Header from '@/components/Home/Header';
import Ship from '@/components/Ship';
import { motion } from 'framer-motion';
import Menu from '@/components/layout/Menu';
import { useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openMenu = () => {
    setIsVisible(true);
  };

  return (
    <>
      <div
        className='w-full flex flex-col cursor-default'
        style={{ height: window.innerHeight }}
        onClick={openMenu}>
        <Header />

        <Ship />
        <MainAnimation />
        {!isVisible && (
          <motion.span
            animate={{
              opacity: [0, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'linear',
              type: 'keyframes',
            }}
            className='text-point m-auto cursor-pointer'>
            Click to continue...
          </motion.span>
        )}

        <Menu setIsVisible={setIsVisible} isVisible={isVisible} />
      </div>
    </>
  );
};

export default Home;
