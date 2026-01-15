import "../styles/base.css";
import "../styles/header.css";
import "../styles/main.css";
import "../styles/footer.css";

// HTML components
import headerHTML from "../components/header.html";
import mainHTML from "../components/main.html";
import footerHTML from "../components/footer.html";

// Images
import headerImage from "../assets/images/edited.jpg";
import footerImage from "../assets/images/flip.jpg";

// Inject HTML
const app = document.querySelector("#app");
app.innerHTML = headerHTML + mainHTML + footerHTML;

// Inject images
// document.querySelector("#header-image").insertAdjacentHTML(
//   "afterbegin",
//   `<img src="${headerImage}" alt="Life Barinua">`
// );


document.querySelector("#footer-image").insertAdjacentHTML(
  "afterbegin",
  `<img src="${footerImage}" alt="Life Barinua">`
);


  // In your main JS (e.g., index.js)
import '@fortawesome/fontawesome-free/css/all.min.css';
