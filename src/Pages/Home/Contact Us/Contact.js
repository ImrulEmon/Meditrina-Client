import React from "react";
import { useForm } from "react-hook-form";
import makeAppointmentBg from "../../../assets/images/appointment.png";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <section
      className={`flex items-center justify-center py-auto bg-no-repeat bg-cover bg-center bg-fixed mt-24 reveal fade-bottom`}
      style={{ backgroundImage: `url(${makeAppointmentBg})`, height: "90vh" }}
    >
      <div className="min-w-full" id="contact">
        <legend className="py-8 px-1 text-white reveal fade-bottom">
          <h4 className="text-xl text-primary font-bold text-center">
            Contact Us
          </h4>
          <h2 className="text-4xl text-center px-12">Stay Connected With Us</h2>
        </legend>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-control gap-y-5"
          //   style={{ border: "2px solid green" }}
        >
          <input
            block="true"
            className="input input-bordered input-primary w-4/5 lg:w-1/2 mx-auto reveal fade-bottom"
            type="email"
            placeholder="email"
            {...register("email", { required: true })}
          />
          <input
            block="true"
            className="input input-bordered input-primary w-4/5 lg:w-1/2 mx-auto reveal fade-bottom"
            type="text"
            placeholder="subject"
            {...register("subject", { required: true })}
          />
          <textarea
            block="true"
            className="input input-bordered input-primary w-4/5 lg:w-1/2 h-44 mx-auto reveal fade-bottom"
            placeholder="Your Message"
            {...register("message", { required: true })}
          />

          <button
            type="submit"
            className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-fit mx-auto reveal fade-bottom"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
