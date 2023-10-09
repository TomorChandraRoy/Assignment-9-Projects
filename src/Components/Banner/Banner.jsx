import { useLoaderData } from "react-router-dom";
import SliderPage from "../../Slider/SliderPage";
import LatestPage from "../Latest/LatestPage";
import SerivesPage from "./../Serives/SerivesPage";
import MarqueePage from "../Marquee/MarqueePage";


const Banner = () => {

 
  const serives = useLoaderData();
  console.log(serives);


  return (
    <div>
      <section className=" mx-5 lg:-mx-1 rounded relative bg-gray-500 bg-blend-multiply bg-[url('../public/ss4.jpg')]" >
          <div className="  max-w-screen-xl px-4 py-32 lg:flex lg:h-fit lg:items-center" data-aos="zoom-in">
            <div className="mx-auto max-w-xl text-center">

              <h1 className="text-3xl font-extrabold text-red-500 sm:text-5xl">
                Tech and  <span className="font-extrabold text-blue-500 ">Gamming</span>
              </h1>

              <p className="mt-4 text-blue-400   font-extrabold sm:text-xl/relaxed">
                Tech and gaming are two rapidly growing industries that are closely intertwined. New technologies are constantly being developed to improve the gaming experience, and video games are often used to showcase the latest technological advancements.
              </p>

            </div>
          </div>
      </section>

      <h2 className=" text-slate-100 bg-red-700 px-2 py-1 rounded w-fit mx-auto font-bold text-2xl my-10">
        Services category
      </h2>

      <div className="grid mx-5 my-5 md:grid-cols-2 lg:grid-cols-3 lg:-mx-1 gap-2">
        {
          serives.map(serivesData  => <SerivesPage serivesData1={serivesData} key={serivesData.id}></SerivesPage>)
        }
      </div>
      <LatestPage></LatestPage>

      <SliderPage></SliderPage>
      <MarqueePage></MarqueePage>
    </div>
  );
};

export default Banner;
