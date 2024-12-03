import MainAnimation from '@/components/4th/Home/MainAnimation';
import Header from '@/components/4th/Home/Header';
import Ship from '@/components/4th/Ship';
import { motion } from 'framer-motion';
import Menu from '@/components/4th/layouts/Menu';
import { useAtom } from 'jotai';
import { isOpenAtom } from '@/atoms';

const Home = () => {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

  const openMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="w-full flex flex-col cursor-default" style={{ height: window.innerHeight }} onClick={openMenu}>
        <Header />

        <Ship />
        <MainAnimation />
        {!isOpen && (
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
            className="text-point m-auto cursor-pointer"
          >
            Click to continue...
          </motion.span>
        )}

        <Menu />
      </div>
    </>
  );
};

export default Home;
