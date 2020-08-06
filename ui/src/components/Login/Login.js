import React from "react";
import { useForm } from "react-hook-form";

// Stylesheet
import "./Login.css";

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <div className="style__Paper Login__container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="Login__input-container">
          Email
          <input
            name="email"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="style__Error-text Login__error-position">
              {errors.email.message}
            </span>
          )}
        </label>

        <label className="Login__input-container">
          Password
          <input
            name="password"
            ref={register({
              required: "Required",
            })}
          />
          {errors.password && (
            <span className="style__Error-text Login__error-position">
              {errors.password.message}
            </span>
          )}
        </label>
        <div className="Login__button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
