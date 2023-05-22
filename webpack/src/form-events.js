import { getWeather } from "./api";

function formSubmit() {
  const form = document.getElementById("userForm");
  const formValues = {};
  let location;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(form);

    for (let [key, value] of formData.entries()) {
      formValues[key] = value;
    }
    location = formValues.location;
    console.log(location);
    getWeather(location);
  });
}

export { formSubmit };
