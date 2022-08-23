import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Login/Firebase/firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);
  console.log(appointments);
  return (
    <div>
      <p> My appointments : {appointments?.length}</p>

      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment._id} className="hover">
                <th>{index + 1}</th>
                <td>{appointment?.patientName}</td>
                <td>{appointment?.date}</td>
                <td>{appointment?.slot}</td>
                <td>{appointment?.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
