import React from "react";
import "./Service.css";

const Service = ({service}) => {

    const {name,description,img,ac}=service;

  return (
    <div className={`card lg:max-w-lg bg-base-100 shadow-xl mx-auto ${ac}`}>
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
