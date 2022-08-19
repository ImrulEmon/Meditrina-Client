import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card max-w-full bg-base-100 shadow-xl">
      <div class="card-body py-12">
        <h2 class="card-title text-secondary mx-auto">{name}</h2>
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
        <div class="card-actions justify-center py-4">
          <button
            disabled={slots.length === 0}
            class="btn btn-secondary text-white font-bold"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
