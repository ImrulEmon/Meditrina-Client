import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:mx-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatem dolore vel, vitae temporibus, tempore tempora natus cum non
          reprehenderit, eaque consectetur nesciunt. Eveniet, perferendis? Quod
          aspernatur similique dolorum maxime exercitationem voluptas est.
          Accusantium, deleniti a esse suscipit officiis facere?
        </p>
        <div className="flex items-center justify-start my-4">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt={review.name}/>
            </div>
          </div>
          <div>
            <h4 className="text-xl">{review.name}</h4>
            <p className="">{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
