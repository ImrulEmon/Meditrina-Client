import React from "react";
import chair from "../../assets/images/chair.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div class="hero min-h-screen px-4 hero-bg bg-no-repeat bg-cover bg-center bg-fixed">
    <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl w-72 object-contain w-full h-full object-center lg:w-full lg:h-full" />
      <div>
        <h1 class="text-5xl font-bold">
          {" "}
          <blockquote>
            Let food be thy medicine and medicine be thy food.
          </blockquote>
        </h1>
        <p class="py-6 pr-20">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
          a id nisi.
        </p>
        <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
          Get Started
        </button>
      </div>
    </div>
    </div> 
  );
};

export default Banner;


{/* */}