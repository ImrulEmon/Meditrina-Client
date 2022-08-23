import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from "./Firebase/firebase.init";
import Spinner from "../../Components/Spinner/Spinner";
import { toast } from 'react-toastify';
import Loading from "../../Components/Spinner/Loading";

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
      auth
    );

    if (error) {
        return (
          <div>
           {
            toast.error(`${error.message}`)
           }
          </div>
        );
      }
      if (sending) {
        return <div>
            {
                toast.info('Wait 2 minutes before requesting again')
            }
            <Spinner />
        </div>
      }

  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl text-center text-accent font-bold">
            Reset Password
          </h2>

          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="user@mail.com"
                className="input input-bordered w-full max-w-xs text-center my-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className="btn btn-accent text-white font-bold w-full my-2"
              type="submit"
              value="Send"
              onClick={async () => {
                await sendPasswordResetEmail(email);
                toast.success('Password rest email sent')
              }}
            >Reset password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
