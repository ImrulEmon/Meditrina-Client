import React from "react";
import Service from "./Service";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceBanner from "./ServiceBanner";

const Services = () => {
    const services=[
        {_id:1,name:"Fluoride Treatment",description:'',img:fluoride},
        {_id:2,name:"Cavity Filling",description:'',img:cavity},
        {_id:3,name:"Teeth Whitening",description:'',img:whitening}
    ]
  return (
    <div className="my-32">
      <div className="text-center">
        <h3 className="text-primary font-bold text-xl landing-7 uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl landing-10 ">Services We Provide</h2>
      </div>

      {/* Service */}

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
      {/*  container mx-auto */}
        {
            services.map(service=><Service key={service._id}
            service={service}></Service>)
        }
      </div>

    {/* Service Banner */}

    <div className="my-24">
    <ServiceBanner/>
    </div>

    </div>
  );
};

export default Services;
