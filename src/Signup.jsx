import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div
      id="signup"
      style={{
        backgroundImage: `url("https://elements-cover-images-0.imgix.net/bf05d8c8-bd13-4c2a-9329-aa76deacde7c?auto=compress%2Cformat&fit=max&w=1370&s=2795a8febe3c146bc9b4ca3e065cc496")`,
        color: "red",
      }}
    >
      <h1>Sign Up</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type="password" />
        </div>
        <button
          type="submit"
          style={{
            backgroundImage: `url("https://elements-cover-images-0.imgix.net/bf05d8c8-bd13-4c2a-9329-aa76deacde7c?auto=compress%2Cformat&fit=max&w=1370&s=2795a8febe3c146bc9b4ca3e065cc496")`,
            color: "red",
          }}
        >
          Signup
        </button>
      </form>
    </div>
  );
}
