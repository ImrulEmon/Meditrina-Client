import React from "react";

const InfoCard = ({img,cardTitle,bgClass,info,at}) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl py-6 ${bgClass}
    reveal
    fade-left
    `}
    >
      <figure className="lg:pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title font-bold">{cardTitle}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default InfoCard;
