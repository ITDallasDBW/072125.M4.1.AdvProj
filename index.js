// service_3e7crk8
// template_vacr329
// pk dexkIPyatsyDD7suz

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
        "service_3e7crk8",
      "template_vacr329",
      event.target,
      "dexkIPyatsyDD7suz"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert("The email service is unavailable");
    });
}
