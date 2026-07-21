import "@fontsource/league-gothic/400.css";
import changeColors from "./javascript/color.js";

const overlay = document.getElementById("overlay");
if (overlay) {
    overlay.addEventListener("click", changeColors);
}
