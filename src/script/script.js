let body = document.getElementById("body");
let mode = document.getElementById("mode");
let imagePreview = document.getElementById("imagePreview");
let mpi = document.getElementById("mainPreviewImage");
let cp = document.getElementById("closePreview");
let rajesh = document.getElementById("rajesh");
let about = document.getElementById("about");
let works = document.getElementById("works");
let skills = document.getElementById("skills");
let contact = document.getElementById("contact");
let about2 = document.getElementById("about2");
let works2 = document.getElementById("works2");
let skills2 = document.getElementById("skills2");
let contact2 = document.getElementById("contact2");
let spacer = document.getElementById("spacer");
let card = document.getElementsByClassName("card");
let logo = document.getElementById("logo");
var fc = document.getElementById("fc");
var elem = document.documentElement;


mode.addEventListener("click", () => {
  if (mode.innerText == "Dark") {
    body.classList.remove("lightMode");
    body.classList.add("darkMode");
    mode.innerHTML = "Light";
    rajesh.src = "./src/images/rajesh2.png";
    for (let i = 0; i < card.length; i++) {
      card[i].style.boxShadow = "0px 2px 10px var(--secondary-color)";
    }
    logo.style.filter = "invert(0)";
  } else {
    body.classList.remove("darkMode");
    body.classList.add("lightMode");
    mode.innerHTML = "Dark";
    rajesh.src = "./src/images/rajesh.png";
    for (let i = 0; i < card.length; i++) {
      card[i].style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
    }
    logo.style.filter = "invert(1)";
  }
});

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  mode.click();
}

document.addEventListener("scroll", () => {
  let st = window.scrollY;
  let bh = document.body.offsetHeight;
  let wh = window.innerHeight;
  let top = (st / (bh - wh)) * 100;

  if (top < 25) {
    about2.classList.add("active");
    works2.classList.remove("active");
  }

  if (top > 25 && top < 50) {
    about2.classList.remove("active");
    works2.classList.add("active");
    skills2.classList.remove("active");
  }

  if (top > 50 && top < 80) {
    works2.classList.remove("active");
    skills2.classList.add("active");
    contact2.classList.remove("active");
  }
  if (top > 80) {
    skills2.classList.remove("active");
    contact2.classList.add("active");
  }

  if (window.innerWidth > 599) {
    rajesh.style.top = -1 * st * 0.09 + "px";
  }
  
});

fc.addEventListener("click", () => {
  if (fc.innerHTML == "FS") {
    openFullscreen();
    fc.innerHTML = "CS";
  } else {
    closeFullscreen();
    fc.innerHTML = "FS";
  }
});

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}


cp.addEventListener("click",()=>{
  imagePreview.classList.remove("openPreview");

})

function imageInspector(element) {
  mpi.src = element.src;
  imagePreview.classList.add("openPreview");
}
