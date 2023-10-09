import { Link } from "react-router-dom";

const LatestPage = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-extrabold text-slate-100 bg-red-700 px-2 py-1 rounded w-fit mx-auto mt-10">
        Latest Games
      </h1>
      <div className=" flex   mt-10 flex-col    lg:flex-row w-full rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" data-aos="zoom-in-up">
        <div className="relative mx-5 lg:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src="./src/assets/photo.jpg"
            alt="image"
            className="h-full lg:w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block  text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-500 antialiased">
            Gammes
          </h6>
          <h4 className="mb-2 block  lg:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Hitlist Art of War in The World Wide Gaming Market
          </h4>
          <p className="mb-8 block  text-base font-normal leading-relaxed text-gray-700 antialiased">
            Art of War is a turn-based strategy game where players take control of an army and must defeat their opponent in battle. The game is based on the ancient Chinese military treatise of the same name, and features a variety of different units and strategies that players can use to achieve victory.
          </p>
          <Link  to='/Learn More' className="inline-block" >
            <button
              className=" btn flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-blue-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                 Read More...
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default LatestPage;
