import React from "react";
import "./Banner.css";
import { useState } from "react";

const Banner = () => {
  const [word, setWord] = useState("Inixindo Bandung");

  const handleClick = () => {
    setWord((prevWord) =>
      prevWord === "Inixindo Bandung" ? "Maybank" : "Inixindo Bandung"
    );
  };

  return (
    <div className="hero bg-base-200 h-full">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full md:w-1/2 order-2 lg:order-1 p-4 text-left">
          <h1 className="text-5xl font-bold">
            Continous Learning Keep Up To Date With
            <strong className="text-primary"> {word}</strong>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary" onClick={handleClick}>
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 order-1 lg:order-2 flex justify-center p-4">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl animation"
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
