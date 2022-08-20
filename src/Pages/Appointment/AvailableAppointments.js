import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Loading from "../../Components/Spinner/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState({});
  useEffect(() => {
    fetch("https://meditrina-server.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-24">
      <h3 className="text-xl text-secondary text-center my-4">
        Appointment date {format(date, "PP")}
      </h3>
      <h4 className="text-center text-[#939393]">Pleae select a service</h4>
      {loading ? (
        <div class="flex items-center justify-center ">
          <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 my-8 mx-auto">
          {services?.map((service) => (
            <Service
              key={service._id}
              service={service}
              setTreatment={setTreatment}
            ></Service>
          ))}
        </div>
      )}
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
