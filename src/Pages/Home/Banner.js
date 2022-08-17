import React from "react";
import chair from "../../assets/images/chair.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero min-h-screen hero-bg bg-no-repeat bg-cover bg-center bg-fixed px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl w-72 object-contain w-full h-full object-center lg:w-full lg:h-full"
          alt="hero-img-chair"
        />
        <div>
          <h1 className="text-5xl font-bold">
            {" "}
            <blockquote>
              Let food be thy medicine and medicine be thy food.
            </blockquote>
          </h1>
          <p className="py-6 pr-20">
            A healthy diet includes eating and drinking enough of the right
            foods to provide your body with the nutrients needed to function
            properly and maintain health as it is intended to do.
          </p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* */
}
