import Marquee from "react-fast-marquee";
import logo1 from "../../image/ss1.png";
import logo2 from "../../image/ss2.jpg";
import logo4 from "../../image/ss4.png";
import logo5 from "../../image/ss5.png";
import logo6 from "../../image/ss7.png";


const MarqueePage = () => {
  // you aer good boy
  return (
    <div className="my-10 ">
        <h2 className=" mb-7 font-extrabold bg-red-600 text-white w-fit mx-auto px-2 py-1 rounded text-2xl">Tech and Gameing Sponsored By</h2>
      <Marquee>
         <div className="flex gap-36 my-14 w-40 h-14">
         <img src={logo6} alt="" />
        <img src={logo1} alt="" />
        <img className=" bg-lime-300" src={logo5} alt="" />
        <img src={logo2} alt="" />
        <img src={logo4} alt="" />
         </div>
      </Marquee>
    </div>
  );
};

export default MarqueePage;
