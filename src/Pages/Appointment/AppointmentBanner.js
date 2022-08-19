import React from "react";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = (
      <p>
        Appointment Schedule{" "}
        <span className="font-bold text-neutral">{format(date, "PP")}</span>.
      </p>
    );
  }

  return (
    <div
      className="hero min-h-screen bg-cover bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl object-contain w-full h-full object-center lg:w-full lg:h-full "
          alt="chair"
        />
        <div className="card bg-secondary text-white shadow-2xl">
          <div className="">
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
              footer={footer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
