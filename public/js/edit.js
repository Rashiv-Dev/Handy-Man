const companyId = document.querySelector('input[name="company-id"]').value;

const editFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="company-title"]').value;
  const body = document.querySelector('textarea[name="company-body"]').value;

  await fetch(`/api/company/${companyId}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.replace("/dashboard");
};

const deleteClickHandler = async function () {
  await fetch(`/api/company/${companyId}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("#edit-company-form")
  .addEventListener("submit", editFormHandler);
document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteClickHandler);
