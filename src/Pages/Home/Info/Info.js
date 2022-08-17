import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
        info='12am-12pm'
      ></InfoCard>
      <InfoCard
        cardTitle="Visit Our Location"
        bgClass="bg-accent"
        img={marker}
        info='Medical Road, Kajolshah, Sylhet - 3100'
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us Now"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
        info=" 0821-713487"
      ></InfoCard>
    </div>
  );
};

export default Info;
