import { Link } from "react-router-dom";

const LearnMore = () => {
    return (

      <div className="">
        <h1 className="text-2xl font-bold text-slate-100 bg-red-700 px-2 py-1 rounded w-fit mx-auto mt-10">
          Latest Games
        </h1>
        <div className=" flex   mt-10 flex-col    lg:flex-row w-full rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
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
              Players begin the game by selecting an army composition from a variety of different units, including infantry, cavalry, and archers. Once their armies are composed, players take turns moving their units around the battlefield and attacking their opponents units. Units in Art of War have different strengths and weaknesses. For example, infantry are strong against cavalry, but weak against archers. Cavalry are strong against archers, but weak against infantry. Archers are strong against infantry, but weak against cavalry.Players must carefully consider the strengths and weaknesses of their units when planning their attacks. They must also take into account the terrain of the battlefield and the position of their opponents units.
            </p>
             <Link to='/'>
               <button className="btn">Go Back</button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default LearnMore;