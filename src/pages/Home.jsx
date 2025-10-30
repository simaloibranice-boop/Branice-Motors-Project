import React from "react";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();

    return(
        <div
        className="min-h-screen bg-blue-500 text-yellow-400 flex flex-col items-center justify-center p-6"
        >
        
            <div className="relative z-10"></div>
        {/* Home content goes here */}
        
          <h1 className="text-4xl font-bold mb-4 text-yellow-400">
            Welcome to Branice & Motors.
         </h1>  
         <div className="flex justify-center gap-4 mb-4">
            <button
            onClick={() => navigate("/login")}
            className="bg-yellow-400 text-black px-5 py-2 rounded-lg shadow-md"
            >
                Get Started
            </button>

            <button
            onClick={() => navigate("/about")}
            className="bg-yellow-400 text-black px-5 py-2 rounded-lg shadow-md"
            >
                Learn More
            </button>
          </div>
          <p className="text-yellow-200 max-w-xl text-center mt-4">
            Branice & Motors connects you to trusted dealers and genuine 
            spare parts for all types of locomotive like;
              -cars
              -trucks
              -lorries
              -tuktuks
              -motorbikes/cycles
              -bicycles.
             Get started today to find exactly what you need. 
          </p>
         </div>
    );
}

export default Home;

