/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/accept.js":
/*!***********************!*\
  !*** ./src/accept.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters.js */ "./src/getters.js");
/* harmony import */ var _change_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change.js */ "./src/change.js");


//if nothing passed
// priority   date
// null ------ ""

function acceptChanges(num) {
  var name = "task".concat(num);
  var taskDiv = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getById)(name);
  var taskStorage = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)(name);
  var form = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getById)("form-changes".concat(num));
  var formData = new FormData(form);
  var priority = formData.get("priority");
  var date = formData.get("date");

  //No changes 
  if (priority != null && date != "") {
    (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.setToStorage)(name, [taskStorage[0], taskStorage[1], date, priority, taskStorage[4], taskStorage[5]]);
  }
  //Priority not changed
  else if (priority === null) {
    (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.setToStorage)(name, [taskStorage[0], taskStorage[1], date, taskStorage[3], taskStorage[4], taskStorage[5]]);
  }
  //Date not changed
  else if (date == "") {
    (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.setToStorage)(name, [taskStorage[0], taskStorage[1], taskStorage[2], priority, taskStorage[4], taskStorage[5]]);
    taskDiv.className = "task ".concat(priority);
  }
  (0,_change_js__WEBPACK_IMPORTED_MODULE_1__.cancel)(num);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (acceptChanges);

/***/ }),

/***/ "./src/change.js":
/*!***********************!*\
  !*** ./src/change.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancel": () => (/* binding */ cancel),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters.js */ "./src/getters.js");
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.js */ "./src/create.js");


function editTask(num) {
  var info = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getByClass)("info".concat(num));
  info.innerHTML = "";
  var form = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createPriorityForm)();
  form.setAttribute("id", "form-changes".concat(num));
  var date = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createDateForm)();
  var acceptBtn = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createEl)("input", "");
  acceptBtn.setAttribute("type", "submit");
  acceptBtn.setAttribute("onclick", "acceptChanges(".concat(num, ")"));
  acceptBtn.setAttribute("value", "Accept");
  var buttonDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  var cancelBtn = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createEl)("button", "cancel");
  cancelBtn.setAttribute("onclick", "cancel(".concat(num, ")"));
  buttonDiv.appendChild(acceptBtn);
  buttonDiv.appendChild(cancelBtn);
  buttonDiv.setAttribute("class", "edit-buttons");
  form.appendChild(date);
  form.appendChild(buttonDiv);
  info.appendChild(form);
  info.style.backgroundColor = "lightgrey";
}
function cancel(num) {
  var oldInfo = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getByClass)("info".concat(num));
  var storageTask = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)("task".concat(num));
  var date = storageTask[2];
  var priority = storageTask[3];
  oldInfo.innerHTML = "";
  oldInfo.style.backgroundColor = "transparent";
  var span = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createEl)("span", priority);
  var priorText = document.createTextNode("priority");
  var br = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createEl)("br", "");
  var dateSpan = document.createTextNode("due to ".concat(date));
  oldInfo.appendChild(span);
  oldInfo.appendChild(priorText);
  oldInfo.appendChild(br);
  oldInfo.appendChild(dateSpan);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);


/***/ }),

/***/ "./src/count.js":
/*!**********************!*\
  !*** ./src/count.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCount": () => (/* binding */ getCount),
/* harmony export */   "incrementCount": () => (/* binding */ incrementCount),
/* harmony export */   "reduceCount": () => (/* binding */ reduceCount)
/* harmony export */ });
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters.js */ "./src/getters.js");

function getCount() {
  var obj = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)("count");
  return obj;
}
function incrementCount() {
  var obj = getCount();
  obj = obj + 1;
  (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.setToStorage)("count", obj);
}
function reduceCount() {
  var obj = getCount();
  obj = obj - 1;
  (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.setToStorage)("count", obj);
}


/***/ }),

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDateForm": () => (/* binding */ createDateForm),
/* harmony export */   "createDiv": () => (/* binding */ createDiv),
/* harmony export */   "createEl": () => (/* binding */ createEl),
/* harmony export */   "createOption": () => (/* binding */ createOption),
/* harmony export */   "createPriorityForm": () => (/* binding */ createPriorityForm),
/* harmony export */   "createSvg": () => (/* binding */ createSvg)
/* harmony export */ });
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./src/date.js");

function createEl(type, text) {
  var obj = document.createElement(type);
  var content = document.createTextNode(text);
  obj.appendChild(content);
  return obj;
}
function createDiv() {
  var obj = createEl("div", "");
  return obj;
}
function createSvg(pathD) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 96 960 960");
  svg.setAttribute("width", "24");
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathD);
  svg.appendChild(path);
  return svg;
}
function createOption(value) {
  var obj = createEl("option", value);
  obj.setAttribute("value", value);
  return obj;
}
function createPriorityForm() {
  var form = createEl("form", "");
  var select = createEl("select", "");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
  select.setAttribute("name", "priority");
  var test = createOption("Select priority");
  test.setAttribute("selected", "true");
  test.setAttribute("disabled", "");
  var low = createOption("low");
  low.className = "low";
  var medium = createOption("medium");
  medium.className = "medium";
  var high = createOption("high");
  high.className = "high";
  var critical = createOption("critical");
  critical.className = "critical";
  form.appendChild(select);
  select.appendChild(test);
  select.appendChild(low);
  select.appendChild(medium);
  select.appendChild(high);
  select.appendChild(critical);
  return form;
}
function createDateForm() {
  var dateInput = createEl("input", "");
  dateInput.setAttribute("name", "date");
  dateInput.setAttribute("type", "date");
  (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.setToday)(dateInput);
  return dateInput;
}


/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setToday": () => (/* binding */ setToday)
/* harmony export */ });
var today = new Date();
var yy = today.getFullYear();
var dd = today.getDate();
var mm = today.getMonth() + 1;
if (dd < 10) {
  dd = "0".concat(dd);
}
if (mm < 10) {
  mm = "0".concat(mm);
}
var finalDate = "".concat(yy, "-").concat(mm, "-").concat(dd);
function setToday(domObj) {
  domObj.setAttribute("min", finalDate);
}


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideElement": () => (/* binding */ hideElement),
/* harmony export */   "hideMenu": () => (/* binding */ hideMenu),
/* harmony export */   "listMiddle": () => (/* binding */ listMiddle),
/* harmony export */   "setProjectsOption": () => (/* binding */ setProjectsOption),
/* harmony export */   "showElement": () => (/* binding */ showElement)
/* harmony export */ });
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters.js */ "./src/getters.js");
/* harmony import */ var _newTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTask.js */ "./src/newTask.js");
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.js */ "./src/create.js");



var listMiddle = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getByClass)("list-middle");
function setProjectsOption(whereToDisplay) {
  var storageArray = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)("projects");
  for (var i = 0; i < storageArray.length; i++) {
    var option = (0,_create_js__WEBPACK_IMPORTED_MODULE_2__.createOption)(storageArray[i]);
    whereToDisplay.appendChild(option);
  }
  ;
}
function hideMenu() {
  var mainDiv = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getByClass)("main-absolute");
  var background = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getByClass)("background-color");
  var newTaskForm = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getByClass)("new-task-form");
  mainDiv.style.visibility = "hidden";
  background.style.visibility = "hidden";
  newTaskForm.style.visibility = "hidden";
  var newProjectForm = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getByClass)("new-project-form");
  newProjectForm.style.visibility = "hidden";
  _newTask_js__WEBPACK_IMPORTED_MODULE_1__.form.reset();
}
function showElement(el) {
  var name = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getByClass)(el);
  name.style.visibility = "visible";
}
function hideElement(el) {
  var name = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getByClass)(el);
  name.style.visibility = "hidden";
}


/***/ }),

/***/ "./src/getters.js":
/*!************************!*\
  !*** ./src/getters.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getByClass": () => (/* binding */ getByClass),
/* harmony export */   "getById": () => (/* binding */ getById),
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "getFromStorage": () => (/* binding */ getFromStorage),
/* harmony export */   "setToStorage": () => (/* binding */ setToStorage)
/* harmony export */ });
function getById(id) {
  var obj = document.getElementById(id);
  return obj;
}
function getByClass(objClass) {
  var obj = document.querySelector(".".concat(objClass));
  return obj;
}
function getData(form) {
  var formData = new FormData(form);
  var title = formData.get("title");
  var description = formData.get("description");
  var date = formData.get("date");
  var priority = formData.get("priority");
  var project = formData.get("project");
  return [title, description, date, priority, project, false];
}
function getFromStorage(key) {
  var obj = JSON.parse(localStorage.getItem(key));
  return obj;
}
function setToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}


/***/ }),

/***/ "./src/newTask.js":
/*!************************!*\
  !*** ./src/newTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "newProject": () => (/* binding */ newProject),
/* harmony export */   "newTask": () => (/* binding */ newTask),
/* harmony export */   "removeTask": () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters.js */ "./src/getters.js");
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./count.js */ "./src/count.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation.js */ "./src/validation.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var form = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getById)("task-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
var form2 = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getById)("project-form");
form2.addEventListener("submit", function (e) {
  e.preventDefault();
});

// locale storage proto
//              0       1           2       3       4           5 
// task+num | [name, description, date, priority, project, desc showStatus]
function newTask() {
  return _newTask.apply(this, arguments);
}
function _newTask() {
  _newTask = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var data, count, taskId;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          data = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getData)(form);
          _context.next = 4;
          return (0,_validation_js__WEBPACK_IMPORTED_MODULE_4__["default"])(data[0], data[2], data[3]);
        case 4:
          (0,_count_js__WEBPACK_IMPORTED_MODULE_1__.incrementCount)();
          count = (0,_count_js__WEBPACK_IMPORTED_MODULE_1__.getCount)();
          taskId = "task".concat(count);
          (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.setToStorage)(taskId, data);
          (0,_task_js__WEBPACK_IMPORTED_MODULE_3__.showTask)(_dom_js__WEBPACK_IMPORTED_MODULE_2__.listMiddle, count, data[0], data[1], data[2], data[3], data[4]);
          (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.hideMenu)();
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          alert(_context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _newTask.apply(this, arguments);
}
function newProject() {
  return _newProject.apply(this, arguments);
} //[0 - 5]
function _newProject() {
  _newProject = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var formData, name, storageArray, i;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          formData = new FormData(form2);
          _context2.prev = 1;
          name = formData.get("title");
          storageArray = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)("projects");
          i = 0;
        case 5:
          if (!(i < storageArray.length)) {
            _context2.next = 11;
            break;
          }
          _context2.next = 8;
          return (0,_validation_js__WEBPACK_IMPORTED_MODULE_4__.checkProject)(name, storageArray[i]);
        case 8:
          i++;
          _context2.next = 5;
          break;
        case 11:
          ;
          storageArray.push(name);
          (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.setToStorage)("projects", storageArray);
          (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.hideMenu)();
          _context2.next = 20;
          break;
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](1);
          alert(_context2.t0);
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 17]]);
  }));
  return _newProject.apply(this, arguments);
}
function removeTask(num) {
  var count = (0,_count_js__WEBPACK_IMPORTED_MODULE_1__.getCount)();
  var removingItemName = "task".concat(num);
  var lastItemName = "task".concat(count);
  var taskDomRemove = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getById)(removingItemName);
  var taskDomLast = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getById)(lastItemName);
  if (count != num) {
    var lastTask = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)(lastItemName);
    (0,_task_js__WEBPACK_IMPORTED_MODULE_3__.showTask)(_dom_js__WEBPACK_IMPORTED_MODULE_2__.listMiddle, num, lastTask[0], lastTask[1], lastTask[2], lastTask[3], lastTask[4], lastTask[5]);
    localStorage.removeItem(lastItemName);
    (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.setToStorage)(removingItemName, lastTask);
    console.log(lastTask);
    taskDomLast.remove();
  } else if (count == num) {
    localStorage.removeItem(removingItemName);
  }
  taskDomRemove.remove();
  (0,_count_js__WEBPACK_IMPORTED_MODULE_1__.reduceCount)();
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAllProjects": () => (/* binding */ displayAllProjects),
/* harmony export */   "getSameProjectTasks": () => (/* binding */ getSameProjectTasks),
/* harmony export */   "placeProjectTasks": () => (/* binding */ placeProjectTasks),
/* harmony export */   "showProjectTasks": () => (/* binding */ showProjectTasks)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.js */ "./src/create.js");
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getters.js */ "./src/getters.js");
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./count.js */ "./src/count.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task.js */ "./src/task.js");





function getSameProjectTasks(name) {
  var array = [];
  var count = (0,_count_js__WEBPACK_IMPORTED_MODULE_3__.getCount)();
  for (var i = 1; i <= count; i++) {
    var storageItem = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getFromStorage)("task".concat(i));
    var storageProjectName = storageItem[4];
    if (name == storageProjectName) {
      array.push([storageItem, i]);
    }
  }
  ;
  return array;
}
function placeProjectTasks(name, whereToDisplay) {
  var array = getSameProjectTasks(name);
  for (var i = 0; i < array.length; i++) {
    var arrayBig = array[i];
    var arrayItem = arrayBig[0];
    var arrayNum = arrayBig[1];
    (0,_task_js__WEBPACK_IMPORTED_MODULE_4__.showTask)(whereToDisplay, arrayNum, arrayItem[0], arrayItem[1], arrayItem[2], arrayItem[3], arrayItem[4]);
  }
  if (array.length == 0) {
    var svg = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getByClass)("".concat(name.replaceAll(" ", "-"), " .project-top svg"));
    svg.setAttribute("onclick", "message2()");
    // let emptyCheckArray = getFromStorage("isProjectEmpy");
    // emptyCheckArray.push(true);
    // setToStorage("isProjectEmpy", emptyCheckArray);        
  } //else if(array.length > 0) {
  //     let emptyCheckArray = getFromStorage("isProjectEmpy");
  //     emptyCheckArray.push(false);
  //     setToStorage("isProjectEmpy", emptyCheckArray);   
  // }
}

function showProject(whereToDisplay, name, num) {
  var mainDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  mainDiv.className = "project ".concat(name.replaceAll(" ", "-"));
  var divTop = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  divTop.className = "project-top";
  var divHidden = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  var divH = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  var header = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createEl)("h1", name);
  divH.appendChild(header);
  divTop.appendChild(divH);
  var svgDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  svgDiv.className = "project-icon".concat(num);
  var svgIcon = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createSvg)("M480 711 240 471l56-56 184 184 184-184 56 56-240 240Z");
  svgIcon.setAttribute("onclick", "showProjectTasks(".concat(num, ")"));
  svgDiv.appendChild(svgIcon);
  divTop.appendChild(svgDiv);
  mainDiv.appendChild(divTop);
  mainDiv.appendChild(divHidden);
  divHidden.className = "project-hidden project-hidden".concat(num);
  whereToDisplay.appendChild(mainDiv);
  placeProjectTasks(name, divHidden);
}
function displayAllProjects() {
  var projects = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getFromStorage)("projects");
  var array = [];
  for (var i = 0; i < projects.length; i++) {
    var name = projects[i];
    showProject(_dom_js__WEBPACK_IMPORTED_MODULE_0__.listMiddle, name, i + 1);
    array.push(false);
  }
  (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.setToStorage)("isProjectsShown", array);
}
function showProjectTasks(num) {
  var storageNum = num - 1;
  console.log(storageNum);
  var isProjectsShown = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getFromStorage)("isProjectsShown");
  var isTasksShown = isProjectsShown[storageNum];
  var hidden = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getByClass)("project-hidden".concat(num));
  var icon = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getByClass)("project-icon".concat(num));
  icon.innerHTML = "";
  if (isTasksShown == false) {
    var svgIcon = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createSvg)("m296 711-56-56 240-240 240 240-56 56-184-184-184 184Z");
    svgIcon.setAttribute("onclick", "showProjectTasks(".concat(num, ")"));
    icon.appendChild(svgIcon);
    hidden.style.display = "block";
    isTasksShown = true;
    isProjectsShown[storageNum] = isTasksShown;
    (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.setToStorage)("isProjectsShown", isProjectsShown);
  } else if (isTasksShown == true) {
    var _svgIcon = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createSvg)("M480 711 240 471l56-56 184 184 184-184 56 56-240 240Z");
    _svgIcon.setAttribute("onclick", "showProjectTasks(".concat(num, ")"));
    icon.appendChild(_svgIcon);
    hidden.style.display = "none";
    isTasksShown = false;
    isProjectsShown[storageNum] = isTasksShown;
    (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.setToStorage)("isProjectsShown", isProjectsShown);
  }
}


/***/ }),

/***/ "./src/selectProject.js":
/*!******************************!*\
  !*** ./src/selectProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");

function selectProject(project, whereToDisplay) {
  whereToDisplay.innerHTML = "";
  if (project != undefined) {
    project = project.replaceAll("-", " ");
    (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.placeProjectTasks)(project, whereToDisplay);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectProject);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAllTasks": () => (/* binding */ displayAllTasks),
/* harmony export */   "showDescription": () => (/* binding */ showDescription),
/* harmony export */   "showTask": () => (/* binding */ showTask)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.js */ "./src/create.js");
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getters.js */ "./src/getters.js");
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./count.js */ "./src/count.js");
/* harmony import */ var _change_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change.js */ "./src/change.js");





function showTask(whereToDisplay, count, name, description, date, priority, project) {
  var taskId = "task".concat(count);
  var taskDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  taskDiv.className = "task ".concat(priority);
  taskDiv.setAttribute("id", taskId);
  var taskMainDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  taskMainDiv.className = "task-main";
  var topDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  var svgDone = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createSvg)("M600 816v-80h160v80H600Zm0-320v-80h280v80H600Zm0 160v-80h240v80H600ZM120 416H80v-80h160v-60h160v60h160v80h-40v360q0 33-23.5 56.5T440 856H200q-33 0-56.5-23.5T120 776V416Zm80 0v360h240V416H200Zm0 0v360-360Z");
  svgDone.setAttribute("class", "tick");
  svgDone.setAttribute("onclick", "removeTask(".concat(count, ")"));
  var taskName = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createEl)("p", name);
  topDiv.appendChild(svgDone);
  topDiv.appendChild(taskName);
  if (project !== null) {
    var projectDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    projectDiv.className = "task-project task-project".concat(count);
    var projectP = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createEl)("p", "".concat(project, " project"));
    projectDiv.appendChild(projectP);
    topDiv.appendChild(projectDiv);
  }
  var bottomDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  var para = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createEl)("p", "");
  para.setAttribute("class", "info info".concat(count));
  var span = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createEl)("span", priority);
  var priorText = document.createTextNode("priority");
  var br = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createEl)("br", "");
  var dateSpan = document.createTextNode("due to ".concat(date));
  para.appendChild(span);
  para.appendChild(priorText);
  para.appendChild(br);
  para.appendChild(dateSpan);
  var svgDots = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createSvg)("M480 711 240 471l56-56 184 184 184-184 56 56-240 240Z");
  var svgEdit = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createSvg)("M440 936V696h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160V216h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z");
  svgEdit.setAttribute("onclick", "editTask(".concat(count, ")"));
  var svgDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
  svgDiv.className = "svg-div svg-div".concat(count);
  svgDiv.appendChild(svgEdit);
  svgDiv.appendChild(svgDots);
  bottomDiv.appendChild(para);
  bottomDiv.appendChild(svgDiv);
  taskMainDiv.appendChild(topDiv);
  taskMainDiv.appendChild(bottomDiv);
  taskDiv.appendChild(taskMainDiv);
  if (description != "") {
    svgDots.setAttribute("onclick", "showDescription(".concat(count, ")"));
    svgDots.setAttribute("id", "svgDots".concat(count));
    var descriptionDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)();
    descriptionDiv.setAttribute("tabindex", "-1");
    descriptionDiv.className = "description description".concat(count);
    var descPara = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createEl)("p", description);
    descriptionDiv.appendChild(descPara);

    //descriptionDiv.appendChild(svgEdit);  
    taskDiv.appendChild(descriptionDiv);
  } else if (description === "") {
    svgDots.setAttribute("onclick", "message()");
  }
  whereToDisplay.appendChild(taskDiv);
}
function showDescription(num) {
  var project = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getByClass)("task-project".concat(num));
  var isShownObj = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getFromStorage)("task".concat(num));
  var projectCheck = isShownObj[4];
  var svgDiv = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getByClass)("svg-div".concat(num));
  var svgDots = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getById)("svgDots".concat(num));
  if (projectCheck !== null) {
    var isShown = isShownObj[5];
    var name = "description".concat(num);
    var desc = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getByClass)("".concat(name));
    if (isShown == false) {
      desc.style.display = "flex";
      project.style.display = "none";
      var svgIcon = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createSvg)("m296 711-56-56 240-240 240 240-56 56-184-184-184 184Z");
      svgIcon.setAttribute("onclick", "showDescription(".concat(num, ")"));
      svgDots.remove();
      svgIcon.setAttribute("id", "svgDots".concat(num));
      svgDiv.appendChild(svgIcon);
      isShown = true;
      (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.setToStorage)("task".concat(num), [isShownObj[0], isShownObj[1], isShownObj[2], isShownObj[3], isShownObj[4], isShown]);
    } else if (isShown == true) {
      desc.style.display = "none";
      project.style.display = "inline";
      var _svgIcon = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createSvg)("M480 711 240 471l56-56 184 184 184-184 56 56-240 240Z");
      _svgIcon.setAttribute("onclick", "showDescription(".concat(num, ")"));
      svgDots.remove();
      _svgIcon.setAttribute("id", "svgDots".concat(num));
      svgDiv.appendChild(_svgIcon);
      isShown = false;
      (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.setToStorage)("task".concat(num), [isShownObj[0], isShownObj[1], isShownObj[2], isShownObj[3], isShownObj[4], isShown]);
      (0,_change_js__WEBPACK_IMPORTED_MODULE_4__.cancel)(num);
    }
  } else if (projectCheck == null) {
    var _isShown = isShownObj[5];
    var _name = "description".concat(num);
    var _desc = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getByClass)("".concat(_name));
    if (_isShown == false) {
      _desc.style.display = "inline";
      var _svgIcon2 = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createSvg)("m296 711-56-56 240-240 240 240-56 56-184-184-184 184Z");
      _svgIcon2.setAttribute("onclick", "showDescription(".concat(num, ")"));
      svgDots.remove();
      _svgIcon2.setAttribute("id", "svgDots".concat(num));
      svgDiv.appendChild(_svgIcon2);
      _isShown = true;
      (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.setToStorage)("task".concat(num), [isShownObj[0], isShownObj[1], isShownObj[2], isShownObj[3], isShownObj[4], _isShown]);
    } else if (_isShown == true) {
      _desc.style.display = "none";
      var _svgIcon3 = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__.createSvg)("M480 711 240 471l56-56 184 184 184-184 56 56-240 240Z");
      _svgIcon3.setAttribute("onclick", "showDescription(".concat(num, ")"));
      _svgIcon3.setAttribute("id", "svgDots".concat(num));
      svgDots.remove();
      svgDiv.appendChild(_svgIcon3);
      _isShown = false;
      (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.setToStorage)("task".concat(num), [isShownObj[0], isShownObj[1], isShownObj[2], isShownObj[3], isShownObj[4], _isShown]);
      (0,_change_js__WEBPACK_IMPORTED_MODULE_4__.cancel)(num);
    }
  }
}
function displayAllTasks() {
  var count = (0,_count_js__WEBPACK_IMPORTED_MODULE_3__.getCount)();
  for (var i = 1; i <= count; i++) {
    var storageItem = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getFromStorage)("task".concat(i));
    showTask(_dom_js__WEBPACK_IMPORTED_MODULE_0__.listMiddle, i, storageItem[0], storageItem[1], storageItem[2], storageItem[3], storageItem[4]);
    (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.setToStorage)("task".concat(i), [storageItem[0], storageItem[1], storageItem[2], storageItem[3], storageItem[4], false]);
  }
  ;
}


/***/ }),

/***/ "./src/validation.js":
/*!***************************!*\
  !*** ./src/validation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkProject": () => (/* binding */ checkProject),
/* harmony export */   "checkRequiredStorageSettings": () => (/* binding */ checkRequiredStorageSettings),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "projectDisable": () => (/* binding */ projectDisable)
/* harmony export */ });
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters */ "./src/getters.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");


function checkData(title, date, priority) {
  return new Promise(function (resolve, reject) {
    if (title === "" || date === "" || priority == null) {
      reject("Fill all required fields!");
    } else {
      resolve("");
    }
  });
}
function checkProject(name, compareName) {
  return new Promise(function (resolve, reject) {
    if (name.toLowerCase() === compareName.toLowerCase() || name == "") {
      reject("Can't be blank or you already have that project!");
    } else {
      resolve(name);
    }
  });
}
function projectDisable() {
  var projects = (0,_getters__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)("projects");
  var _loop = function _loop() {
    var name = projects[i];
    var array = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getSameProjectTasks)(name);
    if (array.length == 0) {
      var options = document.querySelectorAll(".nav option");
      options.forEach(function (option) {
        if (option.innerHTML == name) {
          option.style.color = "grey";
          option.setAttribute("disabled", "");
        }
      });
    }
  };
  for (var i = 0; i < projects.length; i++) {
    _loop();
  }
}
function checkRequiredStorageSettings() {
  var count = (0,_getters__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)("count");
  var projects = (0,_getters__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)("projects");
  var isProjectsShown = (0,_getters__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)("isProjectsShown");
  if (count == null) {
    (0,_getters__WEBPACK_IMPORTED_MODULE_0__.setToStorage)("count", 0);
  }
  if (projects == null) {
    (0,_getters__WEBPACK_IMPORTED_MODULE_0__.setToStorage)("projects", []);
  }
  if (isProjectsShown == null) {
    (0,_getters__WEBPACK_IMPORTED_MODULE_0__.setToStorage)("isProjectsShown", []);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkData);


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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property */\r\n*:where(:not(iframe, canvas, img, svg, video):not(svg *)) {\r\n    all: unset;\r\n    display: revert;\r\n  }\r\n \r\n  /* Preferred box-sizing value */\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  /*\r\n    Remove list styles (bullets/numbers)\r\n    in case you use it with normalize.css\r\n  */\r\n  ol, ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  /* For images to not be able to exceed their container */\r\n  img {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  /* Removes spacing between cells in tables */\r\n  table {\r\n    border-collapse: collapse;\r\n  }\r\n  \r\n  /* Revert the 'white-space' property for textarea elements on Safari */\r\n  textarea {\r\n    white-space: revert;\r\n  }\r\n  \r\n  :root {\r\n    --clr-primary:rgb(102, 52, 127);\r\n    --clr-secondary:rgb(158, 71, 132);\r\n    --clr-dark:rgb(55, 48, 107);\r\n    --clr-accent:rgb(210, 118, 133);\r\n\r\n    --clr-low-light: rgb(0, 255, 0, .2);\r\n    --clr-medium-light: rgb(0, 0, 255, .2);\r\n    --clr-high-light: rgb(255, 255, 0, .2);\r\n    --clr-critical-light: rgb(255, 0, 0, .2);\r\n\r\n    --clr-low-strong: rgb(0, 255, 0);\r\n    --clr-medium-strong: rgb(0, 0, 255);\r\n    --clr-high-strong: gold;\r\n    --clr-critical-strong: rgb(255, 0, 0);\r\n\r\n\r\n\r\n\r\n    --fs-average: 1rem;\r\n    --fs-medium: calc(var(--fs-average) * 1.25);\r\n    --fs-big: calc(var(--fs-average) * 1.5rem);\r\n    --fs-large:calc(var(--fs-average) * 2rem); \r\n    \r\n  }\r\n\r\n  .low {\r\n    background-color: var(--clr-low-light);\r\n  }\r\n\r\n  .medium {\r\n    background-color: var(--clr-medium-light);\r\n  }\r\n\r\n  .high {\r\n    background-color: var(--clr-high-light);\r\n  }\r\n\r\n  .critical{\r\n    background-color: var(--clr-critical-light);\r\n  }\r\n\r\n  .critical span {\r\n    color: var(--clr-critical-strong);    \r\n  }\r\n\r\n  .high span {\r\n    color: var(--clr-high-strong);    \r\n  }\r\n\r\n  .medium span {\r\n    color: var(--clr-medium-strong);    \r\n  }\r\n\r\n  .low span {\r\n    color: var(--clr-low-strong);    \r\n  } \r\n\r\n\r\n  .critical .description p  {\r\n      border-bottom:3px solid var(--clr-critical-light);  \r\n      border-inline:3px solid var(--clr-critical-light);\r\n  }\r\n\r\n  \r\n  .high .description p {\r\n    border-bottom:3px solid var(--clr-high-light);  \r\n    border-inline:3px solid var(--clr-high-light);\r\n  }\r\n\r\n  .medium .description p {\r\n    border-bottom:3px solid var(--clr-medium-light);  \r\n    border-inline:3px solid var(--clr-medium-light);\r\n  }\r\n\r\n  .low .description p {\r\n    border-bottom:3px solid var(--clr-low-light);  \r\n    border-inline:3px solid var(--clr-low-light);\r\n  }\r\n\r\n\r\n\r\n\r\n  * {\r\n    font-family: 'Fira Sans', sans-serif;\r\n  }\r\n\r\nmain {\r\n    width: 100%;    \r\n}\r\n\r\n.container  {\r\n    margin-inline: auto; \r\n    width: min(80%, 50rem);\r\n}\r\n\r\n.list {\r\n    \r\n    margin-inline: auto;      \r\n}\r\n\r\n.list-top {\r\n    background-color: var(--clr-dark);\r\n    color: white;\r\n    margin-block: auto;\r\n    \r\n}\r\n\r\n.list-top, .list-middle {\r\n    padding-inline:3%;\r\n}\r\n\r\n.list-middle {\r\n    padding-block: 1rem;\r\n}\r\n\r\n.list-top {\r\n    padding-top: 1rem;\r\n}\r\n\r\n.nav {\r\n    margin-top: 2rem;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n.nav ul{\r\n    display: flex;\r\n    gap: 1rem;\r\n    text-transform: capitalize;    \r\n}\r\n\r\n\r\n\r\n.nav ul li:hover {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid white;\r\n  /* text-decoration: underline; */\r\n}\r\n\r\n.buttons {\r\n    font-size: var(--fs-medium);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap:1rem;\r\n}\r\n\r\n.buttons button {\r\n    background-color: var(--clr-accent);\r\n    padding: .5rem 10%;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.buttons button:hover {\r\n    transition: all .5s ease;\r\n    cursor: pointer;\r\n    background-color: var(--clr-secondary);\r\n    color: var(--clr-dark);\r\n}\r\n\r\n\r\n.task {  \r\n  margin-block: 1rem; \r\n  position: relative;\r\n}\r\n\r\n.task form {\r\n  padding: .5rem;\r\n}\r\n\r\n.task form > *{\r\n  margin: 3%;\r\n}\r\n\r\n.task option, .task select, .task form {\r\n  text-transform: uppercase;\r\n  color: black;\r\n  width: min-content;  \r\n  text-align: center;  \r\n}\r\n\r\n.task select {\r\n  font-weight: 900;\r\n  font-style: italic;  \r\n}\r\n\r\n.task option {\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n\r\n.task input[type=submit] {  \r\n  padding: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n.edit-buttons input {\r\n  margin-right: 5%;\r\n}\r\n\r\n.edit-buttons button {\r\n  margin-inline: auto;\r\n}\r\n\r\n.task input[type=submit], .task button {\r\n  color: black;\r\n  background-color: lightgrey;  \r\n  padding: 2%;\r\n  border-radius: 1rem;\r\n  transition: all .5s ease;\r\n}\r\n\r\n.task input[type=submit]:hover {\r\n  color: white;\r\n  background-color: green;\r\n}\r\n\r\n.task button:hover {\r\n  color: white;\r\n  cursor: pointer;\r\n  background-color: red;\r\n}\r\n\r\n.task form {\r\n  border: 1px solid black;\r\n}\r\n\r\n.task form > *:not(:nth-child(3)) {\r\n  border-bottom: 1px solid black;\r\n  opacity: .7;\r\n}\r\n\r\n.task form > *:not(:nth-child(3)):hover {  \r\n  opacity: 1;\r\n}\r\n\r\n.task-main  {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-content: center;\r\n    justify-content: space-between;    \r\n    font-size:var(--fs-medium);   \r\n    padding: .5rem;\r\n    padding-bottom: 1rem;   \r\n}\r\n\r\n.task-main p{\r\n    display: inline;\r\n}\r\n\r\n.task-main > div {    \r\n    display: flex;    \r\n    align-content: center;\r\n}\r\n\r\n.list-middle {\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.task-main svg:first-child {\r\n    margin-right: .5rem;\r\n}\r\n\r\n\r\n\r\nsvg {\r\n    opacity: .5;\r\n    transition: color .5s ease;\r\n}\r\n\r\nsvg:hover {\r\n    cursor: pointer;\r\n    opacity: 1;    \r\n    transition: color .5s ease;\r\n}\r\n\r\n.tick:hover {\r\n    fill: red;\r\n}\r\n\r\n\r\n.info {    \r\n    font-size: var(--fs-average);  \r\n}\r\n\r\n.info span {\r\n    text-transform: uppercase;\r\n    margin-right: .3rem;\r\n    \r\n}\r\n\r\n.current-slide {\r\n    border-bottom: 2px solid white;\r\n}\r\n\r\n.description {    \r\n    font-size: var(--fs-average);      \r\n    font-style: italic;\r\n    display: none;\r\n    position: relative;\r\n}\r\n\r\n.description p{\r\n  padding: 1rem; \r\n  background-color: white;\r\n  width: 100%;\r\n}\r\n\r\n.description svg {\r\n  position: absolute;\r\n  right: 1%;\r\n  top: 20%;\r\n}\r\n\r\n.new-task-form, .background-color, .new-project-form {  \r\n  position: absolute;  \r\n}\r\n\r\n.background-color {\r\n  \r\n  background-color: black;\r\n  width: 100vw;\r\n  height: calc(100% + 30vh);\r\n  opacity: .7;\r\n}\r\n\r\n\r\n.new-task-form, .background-color, .main-absolute, .new-project-form {\r\n  visibility: hidden;\r\n}\r\n\r\n.nav select:hover {\r\n  color: white;\r\n}\r\n\r\n.new-task-form, .new-project-form, .background-color {\r\n  z-index: 10000;\r\n  \r\n}\r\n\r\n.main-absolute {  \r\n  display: grid;  \r\n  justify-items: center;\r\n  \r\n\r\n}\r\n\r\n\r\nform {   \r\n  color: white;\r\n  display: grid;\r\n}\r\n\r\nfieldset {  \r\n  background-color: var(--clr-secondary);\r\n  padding: 1rem;\r\n  border-radius: 20px;\r\n  margin:1rem;\r\n  text-align:center;\r\n}\r\n\r\nlegend{\r\n  background-color: var(--clr-accent);\r\n  border-radius: 10px;\r\n  padding:.5rem 1rem;\r\n}\r\n\r\ninput[type=text], textarea {\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\ninput[type=submit]:hover, select:hover,input[type=date]:hover,.close-button:hover {\r\n  color: black;  \r\n  cursor: pointer;\r\n  transition: all .5s ease;\r\n}\r\n\r\n\r\ninput[type=submit],.close-button {\r\n  background-color:var(--clr-secondary);\r\n  margin-inline: auto;\r\n  padding: 1rem 3rem;\r\n  border-radius: 50px;\r\n  transition: background-color .5s ease;\r\n}\r\n\r\ninput[type=submit]:hover,.close-button:hover {\r\n  background-color:var(--clr-dark);  \r\n  transition: background-color .5s ease;\r\n}\r\n\r\noption {\r\n  color: black; \r\n}\r\n\r\n.task-project {\r\n  font-style: italic;\r\n  font-size: var(--fs-average);\r\n  position: absolute;\r\n  bottom:0;\r\n  left: 2.5rem;\r\n  \r\n  opacity: .7;\r\n  bottom: 15%;\r\n}\r\n\r\nlegend {\r\n  position: relative;\r\n}\r\n.optional::after {\r\n  content: \"(optional field)\"; \r\n  display: block;\r\n  font-size: .8em;\r\n  font-style: italic;\r\n}\r\n\r\n.svg-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: 1rem;  \r\n}\r\n\r\n.project {\r\n  margin-block:1rem;\r\n  border-bottom:3px solid var(--clr-accent);  \r\n  border-inline:3px solid var(--clr-accent);\r\n}\r\n\r\n\r\n.project-top {\r\n  display: flex;\r\n  justify-content: space-between; \r\n  padding: 1rem; \r\n  font-size: 1.5rem;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  background-color: var(--clr-accent);\r\n}\r\n\r\n\r\n\r\n.project-hidden {\r\n  display: none;\r\n  background-color: white;\r\n  padding-inline: 1rem;\r\n}\r\n\r\n.project-hidden  .task-project {\r\n  visibility: hidden !important;\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width: 31.25rem) {\r\n  :root {\r\n    --fs-average: 1rem;\r\n  } \r\n  .task-main  {    \r\n    flex-direction: column;  \r\n    gap: 2rem;\r\n  }   \r\n\r\n  \r\n  .task-project {     \r\n    top: 30%;\r\n    left: 2.5rem;    \r\n  }\r\n\r\n  .svg-div {\r\n    position: absolute;\r\n    right: 1rem;\r\n    top: 20%;\r\n  }\r\n\r\n  .info {\r\n    padding-left:33px;\r\n  }\r\n  \r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";AACA,4FAA4F;AAC5F;IACI,UAAU;IACV,eAAe;EACjB;;EAEA,+BAA+B;EAC/B;;;IAGE,sBAAsB;EACxB;;EAEA;;;GAGC;EACD;IACE,gBAAgB;EAClB;;EAEA,wDAAwD;EACxD;IACE,cAAc;IACd,eAAe;EACjB;;EAEA,4CAA4C;EAC5C;IACE,yBAAyB;EAC3B;;EAEA,sEAAsE;EACtE;IACE,mBAAmB;EACrB;;EAEA;IACE,+BAA+B;IAC/B,iCAAiC;IACjC,2BAA2B;IAC3B,+BAA+B;;IAE/B,mCAAmC;IACnC,sCAAsC;IACtC,sCAAsC;IACtC,wCAAwC;;IAExC,gCAAgC;IAChC,mCAAmC;IACnC,uBAAuB;IACvB,qCAAqC;;;;;IAKrC,kBAAkB;IAClB,2CAA2C;IAC3C,0CAA0C;IAC1C,yCAAyC;;EAE3C;;EAEA;IACE,sCAAsC;EACxC;;EAEA;IACE,yCAAyC;EAC3C;;EAEA;IACE,uCAAuC;EACzC;;EAEA;IACE,2CAA2C;EAC7C;;EAEA;IACE,iCAAiC;EACnC;;EAEA;IACE,6BAA6B;EAC/B;;EAEA;IACE,+BAA+B;EACjC;;EAEA;IACE,4BAA4B;EAC9B;;;EAGA;MACI,iDAAiD;MACjD,iDAAiD;EACrD;;;EAGA;IACE,6CAA6C;IAC7C,6CAA6C;EAC/C;;EAEA;IACE,+CAA+C;IAC/C,+CAA+C;EACjD;;EAEA;IACE,4CAA4C;IAC5C,4CAA4C;EAC9C;;;;;EAKA;IACE,oCAAoC;EACtC;;AAEF;IACI,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;;AAEtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,0BAA0B;AAC9B;;;;AAIA;EACE,eAAe;EACf,8BAA8B;EAC9B,gCAAgC;AAClC;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,8BAA8B;IAC9B,QAAQ;AACZ;;AAEA;IACI,mCAAmC;IACnC,kBAAkB;IAClB,yBAAyB;AAC7B;;;AAGA;IACI,wBAAwB;IACxB,eAAe;IACf,sCAAsC;IACtC,sBAAsB;AAC1B;;;AAGA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;;AAGA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,2BAA2B;EAC3B,WAAW;EACX,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,8BAA8B;IAC9B,0BAA0B;IAC1B,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,mBAAmB;AACvB;;;;AAIA;IACI,WAAW;IACX,0BAA0B;AAC9B;;AAEA;IACI,eAAe;IACf,UAAU;IACV,0BAA0B;AAC9B;;AAEA;IACI,SAAS;AACb;;;AAGA;IACI,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;;AAEvB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,4BAA4B;IAC5B,kBAAkB;IAClB,aAAa;IACb,kBAAkB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;AACV;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,uBAAuB;EACvB,YAAY;EACZ,yBAAyB;EACzB,WAAW;AACb;;;AAGA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;;AAEhB;;AAEA;EACE,aAAa;EACb,qBAAqB;;;AAGvB;;;AAGA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,sCAAsC;EACtC,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,mCAAmC;EACnC,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;AAC1B;;;AAGA;EACE,qCAAqC;EACrC,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,gCAAgC;EAChC,qCAAqC;AACvC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,kBAAkB;EAClB,QAAQ;EACR,YAAY;;EAEZ,WAAW;EACX,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,2BAA2B;EAC3B,cAAc;EACd,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,yCAAyC;EACzC,yCAAyC;AAC3C;;;AAGA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,mCAAmC;AACrC;;;;AAIA;EACE,aAAa;EACb,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,6BAA6B;AAC/B;;;;;AAKA;EACE;IACE,kBAAkB;EACpB;EACA;IACE,sBAAsB;IACtB,SAAS;EACX;;;EAGA;IACE,QAAQ;IACR,YAAY;EACd;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,QAAQ;EACV;;EAEA;IACE,iBAAiB;EACnB;;AAEF","sourcesContent":["\r\n/* Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property */\r\n*:where(:not(iframe, canvas, img, svg, video):not(svg *)) {\r\n    all: unset;\r\n    display: revert;\r\n  }\r\n \r\n  /* Preferred box-sizing value */\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  /*\r\n    Remove list styles (bullets/numbers)\r\n    in case you use it with normalize.css\r\n  */\r\n  ol, ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  /* For images to not be able to exceed their container */\r\n  img {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  /* Removes spacing between cells in tables */\r\n  table {\r\n    border-collapse: collapse;\r\n  }\r\n  \r\n  /* Revert the 'white-space' property for textarea elements on Safari */\r\n  textarea {\r\n    white-space: revert;\r\n  }\r\n  \r\n  :root {\r\n    --clr-primary:rgb(102, 52, 127);\r\n    --clr-secondary:rgb(158, 71, 132);\r\n    --clr-dark:rgb(55, 48, 107);\r\n    --clr-accent:rgb(210, 118, 133);\r\n\r\n    --clr-low-light: rgb(0, 255, 0, .2);\r\n    --clr-medium-light: rgb(0, 0, 255, .2);\r\n    --clr-high-light: rgb(255, 255, 0, .2);\r\n    --clr-critical-light: rgb(255, 0, 0, .2);\r\n\r\n    --clr-low-strong: rgb(0, 255, 0);\r\n    --clr-medium-strong: rgb(0, 0, 255);\r\n    --clr-high-strong: gold;\r\n    --clr-critical-strong: rgb(255, 0, 0);\r\n\r\n\r\n\r\n\r\n    --fs-average: 1rem;\r\n    --fs-medium: calc(var(--fs-average) * 1.25);\r\n    --fs-big: calc(var(--fs-average) * 1.5rem);\r\n    --fs-large:calc(var(--fs-average) * 2rem); \r\n    \r\n  }\r\n\r\n  .low {\r\n    background-color: var(--clr-low-light);\r\n  }\r\n\r\n  .medium {\r\n    background-color: var(--clr-medium-light);\r\n  }\r\n\r\n  .high {\r\n    background-color: var(--clr-high-light);\r\n  }\r\n\r\n  .critical{\r\n    background-color: var(--clr-critical-light);\r\n  }\r\n\r\n  .critical span {\r\n    color: var(--clr-critical-strong);    \r\n  }\r\n\r\n  .high span {\r\n    color: var(--clr-high-strong);    \r\n  }\r\n\r\n  .medium span {\r\n    color: var(--clr-medium-strong);    \r\n  }\r\n\r\n  .low span {\r\n    color: var(--clr-low-strong);    \r\n  } \r\n\r\n\r\n  .critical .description p  {\r\n      border-bottom:3px solid var(--clr-critical-light);  \r\n      border-inline:3px solid var(--clr-critical-light);\r\n  }\r\n\r\n  \r\n  .high .description p {\r\n    border-bottom:3px solid var(--clr-high-light);  \r\n    border-inline:3px solid var(--clr-high-light);\r\n  }\r\n\r\n  .medium .description p {\r\n    border-bottom:3px solid var(--clr-medium-light);  \r\n    border-inline:3px solid var(--clr-medium-light);\r\n  }\r\n\r\n  .low .description p {\r\n    border-bottom:3px solid var(--clr-low-light);  \r\n    border-inline:3px solid var(--clr-low-light);\r\n  }\r\n\r\n\r\n\r\n\r\n  * {\r\n    font-family: 'Fira Sans', sans-serif;\r\n  }\r\n\r\nmain {\r\n    width: 100%;    \r\n}\r\n\r\n.container  {\r\n    margin-inline: auto; \r\n    width: min(80%, 50rem);\r\n}\r\n\r\n.list {\r\n    \r\n    margin-inline: auto;      \r\n}\r\n\r\n.list-top {\r\n    background-color: var(--clr-dark);\r\n    color: white;\r\n    margin-block: auto;\r\n    \r\n}\r\n\r\n.list-top, .list-middle {\r\n    padding-inline:3%;\r\n}\r\n\r\n.list-middle {\r\n    padding-block: 1rem;\r\n}\r\n\r\n.list-top {\r\n    padding-top: 1rem;\r\n}\r\n\r\n.nav {\r\n    margin-top: 2rem;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n.nav ul{\r\n    display: flex;\r\n    gap: 1rem;\r\n    text-transform: capitalize;    \r\n}\r\n\r\n\r\n\r\n.nav ul li:hover {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid white;\r\n  /* text-decoration: underline; */\r\n}\r\n\r\n.buttons {\r\n    font-size: var(--fs-medium);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap:1rem;\r\n}\r\n\r\n.buttons button {\r\n    background-color: var(--clr-accent);\r\n    padding: .5rem 10%;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.buttons button:hover {\r\n    transition: all .5s ease;\r\n    cursor: pointer;\r\n    background-color: var(--clr-secondary);\r\n    color: var(--clr-dark);\r\n}\r\n\r\n\r\n.task {  \r\n  margin-block: 1rem; \r\n  position: relative;\r\n}\r\n\r\n.task form {\r\n  padding: .5rem;\r\n}\r\n\r\n.task form > *{\r\n  margin: 3%;\r\n}\r\n\r\n.task option, .task select, .task form {\r\n  text-transform: uppercase;\r\n  color: black;\r\n  width: min-content;  \r\n  text-align: center;  \r\n}\r\n\r\n.task select {\r\n  font-weight: 900;\r\n  font-style: italic;  \r\n}\r\n\r\n.task option {\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n\r\n.task input[type=submit] {  \r\n  padding: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n.edit-buttons input {\r\n  margin-right: 5%;\r\n}\r\n\r\n.edit-buttons button {\r\n  margin-inline: auto;\r\n}\r\n\r\n.task input[type=submit], .task button {\r\n  color: black;\r\n  background-color: lightgrey;  \r\n  padding: 2%;\r\n  border-radius: 1rem;\r\n  transition: all .5s ease;\r\n}\r\n\r\n.task input[type=submit]:hover {\r\n  color: white;\r\n  background-color: green;\r\n}\r\n\r\n.task button:hover {\r\n  color: white;\r\n  cursor: pointer;\r\n  background-color: red;\r\n}\r\n\r\n.task form {\r\n  border: 1px solid black;\r\n}\r\n\r\n.task form > *:not(:nth-child(3)) {\r\n  border-bottom: 1px solid black;\r\n  opacity: .7;\r\n}\r\n\r\n.task form > *:not(:nth-child(3)):hover {  \r\n  opacity: 1;\r\n}\r\n\r\n.task-main  {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-content: center;\r\n    justify-content: space-between;    \r\n    font-size:var(--fs-medium);   \r\n    padding: .5rem;\r\n    padding-bottom: 1rem;   \r\n}\r\n\r\n.task-main p{\r\n    display: inline;\r\n}\r\n\r\n.task-main > div {    \r\n    display: flex;    \r\n    align-content: center;\r\n}\r\n\r\n.list-middle {\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.task-main svg:first-child {\r\n    margin-right: .5rem;\r\n}\r\n\r\n\r\n\r\nsvg {\r\n    opacity: .5;\r\n    transition: color .5s ease;\r\n}\r\n\r\nsvg:hover {\r\n    cursor: pointer;\r\n    opacity: 1;    \r\n    transition: color .5s ease;\r\n}\r\n\r\n.tick:hover {\r\n    fill: red;\r\n}\r\n\r\n\r\n.info {    \r\n    font-size: var(--fs-average);  \r\n}\r\n\r\n.info span {\r\n    text-transform: uppercase;\r\n    margin-right: .3rem;\r\n    \r\n}\r\n\r\n.current-slide {\r\n    border-bottom: 2px solid white;\r\n}\r\n\r\n.description {    \r\n    font-size: var(--fs-average);      \r\n    font-style: italic;\r\n    display: none;\r\n    position: relative;\r\n}\r\n\r\n.description p{\r\n  padding: 1rem; \r\n  background-color: white;\r\n  width: 100%;\r\n}\r\n\r\n.description svg {\r\n  position: absolute;\r\n  right: 1%;\r\n  top: 20%;\r\n}\r\n\r\n.new-task-form, .background-color, .new-project-form {  \r\n  position: absolute;  \r\n}\r\n\r\n.background-color {\r\n  \r\n  background-color: black;\r\n  width: 100vw;\r\n  height: calc(100% + 30vh);\r\n  opacity: .7;\r\n}\r\n\r\n\r\n.new-task-form, .background-color, .main-absolute, .new-project-form {\r\n  visibility: hidden;\r\n}\r\n\r\n.nav select:hover {\r\n  color: white;\r\n}\r\n\r\n.new-task-form, .new-project-form, .background-color {\r\n  z-index: 10000;\r\n  \r\n}\r\n\r\n.main-absolute {  \r\n  display: grid;  \r\n  justify-items: center;\r\n  \r\n\r\n}\r\n\r\n\r\nform {   \r\n  color: white;\r\n  display: grid;\r\n}\r\n\r\nfieldset {  \r\n  background-color: var(--clr-secondary);\r\n  padding: 1rem;\r\n  border-radius: 20px;\r\n  margin:1rem;\r\n  text-align:center;\r\n}\r\n\r\nlegend{\r\n  background-color: var(--clr-accent);\r\n  border-radius: 10px;\r\n  padding:.5rem 1rem;\r\n}\r\n\r\ninput[type=text], textarea {\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\ninput[type=submit]:hover, select:hover,input[type=date]:hover,.close-button:hover {\r\n  color: black;  \r\n  cursor: pointer;\r\n  transition: all .5s ease;\r\n}\r\n\r\n\r\ninput[type=submit],.close-button {\r\n  background-color:var(--clr-secondary);\r\n  margin-inline: auto;\r\n  padding: 1rem 3rem;\r\n  border-radius: 50px;\r\n  transition: background-color .5s ease;\r\n}\r\n\r\ninput[type=submit]:hover,.close-button:hover {\r\n  background-color:var(--clr-dark);  \r\n  transition: background-color .5s ease;\r\n}\r\n\r\noption {\r\n  color: black; \r\n}\r\n\r\n.task-project {\r\n  font-style: italic;\r\n  font-size: var(--fs-average);\r\n  position: absolute;\r\n  bottom:0;\r\n  left: 2.5rem;\r\n  \r\n  opacity: .7;\r\n  bottom: 15%;\r\n}\r\n\r\nlegend {\r\n  position: relative;\r\n}\r\n.optional::after {\r\n  content: \"(optional field)\"; \r\n  display: block;\r\n  font-size: .8em;\r\n  font-style: italic;\r\n}\r\n\r\n.svg-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: 1rem;  \r\n}\r\n\r\n.project {\r\n  margin-block:1rem;\r\n  border-bottom:3px solid var(--clr-accent);  \r\n  border-inline:3px solid var(--clr-accent);\r\n}\r\n\r\n\r\n.project-top {\r\n  display: flex;\r\n  justify-content: space-between; \r\n  padding: 1rem; \r\n  font-size: 1.5rem;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  background-color: var(--clr-accent);\r\n}\r\n\r\n\r\n\r\n.project-hidden {\r\n  display: none;\r\n  background-color: white;\r\n  padding-inline: 1rem;\r\n}\r\n\r\n.project-hidden  .task-project {\r\n  visibility: hidden !important;\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width: 31.25rem) {\r\n  :root {\r\n    --fs-average: 1rem;\r\n  } \r\n  .task-main  {    \r\n    flex-direction: column;  \r\n    gap: 2rem;\r\n  }   \r\n\r\n  \r\n  .task-project {     \r\n    top: 30%;\r\n    left: 2.5rem;    \r\n  }\r\n\r\n  .svg-div {\r\n    position: absolute;\r\n    right: 1rem;\r\n    top: 20%;\r\n  }\r\n\r\n  .info {\r\n    padding-left:33px;\r\n  }\r\n  \r\n}\r\n\r\n"],"sourceRoot":""}]);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _newTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTask.js */ "./src/newTask.js");
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getters.js */ "./src/getters.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date.js */ "./src/date.js");
/* harmony import */ var _change_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change.js */ "./src/change.js");
/* harmony import */ var _accept_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accept.js */ "./src/accept.js");
/* harmony import */ var _selectProject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectProject.js */ "./src/selectProject.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validation.js */ "./src/validation.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }












(0,_validation_js__WEBPACK_IMPORTED_MODULE_10__.checkRequiredStorageSettings)();
// Setting today's date
var today = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getByClass)("dateToday");
(0,_date_js__WEBPACK_IMPORTED_MODULE_4__.setToday)(today);
window.newTask = _newTask_js__WEBPACK_IMPORTED_MODULE_1__.newTask;
window.newProject = _newTask_js__WEBPACK_IMPORTED_MODULE_1__.newProject;
window.showDescription = _task_js__WEBPACK_IMPORTED_MODULE_8__.showDescription;
window.showElement = _dom_js__WEBPACK_IMPORTED_MODULE_3__.showElement;
window.hideElement = _dom_js__WEBPACK_IMPORTED_MODULE_3__.hideElement;
window.removeTask = _newTask_js__WEBPACK_IMPORTED_MODULE_1__.removeTask;
window.editTask = _change_js__WEBPACK_IMPORTED_MODULE_5__["default"];
window.cancel = _change_js__WEBPACK_IMPORTED_MODULE_5__.cancel;
window.acceptChanges = _accept_js__WEBPACK_IMPORTED_MODULE_6__["default"];
window.showProjectTasks = _project_js__WEBPACK_IMPORTED_MODULE_9__.showProjectTasks;
window.selectProject = _selectProject_js__WEBPACK_IMPORTED_MODULE_7__["default"];
window.hideMenu = _dom_js__WEBPACK_IMPORTED_MODULE_3__.hideMenu;
var nav = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getByClass)("nav");
var slideUl = document.getElementById("slide-ul").children;
var dropdownLi = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getById)("dropdown-li");
var value;
nav.addEventListener("click", function (e) {
  var name = e.target.innerHTML;
  if (name == "all") {
    var _iterator = _createForOfIteratorHelper(slideUl),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var task = _step.value;
        task.setAttribute("class", "");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    e.target.setAttribute("class", "current-slide");
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.listMiddle.innerHTML = "";
    (0,_task_js__WEBPACK_IMPORTED_MODULE_8__.displayAllTasks)();
  } else if (name == "projects") {
    var _iterator2 = _createForOfIteratorHelper(slideUl),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _task = _step2.value;
        _task.setAttribute("class", "");
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    e.target.setAttribute("class", "current-slide");
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.listMiddle.innerHTML = "";
    (0,_project_js__WEBPACK_IMPORTED_MODULE_9__.displayAllProjects)();
  } else if (e.target.id == "dropdown-projects") {
    var _iterator3 = _createForOfIteratorHelper(slideUl),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _task2 = _step3.value;
        _task2.setAttribute("class", "");
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    dropdownLi.setAttribute("class", "current-slide");
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.listMiddle.innerHTML = "";
    var dropdownForm = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getById)("dropdown-projects");
    dropdownForm.addEventListener("input", function () {
      value = dropdownForm.options[dropdownForm.selectedIndex].value;
    });
    (0,_selectProject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value, _dom_js__WEBPACK_IMPORTED_MODULE_3__.listMiddle);
  }
});
var newTaskBtn = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getById)("newTaskBtn");
var newProjectBtn = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getById)("newProjectBtn");
var mainDiv = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getByClass)("main-absolute");
var background = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getByClass)("background-color");
var newTaskForm = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getByClass)("new-task-form");
var newProjectForm = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getByClass)("new-project-form");

//Message when task doesn't have a description
function message() {
  alert("Sorry no description for that task :(");
}
;
window.message = message;
function message2() {
  alert("That's an empy project!");
}
window.message2 = message2;

//Shows new task form
newTaskBtn.addEventListener("click", function () {
  mainDiv.style.visibility = "visible";
  background.style.visibility = "visible";
  newTaskForm.style.visibility = "visible";
});

//Hides everything
background.addEventListener("click", function () {
  mainDiv.style.visibility = "hidden";
  background.style.visibility = "hidden";
  newTaskForm.style.visibility = "hidden";
  newProjectForm.style.visibility = "hidden";
});

//Shows new project form
newProjectBtn.addEventListener("click", function () {
  mainDiv.style.visibility = "visible";
  background.style.visibility = "visible";
  newProjectForm.style.visibility = "visible";
});

//Displaying all tasks
(function () {
  (0,_task_js__WEBPACK_IMPORTED_MODULE_8__.displayAllTasks)();
})();

//Adding projects to dom select form inputs
var projectSelect = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getByClass)("select-project-nav-select");
var formSelect = (0,_getters_js__WEBPACK_IMPORTED_MODULE_2__.getByClass)("select-project-form");
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.setProjectsOption)(projectSelect);
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.setProjectsOption)(formSelect);
(0,_validation_js__WEBPACK_IMPORTED_MODULE_10__.projectDisable)();
})();

/******/ })()
;
//# sourceMappingURL=bundlee54552332fca99cc75ac.js.map