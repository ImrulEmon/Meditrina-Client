import React from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";

const BookingModal = ({ date, treatment,setTreatment }) => {
  const { _id,name, slots } = treatment;
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({});
  // const onSubmit = (data) => console.log(data);
  // console.log(errors);
const handleBooking = event =>{
  event.preventDefault()
  const slot = event.target.slot.value;
  const date = event.target.date.value;
  const name = event.target.name.value;
  const phone = event.target.phone.value;
  const email = event.target.email.value;

  const booking ={
    "slot":slot,
    "date":date,
    "name":name,
    "phone":phone,
    "email":email
  }
 
  console.log(booking);
  setTreatment(null);
}

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-center my-4">
            Booking for <span className="text-secondary">{name}</span>
          </h3>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-5 justify-items-center my-5"
          >
            <input
              disabled
              className="input input-bordered w-full max-w-xs"
              type="text"
              placeholder="Date"
              name="date"
              value={format(date,"PP")}
            />

            <select
              
              placeholder="Slots"
              className="select select-bordered w-full max-w-xs"
              name="slot"
            >
              {slots?.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>

            <input
              
              className="input input-bordered w-full max-w-xs"
              type="text"
              placeholder="Full Name"
              name="name"
            />
            <input
              
              className="input input-bordered w-full max-w-xs"
              type="tel"
              placeholder="Phone Number"
             name="phone"
            />
            <input
            
              className="input input-bordered w-full max-w-xs"
              type="email"
              placeholder="Email"
              name="email"
            />

            <input
              type="submit"
              value="Submit"
              className="btn btn-primary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
