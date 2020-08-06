import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

// Services
import { USER_SERVICE } from "../../services";

// Stylesheet
import "./Login.css";

const Login = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = values =>
    USER_SERVICE.POST_LOGIN(values)
      .then(res => res)
      .catch(e => e);

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
        <div className="Login__button-container">
          <button type="submit">Login</button>
          <span>
            Don't have an account? <Link to="register">Register</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
