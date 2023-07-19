import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      style={{
        backgroundImage: `url("https://elements-cover-images-0.imgix.net/bf05d8c8-bd13-4c2a-9329-aa76deacde7c?auto=compress%2Cformat&fit=max&w=1370&s=2795a8febe3c146bc9b4ca3e065cc496")`,
        color: "green",
      }}
    >
      Logout
    </a>
  );
}
