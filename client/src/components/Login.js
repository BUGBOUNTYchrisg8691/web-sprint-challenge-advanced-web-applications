import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialFormValues = {
  username: "",
  password: "",
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [formValues, setFormValues] = useState(initialFormValues);
  const { push } = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", formValues)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        push("/bubbles");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          placeholder="Enter Username"
        />
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
