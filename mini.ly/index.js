const input = document.getElementById("input-link");
const form = document.getElementById("link-form");
const error = document.getElementById("err");

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

form.addEventListener("click", formSubmit);

function formSubmit(e) {
  e.preventdefault();

  console.log("running");
  if (input.value === "") {
    error.innerHTML = "Enter your URL ";

    input.classList.add("border-red");
  } else if (!validUrl(input.value)) {
    error.innerHTML = "Enter a valid URL ";

    input.classList.add("border-red");
  } else {
    error.innerHTML = " ";

    input.classList.remove("border-red");
    alert("Minimized your url");
  }
}
