import { useLoaderData } from "react-router-dom";


const GamesPage = () => {

    const games =useLoaderData();

    return (
        <>
         <h2 className="text-2xl font-extrabold text-slate-100 bg-red-700 px-2 py-1 rounded w-fit mx-auto my-10">Games Events</h2>
           <div className=" grid gap-4 mx-5 md:grid-cols-2  lg:grid-cols-3 lg:mx-5">
                {
                  games.map(singleGames=> 
                   <div className="" key={singleGames.id}> 
                      <div className=" md:h-[550px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                          <a href="#">
                         <img className="rounded-t-lg px-4 py-1" src={singleGames.image}alt="" />
                          </a>
                          <div className="p-5">
                              <a href="#">
                              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{singleGames.title}</h5>
                              </a>
                              <p className="mb-3 leading-7 font-normal text-sm text-gray-700 dark:text-gray-400">{singleGames.description }
                              </p>
                              <p className="font-semibold text-cyan-600">Price: {singleGames.price}$</p>
                          </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default GamesPage;