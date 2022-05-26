<<<<<<< HEAD
var loginFormEl = document.querySelector(".login-form");
var signupFormEl = document.querySelector(".signup-form");

const loginFormHandler = async (event) => {
  event.preventDefault();
=======
const loginFormHandler = async (event) => {
    event.preventDefault();
>>>>>>> a72d6637c82b31cb5fbf71992f8ee6c678b85fcc

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
        alert('Failed to log in.');
}
    }
  };


document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
