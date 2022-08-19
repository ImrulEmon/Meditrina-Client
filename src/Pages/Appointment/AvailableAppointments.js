import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment,setTreatment] = useState({})
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="my-24">
      <h3 className="text-xl text-secondary text-center">
        Appointment date {format(date, "PP")}
      </h3>
      <h4 className="text-center text-[#939393]">Pleae select a service</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 my-8 mx-auto">
        {services.map((service) => (
          <Service key={service._id} 
          service={service}
          setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;
