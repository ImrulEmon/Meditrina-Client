import React from "react";
import treatment from "../../../assets/images/treatment.png";
import "./ServiceBanner.css";

const ServiceBanner = () => {
  return (
    <div
      class="hero min-w-screen min-h-screen bg-img bg-fixed bg-no-repeat bg-cover bg-center bg-opacity-25"
    >
      <div class="hero-content flex-col lg:flex-row">
        <img src={treatment} class="rounded-lg shadow-2xl" alt="service-img" />
        <div className="lg:px-8 lg:text-justify">
          <h1 class="text-3xl font-bold leading-10">
            Exceptional Dental Care, On Your Terms
          </h1>
          <p class="py-6">
            Specially designed for patients seeking dentistry abroad, we offer
            you bespoke expertise at a price that is unbelievably affordable. We
            have an elite team of carefully selected specialists from all fields
            of dentistry.
          </p>
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
