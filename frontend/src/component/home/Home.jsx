import React from "react";
import bganime from "../../animeFiles/Animation - 1727156764097.json";
import freeship from "../../animeFiles/Animation - 1727158563881.json";
import mapVdp from "../../assets/Screenshot (620).png";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center h-[70vh] ">
        <main className="flex flex-col items-center justify-center md:items-start text-center md:text-left mt-10 md:mt-0 md:mr-20  text-gray-800">
          <h1 className="font-poppins text-lg md:text-xl uppercase ">
            Welcome to
          </h1>
          <h1 className="font-kanit text-4xl md:text-6xl font-bold text-[#ff6347]">
            Baava Crackers
          </h1>

          <Player autoplay loop src={bganime} className="w-40 md:w-64" />
        </main>

        <div className="flex justify-center items-center mt-10 md:mt-0">
          <img
            src="https://cdnl.iconscout.com/lottie/free/thumb/free-rocket-4627745-3843183.gif"
            alt="Crackers Animation"
            className="w-40 md:w-52 "
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:from-teal-500 hover:to-blue-600"
        onClick={()=>navigate('/quick-shopping')}>
          Purchase Now
        </button>
      </div>
      <div className="mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-11 bg-white p-6 ">
         
          <h1 className="font-poppins text-lg md:text-xl font-semibold text-gray-400 text-center">
            FREE Home Delivery for Vadipatti Town
            <Player autoplay loop src={freeship} className="w-40 md:w-52" />
          </h1>

  
          <img
            src={mapVdp}
            alt="Vadipatti Map"
            className="w-full md:w-[50vh] rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
