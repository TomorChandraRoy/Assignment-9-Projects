import { Link, useLoaderData, useParams, } from "react-router-dom";

const DetailsPage = () => {
    const data = useLoaderData();
    // console.log(data);
    const {id}= useParams(); 
    const currentData = data.find(serivece => serivece.id ==id);
    // console.log(currentData);
    const {title, price, description,image}= currentData;
    console.log(title,description,price,image);

  return (
    <>
      <div>
        <h3 className="text-2xl font-bold text-slate-100 bg-red-700 px-2 py-1 rounded w-fit mx-auto mt-10">
          Services Details
        </h3>
        <div>
          <div   
            className=" flex md:ml-[65px] md:w-[640px]  mt-10 flex-col lg:flex-row lg:w-full lg:-ml-[5px]   rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div
              className="relative mx-5 lg:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white  bg-clip-border text-gray-700">
              <img src={image} alt="image" className="h-full lg:w-full object-cover"/>
            </div>

            <div className="p-6">
              <h6 className="mb-4 block  text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-500 antialiased">
               Price: {price}$
              </h6>
              <h4
                className="mb-2 block  lg:text-2xl font-semibold leading-snug tracking-normal     text-blue-gray-900 antialiased">
                {title}
              </h4>
              <p className="mb-8 block  text-base font-normal leading-relaxed text-gray-700 antialiased">
                {description}
              </p>
              <Link to='/'>
                <button
                  className="btn">Go Back
                </button>
              </Link>
            </div>
          </div>
       </div>   
      </div>
    </>  
  );
};

export default DetailsPage;



