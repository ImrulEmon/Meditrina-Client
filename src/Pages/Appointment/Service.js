import React from "react";

const Service = ({ service,setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card max-w-full bg-base-100 shadow-xl">
      <div className="card-body py-12">
        <h2 className="card-title text-secondary mx-auto">{name}</h2>
        <p className="text-center">
          {slots.length > 1 ? (
            <span className="text-sm text-black">{slots[0]}</span>
          ) : (
            <span className="text-red-600 text-xs">Try another day.</span>
          )}
        </p>
        <p className="text-center">
          {slots.length} {slots.length > 1 ? "slots" : "slot"} available
        </p>
        <div className="card-actions justify-center py-4">
          <label htmlFor="booking-modal" className="btn modal-button btn-secondary text-white font-bold" disabled={slots.length === 0}
            onClick={()=>setTreatment(service)}>Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
