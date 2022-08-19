import React from "react";
import Service from "./Service";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceBanner from "./ServiceBanner";

const Services = () => {
  const services = [
    {
      _id: 11,
      name: "Fluoride Treatment",
      description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
      img: fluoride,
      ac: "reveal fade-left",
    },
    {
      _id: 22,
      name: "Cavity Filling",
      description: "A cavity filling brings back the functionality and appearance of the tooth. Basically, a passage is sort of a filling except for the within of the tooth, deep within the roots, where the nerve and blood supply is.",
      img: cavity,
      ac: "reveal fade-bottom",
    },
    {
      _id: 33,
      name: "Teeth Whitening",
      description: "Best Teeth Whitening At LASER DENTAL In Uttara. We Utilise World's Most Advanced Teeth Whitening System. ",
      img: whitening,
      ac: "reveal fade-right",
    },
  ];
  return (
    <div className={`my-32 px-12`}>
      <div className={`text-center reveal fade-bottom`}>
        <h3 className={`text-primary font-bold text-xl landing-7 uppercase`}>
          Our Services
        </h3>
        <h2 className="text-4xl landing-10 ">Services We Provide</h2>
      </div>

      {/* Service */}

      <div
        className={`grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10`}
      >
        {/*  container mx-auto */}
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>

      {/* Service Banner */}

      <div className="my-24">
        <ServiceBanner />
      </div>
    </div>
  );
};

export default Services;
