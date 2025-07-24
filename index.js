let contrastToggle = false;
const scaleFactor = 1/20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape"); //querySelectorAll returns ARRAY
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !==0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px )`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

// service_3e7crk8
// template_vacr329
// pk dexkIPyatsyDD7suz

function contact(event) {
  //event is what gets passed in by onSubmit
  event.preventDefault(); //forms reset the console after submitting. This prevents that.
  const loading = document.querySelector(".modal__overlay--loading"); //loading state
  const success = document.querySelector(".modal__overlay--success"); //successfully emailed state
  loading.classList += " modal__overlay--visible"; //the loading state is triggered by the onSubmit event.

  emailjs //this is the js that sends my account info and the form info to emailjs
    .sendForm(
      // "service_3e7crk8", //my account info
      "template_vacr329", //my emailjs template to send me
      event.target, //all the formatted data I pass to emailjs
      "dexkIPyatsyDD7suz"
    )
    .then(() => {
      //so AFTER all the info gets sent successfully, loading state is unloaded and success state loads
      loading.classList.remove("modal__overlay--visible"); //unload loading
      success.classList += " modal__overlay--visible"; //show success
    })
    .catch(() => {
      //BUT, if anything goes wrong anywhere, this unloads loading state and tells user it didn't work.
      loading.classList.remove("modal__overlay--visible");
      alert("The email service is unavailable");
    });
}

//toggle modal
//by targeting <body>...adding class "modal__open"
//make .modal visibility:hidden until needed. Then visibility:visible when needed

let isModalOpen = false; //modal is closed
//**Why is it important for this to start false? Why not just declare it? */

function toggleModal() {
  //call fn by clicking some button
  if (isModalOpen) {
    //if isModalOpen is true (modal=open)
    isModalOpen = false; //then make it false (modal=closed) by doing this:
    return document.body.classList.remove("modal--open"); //close modal by removing .class from <body> and exit
  }
  //otherwise/else...isModalOpen is ALREADY false (modal=closed). So...
  isModalOpen = true; //open it (modal=open) by doing this:
  document.body.classList += " modal--open"; //add .class to <body>
}
//toggle function
//if it's open, close it and exit
//if it's not open, open it

//call function
//if switch is on
//turn it off
//if switch is off
//turn it on
