import React from "react";
import quote from "../../../assets/icons/quote.svg";
import hp from "../../../assets/images/people1.png";
import lf from "../../../assets/images/people2.png";
import ey from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    { _id: 1, name: "Harry Potter", review: "", img: hp ,location:"Dhaka"},
    { _id: 2, name: "Mr. Luffy", review: "", img: lf ,location:"Chittagong"},
    { _id: 3, name: "Eren Yegar", review: "", img: ey ,location:"Sylhet"},
  ];
  return (
    <section className="my-20 px-12">
      <div className="flex justify-between items-center">
        <div className={`reveal fade-left`}>
          <h3 className={`text-primary text-2xl font-bold uppercase`}>
            Testimonials
          </h3>
          <h2 className={`text-4xl`}>What Our Patients Says</h2>
        </div>

        <div style={{ transform: "rotate(180deg)" }}>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
