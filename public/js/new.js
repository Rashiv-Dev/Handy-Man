const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="company-title"]').value;
  const body = document.querySelector('textarea[name="company-body"]').value;

  await fetch(`/api/company`, {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("#new-company-form")
  .addEventListener("submit", newFormHandler);
