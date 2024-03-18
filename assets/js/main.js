/*NAV*/
const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu-icon");
const menuItems = document.querySelectorAll(".mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.classList.add("open");
}
function close() {
  mainMenu.classList.remove("open");
}
/* ------------------------------------------------------------------------------------- */
// DARK THEME
function isDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

// Function to toggle theme based on the color scheme
function toggleTheme() {
  if (isDarkMode()) {
    toDark();
  } else {
    toLight();
  }
}

function theme() {
  const root = getComputedStyle(document.documentElement);
  const textColor = root.getPropertyValue("--text-color");
  const bgColor = root.getPropertyValue("--background");
  if (bgColor === "#fff" && textColor === "#000") {
    toDark();
  } else {
    toLight();
  }
}

function toDark() {
  const boxes = document.getElementsByClassName("card");
  const roles = document.getElementsByClassName("role");
  const sunElements = document.getElementsByClassName("sun");
  const moonElements = document.getElementsByClassName("moon");
  const githubLinks = document.getElementsByClassName("github-link-logo");
  const supportLinks = document.getElementsByClassName("support-link-logo");
  document.documentElement.style.setProperty("--text-color", "#fff");
  document.documentElement.style.setProperty("--background", "rgb(26, 27, 30)");
  document.documentElement.style.setProperty("--bullet", "#fff");

  for (const sunElement of sunElements) {
    sunElement.style.display = "block";
  }
  for (const moonElement of moonElements) {
    moonElement.style.display = "none";
  }
  for (const githubLink of githubLinks) {
    githubLink.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0,0,256,256"
    width="24px"
    height="24px"
  >
    <g
      fill="#ffffff"
      fill-rule="nonzero"
      stroke="none"
      stroke-width="1"
      stroke-linecap="butt"
      stroke-linejoin="miter"
      stroke-miterlimit="10"
      stroke-dasharray=""
      stroke-dashoffset="0"
      font-family="none"
      font-weight="none"
      font-size="none"
      text-anchor="none"
      style="mix-blend-mode: normal"
    >
      <g transform="scale(10.66667,10.66667)">
        <path
          d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"
        ></path>
      </g>
    </g>
  </svg>`;
  }
  for (const supportLink of supportLinks) {
    supportLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="25px" height="25px"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,8c9.389,0 17,7.611 17,17c0,9.389 -7.611,17 -17,17c-9.389,0 -17,-7.611 -17,-17c0,-9.389 7.611,-17 17,-17zM30.864,31.93c0.312,-0.959 1.778,-10.521 1.958,-12.405c0.055,-0.571 -0.126,-0.95 -0.478,-1.119c-0.427,-0.205 -1.06,-0.103 -1.794,0.162c-1.007,0.363 -13.876,5.827 -14.62,6.144c-0.704,0.3 -1.372,0.626 -1.372,1.1c0,0.333 0.198,0.52 0.742,0.714c0.566,0.202 1.992,0.634 2.834,0.866c0.811,0.224 1.734,0.03 2.251,-0.292c0.548,-0.341 6.878,-4.576 7.332,-4.947c0.454,-0.371 0.816,0.104 0.445,0.476c-0.371,0.371 -4.715,4.588 -5.289,5.172c-0.696,0.709 -0.202,1.443 0.265,1.738c0.533,0.336 4.365,2.906 4.943,3.319c0.578,0.412 1.162,0.599 1.699,0.599c0.536,-0.001 0.817,-0.708 1.084,-1.527z"></path></g></g></svg>`;
  }
  for (const box of boxes) {
    box.style.background = "rgb(26, 27, 30)";
    box.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
  }
  for (const role of roles) {
    const textColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--text-color");
    role.style.color = textColor;
  }
}

function toLight() {
  const boxes = document.getElementsByClassName("card");
  const roles = document.getElementsByClassName("role");
  const moonElements = document.getElementsByClassName("moon");
  const sunElements = document.getElementsByClassName("sun");
  const githubLinks = document.getElementsByClassName("github-link-logo");
  const supportLinks = document.getElementsByClassName("support-link-logo");
  document.documentElement.style.setProperty("--text-color", "#000");
  document.documentElement.style.setProperty("--background", "#fff");
  document.documentElement.style.setProperty("--bullet", "#000");
  for (const moonElement of moonElements) {
    moonElement.style.display = "block";
  }
  for (const sunElement of sunElements) {
    sunElement.style.display = "none";
  }
  for (const githubLink of githubLinks) {
    githubLink.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="25px"
    height="25px"
  >
    <path
      d="M25,8c9.389,0,17,7.611,17,17c0,7.548-4.921,13.944-11.729,16.163c0.002-0.006,0.005-0.016,0.005-0.016	s-1.147-0.538-1.123-1.498c0.027-1.056,0-3.521,0-4.426c0-1.553-0.983-2.654-0.983-2.654s7.709,0.087,7.709-8.139	c0-3.174-1.659-4.825-1.659-4.825s0.871-3.388-0.302-4.825c-1.315-0.142-3.669,1.257-4.675,1.91c0,0-1.593-0.653-4.244-0.653	c-2.65,0-4.244,0.653-4.244,0.653c-1.005-0.653-3.36-2.052-4.675-1.91c-1.173,1.437-0.302,4.825-0.302,4.825	s-1.659,1.652-1.659,4.825c0,8.226,7.709,8.139,7.709,8.139s-0.777,0.878-0.946,2.168c-0.538,0.183-1.33,0.408-1.969,0.408	c-1.673,0-2.946-1.626-3.412-2.379c-0.46-0.742-1.403-1.365-2.281-1.365c-0.579,0-0.861,0.289-0.861,0.62	c0,0.331,0.811,0.562,1.347,1.175c1.129,1.294,1.109,4.202,5.132,4.202c0.437,0,1.329-0.107,2-0.198	c-0.004,0.916-0.005,1.882,0.009,2.447c0.024,0.96-1.123,1.498-1.123,1.498s0.003,0.01,0.005,0.016C12.921,38.944,8,32.548,8,25	C8,15.611,15.611,8,25,8z"
    />
  </svg>`;
  }
  for (const supportLink of supportLinks) {
    supportLink.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="25px"
    height="25px"
  >
    <path
      d="M25,8c9.389,0,17,7.611,17,17s-7.611,17-17,17S8,34.389,8,25S15.611,8,25,8z M30.864,31.93	c0.312-0.959,1.778-10.521,1.958-12.405c0.055-0.571-0.126-0.95-0.478-1.119c-0.427-0.205-1.06-0.103-1.794,0.162	c-1.007,0.363-13.876,5.827-14.62,6.144c-0.704,0.3-1.372,0.626-1.372,1.1c0,0.333,0.198,0.52,0.742,0.714	c0.566,0.202,1.992,0.634,2.834,0.866c0.811,0.224,1.734,0.03,2.251-0.292c0.548-0.341,6.878-4.576,7.332-4.947	c0.454-0.371,0.816,0.104,0.445,0.476c-0.371,0.371-4.715,4.588-5.289,5.172c-0.696,0.709-0.202,1.443,0.265,1.738	c0.533,0.336,4.365,2.906,4.943,3.319c0.578,0.412,1.162,0.599,1.699,0.599C30.316,33.456,30.597,32.749,30.864,31.93z"
    />
  </svg>`;
  }
  for (const box of boxes) {
    box.style.background = "#ffffff83";
    box.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  }
  for (const role of roles) {
    const textColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--role-color");
    role.style.color = textColor;
  }
}
document.addEventListener("DOMContentLoaded", toggleTheme);
/* ------------------------------------------------------------------------------------- */
// Scroll button
const scrollToTopBtn = document.getElementsByClassName("goTop")[0];

window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
/* ------------------------------------------------------------------------------------- */
