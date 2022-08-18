import React from "react";
import treatment from "../../../assets/images/treatment.png";
import "./ServiceBanner.css";

const ServiceBanner = () => {
  return (
    <div
      className="hero min-w-screen min-h-screen bg-img bg-fixed bg-no-repeat bg-cover bg-center bg-opacity-25"
    >
      <div className="hero-content flex-col lg:flex-row">
        <img src={treatment} className={`rounded-lg shadow-2xl reveal fade-left`} alt="service-img" />
        <div className={`lg:px-8 lg:text-justify`}>
          <h1 className={`text-3xl font-bold leading-10 reveal fade-right`}>
            Exceptional Dental Care, On Your Terms
          </h1>
          <p className={`py-6 reveal fade-right`}>
            Specially designed for patients seeking dentistry abroad, we offer
            you bespoke expertise at a price that is unbelievably affordable. We
            have an elite team of carefully selected specialists from all fields
            of dentistry.
          </p>
          <button className={`btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary reveal fade-right`}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
