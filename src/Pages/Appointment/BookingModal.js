import React from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Login/Firebase/firebase.init";
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment,setTreatment }) => {
  const { _id,name, slots } = treatment;
  const [user] = useAuthState(auth);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({});
  // const onSubmit = (data) => console.log(data);
  // console.log(errors);
  const formattedDate=format(date,"PP");
const handleBooking = event =>{
  event.preventDefault()
  const slot = event.target.slot.value;
  const phone = event.target.phone.value;
  // const date = event.target.date.value;
  // const name = event.target.name.value;
  // const email = event.target.email.value;
  const booking ={

    treatmentId:_id,
    treatment:name,
    date:formattedDate,
    slot,
    patient:user.email,
    patientName:user.displayName,
    phone:phone
  }
  console.log(booking);

  fetch("http://localhost:5000/booking", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(booking),
  })
  .then((res) => res.json())
  .then(data=>{
    //to close the modal
    setTreatment(null)
  })
 
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
              value={format(date,"PP")||''}
            />

            <select
              
              placeholder="Slots"
              className="select select-bordered w-full max-w-xs"
              name="slot"
            >
              {slots?.map((slot,index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>

            <input
              disabled
              value={user?.displayName||''}
              className="input input-bordered w-full max-w-xs"
              type="text"
              placeholder="Full Name"
              name="name"
              required
            />
            <input
              required
              className="input input-bordered w-full max-w-xs"
              type="tel"
              placeholder="Phone Number"
             name="phone"
            />
            <input
              disabled
              value={user?.email||''}
              className="input input-bordered w-full max-w-xs"
              type="email"
              placeholder="Email"
              name="email"
            />

            <input
              type="submit"
              value="Submit"
              className="btn btn-primary w-full max-w-xs bg-gradient-to-l from-secondary to-primary text-white text-bold"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
