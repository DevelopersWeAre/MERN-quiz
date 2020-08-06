import React from "react";
import { useForm } from "react-hook-form";

// Stylesheet
import "./Register.css";

const Register = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <div className="style__Paper Register__container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="Register__input-container">
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
            <span className="style__Error-text Register__error-position">
              {errors.email.message}
            </span>
          )}
        </label>

        <label className="Register__input-container">
          Password
          <input
            name="password"
            ref={register({
              required: "Required",
            })}
          />
          {errors.password && (
            <span className="style__Error-text Register__error-position">
              {errors.password.message}
            </span>
          )}
        </label>
        <div className="Register__button">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
