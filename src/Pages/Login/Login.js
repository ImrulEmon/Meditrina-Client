import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "./Firebase/firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (user) {
    console.log(user);
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl text-center text-accent font-bold">
            Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="user@mail.com"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required:{
                    value:true,
                    message:"Email Required"
                  },
                  pattern: {
                    value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message:'Invalid email!'
                  }
                })}
              />
              <label class="label">
              {errors.email?.type==="required" &&  <span class="label-text-alt text-red-700">{errors.email.message}</span>}
              {errors.email?.type==="pattern" &&  <span class="label-text-alt text-red-700">{errors.email.message}</span>}
               
              </label>
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required:{
                    value:true,
                    message:"Password Required"
                  },
                  minLength: {
                    value:6,
                    message:'Must be 6 character long or longer'
                  }
                })}
              />
              <label class="label">
              {errors.password?.type==="required" &&  <span class="label-text-alt text-red-700">{errors.password.message}</span>}
              {errors.password?.type==="minLength" &&  <span class="label-text-alt text-red-700">{errors.password.message}</span>}
               
              </label>
            </div>
            <input className="btn btn-accent text-white font-bold w-full" type="submit" value="Login"/>
          </form>
          <div className="divider">OR</div>

          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline glass text-accent hover:btn-accent hover:text-white"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
