import { useLoaderData } from "react-router-dom";


const FeaturedEvents = () => {
    const events =useLoaderData();
   
    return (
        <>
          <h2 className="text-2xl font-extrabold text-slate-100 bg-red-700 px-2 py-1 rounded w-fit mx-auto my-10">Featured Events</h2>
            <div className=" grid gap-4 mx-5 md:grid-cols-2 lg:grid-cols-3 lg:mx-5">
            
               {
                 events.map(singleEvent=> <div className="" key={singleEvent.id}>
            
                  <div className="md:h-[550px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                       <a href="#">
                         <img className="rounded-t-lg px-4 py-1" src={singleEvent.image}alt="" />
                       </a>
                        <div className="p-5">
                           <a href="#">
                             <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{singleEvent.title}</h5>
                           </a>
                          <p className="mb-3 leading-7 font-normal text-sm text-gray-700 dark:text-gray-400">      {singleEvent.description }
                          </p>
                       </div>
                    </div>
    
                 </div>)
                }
            </div>
        </>
    );
};

export default FeaturedEvents;