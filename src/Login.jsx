import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div
      id="login"
      style={{
        backgroundImage: `url("https://elements-cover-images-0.imgix.net/bf05d8c8-bd13-4c2a-9329-aa76deacde7c?auto=compress%2Cformat&fit=max&w=1370&s=2795a8febe3c146bc9b4ca3e065cc496")`,
        color: "green",
      }}
    >
      <h1>Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <button
          type="submit"
          style={{
            backgroundImage: `url("https://elements-cover-images-0.imgix.net/bf05d8c8-bd13-4c2a-9329-aa76deacde7c?auto=compress%2Cformat&fit=max&w=1370&s=2795a8febe3c146bc9b4ca3e065cc496")`,
            color: "green",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
