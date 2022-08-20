import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "./Firebase/firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../../Components/Spinner/Loading";

const Login = () => {

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let SignInError;

  if (loading || gLoading) {
    return <Loading />;
  }

  if (error || gError) {
    SignInError = (
      <p className="text-red-600">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  if (user || gUser) {
    // console.log(gUser || user);
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl text-center text-accent font-bold">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="user@mail.com"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Invalid email!",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-700">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-700">
                    {errors.email.message}
                  </span>
                )}
                
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 character long or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-700">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-700">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {SignInError}
            <input
              className="btn btn-accent text-white font-bold w-full my-2"
              type="submit"
              value="Login"
            />
          </form>
          <small className="text-center mt-2">
            New to MediTrina?{" "}
            <Link className="text-secondary font-bold" to="/signup">
              Create New Account
            </Link>
          </small>
          <div className="divider">OR</div>

          <button
            onClick={() => signInWithGoogle()}
            className="text-accent hover:btn-accent hover:text-white btn btn-outline font-bold"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
