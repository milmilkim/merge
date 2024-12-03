import Gem from '@/assets/images/gem.gif';

const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center" style={{ height: window.innerHeight }}>
        <h1 className=" font-pyeongchang break-keep items-center text-8xl md:text-9xl pt-5">머지 영화제</h1>

        <img src={Gem} />
        <div className="bubble p-2 rounded-xl w-80 font-galmuri11 items-center flex flex-col mt-auto mb-5 border-2 border-black">
          <p>
            2024.12.27 <br />
            coming soon
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
