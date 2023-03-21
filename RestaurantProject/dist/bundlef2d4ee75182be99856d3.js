/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");


function makeContact(mainBlock) {
  mainBlock.innerHTML = " ";
  var section = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("section", "");
  var ceo = (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createFood)("Jeremie Damon Pennick", "CEO AND OWNER OF OUR CHAIN", "https://yt3.googleusercontent.com/ytc/AL5GRJV-ISm0037sG74VN-K0ToSWaeuvQjyCCqcotIRs=s900-c-k-c0x00ffffff-no-rj", "+380 95 35 54 21");
  // let ceoAdd =createEl("p",);
  // ceo.appendChild(ceoAdd);

  var chef = (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createFood)("Beeba and Boba Ramsey", "Our chef family", "https://www.essence.com/wp-content/uploads/2017/04/ayesha-curry-600x800-900x600.jpg", "coocker@email.com");
  // let chefAdd =createEl("p");
  // chef.appendChild(chefAdd);

  var manager = (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createFood)("Rosmary James", "Our main manager", "https://pbs.twimg.com/profile_images/1574088378257182721/Ocjbkn0j_400x400.jpg", "figgybaby.com");
  // let managerAdd =createEl("p");
  // manager.appendChild(managerAdd);

  section.appendChild(ceo);
  section.appendChild(chef);
  section.appendChild(manager);
  mainBlock.appendChild(section);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");

function makeHome(mainBlock) {
  mainBlock.innerHTML = " ";
  var mainHeading = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("h1", "Benny's Barbeque Shelter");
  mainBlock.appendChild(mainHeading);
  var section1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("section", "");
  var s1h = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("h2", "About us");
  var s1p = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam assumenda rem nisi ipsam sunt? Consectetur, pariatur? Consequuntur vel voluptatem totam placeat. Cupiditate dolore expedita obcaecati est accusantium doloribus magni? Officia laborum eveniet corrupti quia quibusdam illo? Et nam odit ab vitae maiores assumenda aut, non tenetur perspiciatis molestiae possimus quia.");
  section1.appendChild(s1h);
  section1.appendChild(s1p);
  var section2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("section", "");
  var s2h = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("h2", "Hours");
  var s2ul = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("ul", "");
  var li1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("li", "Sunday: 8am - 8pm");
  var li2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("li", "Monday: 6am - 6pm");
  var li3 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("li", "Tuesday: 6am - 6pm");
  var li4 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("li", "Wednesday: 6am - 6pm");
  var li5 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("li", "Thursday: 6am - 10pm");
  var li6 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("li", "Friday: 6am - 10pm");
  var li7 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("li", "Saturday: 8am - 10pm");
  s2ul.appendChild(li1);
  s2ul.appendChild(li2);
  s2ul.appendChild(li3);
  s2ul.appendChild(li4);
  s2ul.appendChild(li5);
  s2ul.appendChild(li6);
  s2ul.appendChild(li7);
  section2.appendChild(s2h);
  section2.appendChild(s2ul);
  var section3 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("section", "");
  var s3h = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("h2", "Location");
  var s3p = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("p", "123 Chicken Drive, Bennyville, Babe");
  section3.appendChild(s3h);
  section3.appendChild(s3p);
  mainBlock.appendChild(section1);
  mainBlock.appendChild(section2);
  mainBlock.appendChild(section3);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHome);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEl": () => (/* binding */ createEl)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




var home = document.getElementById("home");
var menu = document.getElementById("menu");
var contact = document.getElementById("contact");
home.style.backgroundColor = "rgb(247, 241, 229)";
function createEl(type, text) {
  var obj = document.createElement(type);
  var content = document.createTextNode(text);
  obj.appendChild(content);
  return obj;
}
var nav = document.getElementById("nav");
var contentBlock = document.getElementById("content");
nav.addEventListener("click", function (e) {
  var page = e.target.innerHTML.toLowerCase();
  if (page === "home") {
    (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])(contentBlock);
    home.style.backgroundColor = "rgb(247, 241, 229)";
    menu.style.backgroundColor = "rgb(231, 177, 10)";
    contact.style.backgroundColor = "rgb(231, 177, 10)";
  } else if (page === "menu") {
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])(contentBlock);
    home.style.backgroundColor = "rgb(231, 177, 10)";
    menu.style.backgroundColor = "rgb(247, 241, 229)";
    contact.style.backgroundColor = "rgb(231, 177, 10)";
  } else if (page === "contact") {
    (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])(contentBlock);
    home.style.backgroundColor = "rgb(231, 177, 10)";
    menu.style.backgroundColor = "rgb(231, 177, 10)";
    contact.style.backgroundColor = "rgb(247, 241, 229)";
  }
});


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFood": () => (/* binding */ createFood),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");

function createFood(header, content, src, extra) {
  var mainDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", "");
  var foodDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", "");
  mainDiv.appendChild(foodDiv);
  foodDiv.setAttribute("class", "food");
  var textDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", "");
  var h = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("h2", header);
  var p = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("p", content);
  var extraP = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("p", extra);
  textDiv.appendChild(h);
  textDiv.appendChild(p);
  textDiv.appendChild(extraP);
  var img = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("img", "");
  img.setAttribute("src", src);
  foodDiv.appendChild(textDiv);
  foodDiv.appendChild(img);
  return foodDiv;
}
function createHeader(content) {
  var div = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", "");
  div.setAttribute("class", "header");
  var h = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("h2", content.toUpperCase());
  div.appendChild(h);
  return div;
}
;
function makeMenu(mainBlock) {
  mainBlock.innerHTML = " ";
  var header1 = createHeader("burgers");
  var header2 = createHeader("wings");
  var mainHeading = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("h1", "Benny's menu");
  mainBlock.appendChild(mainHeading);
  var burger1 = createFood("SIGNATURE BBQ BURGER", "House-smoked pulled pork, cheddar, coleslaw, fried pickles, Memphis Seasoning, and KC BBQ Sauce. Served with your choice of 1 side.", "https://smokeybones.com/wp-content/uploads/2022/05/bacon-cheeseburger.jpg", "");
  var burger2 = createFood("BACON CHEESEBURGER", "Bacon, American cheese, lettuce, tomato, red onion, and pickles.Served with your choice of 1 side.", "https://smokeybones.com/wp-content/uploads/2022/05/Good-Seed-veggie-burger.jpg", "");
  var burger3 = createFood("MORNING GLORY BURGER", "Fried egg, bacon, American cheese, and chipotle ketchup. Served with your choice of 1 side.", "https://smokeybones.com/wp-content/uploads/2022/05/morning-glory-burger.jpg", "");
  var section1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("section", "");
  section1.appendChild(burger1);
  section1.appendChild(burger2);
  section1.appendChild(burger3);
  var wings1 = createFood("BONELESS WINGS", "HCrispy boneless wings tossed in your choice of sauce or dry rub. Get them the Bones Way, dusted with our house seasoning and drizzled with sweet bbq glaze.", "https://www.foodnetwork.com/content/dam/images/food/fullset/2019/2/19/1/FN_Air-Fryer-Chicken-Wings-H_s4x3.jpg", "");
  var wings2 = createFood("JUMBO WINGS", "Giant, juicy, rubbed, golden fried wings tossed in your choice of sauce or dry rub. Get them the Bones Way, dusted with our house seasoning and drizzled with sweet bbq glaze.", "https://www.seriouseats.com/thmb/zNzv_FjRF4hEbpawVKJDC-JU0g8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-buffalo-wings-oven-fried-wings-recipe-hero-dcc412b6e26444b4a2112d4402f039ae.JPG", "");
  var wings3 = createFood("JUMBO SMOKED WINGS", "House smoked wings tossed in your choice of sauce or dry rub. Get them the Bones Way, dusted with our house seasoning and drizzled with sweet bbq glaze.", "https://rec-origin-graphics.s3.amazonaws.com/0_GraphicsRecipes/5607_4k.jpg", "");
  var section2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createEl)("section", "");
  section2.appendChild(wings1);
  section2.appendChild(wings2);
  section2.appendChild(wings3);
  mainBlock.appendChild(header1);
  mainBlock.appendChild(section1);
  mainBlock.appendChild(header2);
  mainBlock.appendChild(section2);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeMenu);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! background.avif */ "./src/background.avif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property */\r\n*:where(:not(iframe, canvas, img, svg, video):not(svg *)) {\r\n    all: unset;\r\n    display: revert;\r\n  }\r\n \r\n  /* Preferred box-sizing value */\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  /*\r\n    Remove list styles (bullets/numbers)\r\n    in case you use it with normalize.css\r\n  */\r\n  ol, ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  /* For images to not be able to exceed their container */\r\n  img {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  /* Removes spacing between cells in tables */\r\n  table {\r\n    border-collapse: collapse;\r\n  }\r\n  \r\n  /* Revert the 'white-space' property for textarea elements on Safari */\r\n  textarea {\r\n    white-space: revert;\r\n  }\r\n\r\n\r\n  :root {\r\n    --fs-default: 1rem;\r\n    --fs-medium: calc(var(--fs-default) * 1.5);\r\n    --fs-large: calc(var(--fs-default) * 2);\r\n\r\n    --clr-accent: rgb(247, 241, 229);\r\n    --clr-primary: rgb(231, 177, 10);\r\n    --clr-secondary: rgb(137, 129, 33);\r\n    --clr-secondary-dark: rgb(76, 75, 22);\r\n\r\n  }\r\n\r\n  \r\n\r\n  html {\r\n    width: 100%;     \r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");    \r\n }\r\n\r\nbody {    \r\n  text-align: center;\r\n    font-family: 'Oswald', sans-serif;   \r\n    margin-inline: auto;    \r\n    background-color: var(--clr-secondary-dark);\r\n    width: min(80%, 50rem);    \r\n}\r\n\r\nnav {\r\n  background-color: var(--clr-secondary);\r\n}\r\n\r\nnav ul {\r\n    font-size: var(--fs-large);\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    gap:2rem;\r\n    padding: 2rem;\r\n    \r\n}\r\n\r\nnav ul li {\r\n    background-color: var(--clr-primary);\r\n    border-radius: 20px;\r\n    padding: 1rem 3rem;\r\n    transition: all .5s ease;\r\n}\r\n\r\nnav ul li:hover {\r\n  cursor: pointer;\r\n  background-color: var(--clr-accent);\r\n  color: var(--clr-secondary-dark);\r\n  transition: all .5s ease;\r\n}\r\n\r\n\r\n#content {  \r\n  gap:1rem;\r\n  display: flex;\r\n  justify-content: center;  \r\n  flex-direction: column;  \r\n}\r\n\r\n#content h1, #content h2 {\r\n  color:var(--clr-secondary);\r\n  font-weight: 300;\r\n  font-size: var(--fs-large);\r\n}\r\n\r\n#content > * {\r\n  padding: 2rem;\r\n  margin: var(--fs-default) 0; \r\n}\r\n\r\n\r\n\r\n#content h1 {\r\n  color:var(--clr-primary);\r\n  font-weight: 700;\r\n  font-style: italic;\r\n}\r\n\r\n#content p, #content ul li {\r\n  font-size: var(--fs-medium);\r\n  color: var(--clr-accent);\r\n}\r\n\r\n\r\n.header  {\r\n  background-color: var(--clr-accent);\r\n  color: black;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.food {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin: 2rem;\r\n\r\n}\r\n\r\n\r\n.food > *{\r\n  flex-basis: 100%;\r\n  \r\n}\r\n\r\n.food img {\r\n  width: 50%;\r\n  border-radius: 1100vw;\r\n}\r\n\r\nsection > *:not(:first-child)  {\r\n  border-top: 3px groove var(--clr-primary);\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";AACA,4FAA4F;AAC5F;IACI,UAAU;IACV,eAAe;EACjB;;EAEA,+BAA+B;EAC/B;;;IAGE,sBAAsB;EACxB;;EAEA;;;GAGC;EACD;IACE,gBAAgB;EAClB;;EAEA,wDAAwD;EACxD;IACE,cAAc;IACd,eAAe;EACjB;;EAEA,4CAA4C;EAC5C;IACE,yBAAyB;EAC3B;;EAEA,sEAAsE;EACtE;IACE,mBAAmB;EACrB;;;EAGA;IACE,kBAAkB;IAClB,0CAA0C;IAC1C,uCAAuC;;IAEvC,gCAAgC;IAChC,gCAAgC;IAChC,kCAAkC;IAClC,qCAAqC;;EAEvC;;;;EAIA;IACE,WAAW;IACX,yDAAwC;CAC3C;;AAED;EACE,kBAAkB;IAChB,iCAAiC;IACjC,mBAAmB;IACnB,2CAA2C;IAC3C,sBAAsB;AAC1B;;AAEA;EACE,sCAAsC;AACxC;;AAEA;IACI,0BAA0B;IAC1B,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;IACR,aAAa;;AAEjB;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;EACE,eAAe;EACf,mCAAmC;EACnC,gCAAgC;EAChC,wBAAwB;AAC1B;;;AAGA;EACE,QAAQ;EACR,aAAa;EACb,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;;;AAIA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,wBAAwB;AAC1B;;;AAGA;EACE,mCAAmC;EACnC,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;;AAGA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;;AAEd;;;AAGA;EACE,gBAAgB;;AAElB;;AAEA;EACE,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,yCAAyC;AAC3C","sourcesContent":["\r\n/* Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property */\r\n*:where(:not(iframe, canvas, img, svg, video):not(svg *)) {\r\n    all: unset;\r\n    display: revert;\r\n  }\r\n \r\n  /* Preferred box-sizing value */\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  /*\r\n    Remove list styles (bullets/numbers)\r\n    in case you use it with normalize.css\r\n  */\r\n  ol, ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  /* For images to not be able to exceed their container */\r\n  img {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  /* Removes spacing between cells in tables */\r\n  table {\r\n    border-collapse: collapse;\r\n  }\r\n  \r\n  /* Revert the 'white-space' property for textarea elements on Safari */\r\n  textarea {\r\n    white-space: revert;\r\n  }\r\n\r\n\r\n  :root {\r\n    --fs-default: 1rem;\r\n    --fs-medium: calc(var(--fs-default) * 1.5);\r\n    --fs-large: calc(var(--fs-default) * 2);\r\n\r\n    --clr-accent: rgb(247, 241, 229);\r\n    --clr-primary: rgb(231, 177, 10);\r\n    --clr-secondary: rgb(137, 129, 33);\r\n    --clr-secondary-dark: rgb(76, 75, 22);\r\n\r\n  }\r\n\r\n  \r\n\r\n  html {\r\n    width: 100%;     \r\n    background-image: url(\"background.avif\");    \r\n }\r\n\r\nbody {    \r\n  text-align: center;\r\n    font-family: 'Oswald', sans-serif;   \r\n    margin-inline: auto;    \r\n    background-color: var(--clr-secondary-dark);\r\n    width: min(80%, 50rem);    \r\n}\r\n\r\nnav {\r\n  background-color: var(--clr-secondary);\r\n}\r\n\r\nnav ul {\r\n    font-size: var(--fs-large);\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    gap:2rem;\r\n    padding: 2rem;\r\n    \r\n}\r\n\r\nnav ul li {\r\n    background-color: var(--clr-primary);\r\n    border-radius: 20px;\r\n    padding: 1rem 3rem;\r\n    transition: all .5s ease;\r\n}\r\n\r\nnav ul li:hover {\r\n  cursor: pointer;\r\n  background-color: var(--clr-accent);\r\n  color: var(--clr-secondary-dark);\r\n  transition: all .5s ease;\r\n}\r\n\r\n\r\n#content {  \r\n  gap:1rem;\r\n  display: flex;\r\n  justify-content: center;  \r\n  flex-direction: column;  \r\n}\r\n\r\n#content h1, #content h2 {\r\n  color:var(--clr-secondary);\r\n  font-weight: 300;\r\n  font-size: var(--fs-large);\r\n}\r\n\r\n#content > * {\r\n  padding: 2rem;\r\n  margin: var(--fs-default) 0; \r\n}\r\n\r\n\r\n\r\n#content h1 {\r\n  color:var(--clr-primary);\r\n  font-weight: 700;\r\n  font-style: italic;\r\n}\r\n\r\n#content p, #content ul li {\r\n  font-size: var(--fs-medium);\r\n  color: var(--clr-accent);\r\n}\r\n\r\n\r\n.header  {\r\n  background-color: var(--clr-accent);\r\n  color: black;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.food {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin: 2rem;\r\n\r\n}\r\n\r\n\r\n.food > *{\r\n  flex-basis: 100%;\r\n  \r\n}\r\n\r\n.food img {\r\n  width: 50%;\r\n  border-radius: 1100vw;\r\n}\r\n\r\nsection > *:not(:first-child)  {\r\n  border-top: 3px groove var(--clr-primary);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/background.avif":
/*!*****************************!*\
  !*** ./src/background.avif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "background.avif";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundlef2d4ee75182be99856d3.js.map