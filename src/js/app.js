
import * as functions from "./modules/functions.js";
import * as sideMenu from "./modules/side-menu.js";
import * as phoneinput from "./modules/phoneinput.js";
import * as slider from "./modules/slider.js";;
import * as popup from "./modules/popup.js";


document.addEventListener('DOMContentLoaded', function () { //dom is ready
  functions.isWebp();
  sideMenu.sideMenu();
  phoneinput.phoneInput();
  slider.renderSlider();
  popup.renderPopup();
});




