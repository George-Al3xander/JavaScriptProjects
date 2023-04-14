/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "noDuplicats": () => (/* binding */ noDuplicats)
/* harmony export */ });
function mergeSort(array) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    for (var x = i + 1; x <= array.length; x++) {
      if (item > array[x]) {
        array[i] = array[x];
        array[x] = item;
        item = array[i];
        mergeSort(array.slice(i));
      }
    }
  }
  return array;
}
function noDuplicats(array) {
  var tempArray = [];
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    var item2 = array[i + 1];
    if (item != item2) {
      tempArray.push(item);
    }
  }
  return tempArray;
}
function sort(array) {
  array = mergeSort(array);
  return noDuplicats(array);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sort);


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort */ "./src/sort.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var prettyPrint = function prettyPrint(node) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var isLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, "".concat(prefix).concat(isLeft ? '│   ' : '    '), false);
  }
  console.log("".concat(prefix).concat(isLeft ? '└── ' : '┌── ').concat(node.data));
  if (node.left !== null) {
    prettyPrint(node.left, "".concat(prefix).concat(isLeft ? '    ' : '│   '), true);
  }
};
var Node = /*#__PURE__*/_createClass(function Node(data) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  _classCallCheck(this, Node);
  this.data = data;
  this.left = left;
  this.right = right;
});
var Tree = /*#__PURE__*/function () {
  //Dont forget to create "root" attribute  
  function Tree(array) {
    _classCallCheck(this, Tree);
    this.array = array;
    this.root = null;
    this.tempArray = [];
  }
  _createClass(Tree, [{
    key: "buildTree",
    value: function buildTree() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.array;
      var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length - 1;
      arr = (0,_sort__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
      if (left > right) return null;
      var mid = Math.floor((left + right) / 2);
      this.root = new Node(arr[mid]);
      this.root.left = new Tree().buildTree(arr, left, mid - 1);
      this.root.right = new Tree().buildTree(arr, mid + 1, right);
      return this.root;
    }
  }, {
    key: "insert",
    value: function insert(value) {
      var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      if (root == null) {
        root = new Node(value);
        return root;
      }
      if (value < root.data) {
        console.log(root.right);
        root.left = this.insert(value, root.left);
      } else if (value > root.data) {
        console.log(root.left);
        root.right = this.insert(value, root.right);
      }
      return root;
    }
  }, {
    key: "delete",
    value: function _delete(value) {
      var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      if (root == null) {
        return root;
      }
      if (value < root.data) {
        root.left = this["delete"](value, root.left);
      } else if (value > root.data) {
        root.right = this["delete"](value, root.right);
      } else {
        if (root.left == null) {
          return root.right;
        } else if (root.right == null) {
          return root.left;
        }
        root.data = minValue(root.right);
        root.right = this["delete"](value, root.right);
      }
      return root;
    }
  }, {
    key: "minValue",
    value: function minValue(root) {
      var minv = root.data;
      while (root.left != null) {
        minv = root.left.data;
        root = root.left;
      }
      return minv;
    }
  }, {
    key: "find",
    value: function find(value) {
      var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      if (root == null || root.data == value) {
        return root;
      }
      if (root.data < value) {
        return this.find(value, root.right);
      }
      return this.find(value, root.left);
    }
  }, {
    key: "levelOrder",
    value: function levelOrder(func) {
      var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      var array = [];
      var h = this.height(root);
      var i;
      for (i = 1; i <= h; i++) {
        var _item = this.currentLevel(root, i);
        array.push(_item);
      }
      array = array.flat(h);
      if (func == undefined) {
        return array;
      } else {
        var _iterator = _createForOfIteratorHelper(array),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _item2 = _step.value;
            console.log(func(_item2));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, {
    key: "height",
    value: function height() {
      var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
      if (root == null) {
        return 0;
      } else {
        var lheight = this.height(root.left);
        var rheight = this.height(root.right);
        if (lheight > rheight) {
          return lheight + 1;
        } else {
          return rheight + 1;
        }
      }
    }
  }, {
    key: "currentLevel",
    value: function currentLevel(root, level) {
      var array = [];
      if (root == null) {
        return array;
      }
      if (level == 1) {
        array.push(root.data);
      } else if (level > 1) {
        array.push(this.currentLevel(root.left, level - 1));
        array.push(this.currentLevel(root.right, level - 1));
      }
      return array;
    }
  }, {
    key: "preorder",
    value: function preorder() {
      var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
      var func = arguments.length > 1 ? arguments[1] : undefined;
      var tempArray = [];
      var current = root;
      var queue = [];
      var previous = current;
      tempArray.push(current.data);
      while (current.left != null) {
        previous = current;
        queue.push(previous);
        current = current.left;
        tempArray.push(current.data);
      }
      if (current.left == null) {
        for (var i = queue.length - 1; i >= 0; i--) {
          tempArray.push(queue[i].right.data);
          tempArray.push(this.preorder(queue[i].right));
        }
      }
      tempArray = tempArray.flat();
      tempArray = (0,_sort__WEBPACK_IMPORTED_MODULE_0__.noDuplicats)(tempArray);
      if (func == undefined) {
        return tempArray;
      } else if (func != undefined) {
        var _iterator2 = _createForOfIteratorHelper(tempArray),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item3 = _step2.value;
            console.log(func(_item3));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }, {
    key: "inorder",
    value: function inorder() {
      var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
      var func = arguments.length > 1 ? arguments[1] : undefined;
      var pointer = root;
      var array = [];
      var queue = [];
      if (pointer.right == null && pointer.left == null) {
        array.push(pointer.data);
        return array;
      }
      while (pointer.left != null) {
        queue.push(pointer);
        previous = pointer;
        pointer = pointer.left;
      }
      ;
      if (pointer.left == null) {
        array.push(pointer.data);
        for (var i = queue.length - 1; i >= 0; i--) {
          array.push(queue[i].data);
          array.push(this.inorder(queue[i].right));
        }
      }
      array = array.flat();
      if (func == undefined) {
        return array;
      } else if (func != undefined) {
        var _iterator3 = _createForOfIteratorHelper(array),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var num = _step3.value;
            console.log(func(num));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }
  }, {
    key: "postorder",
    value: function postorder() {
      var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
      var func = arguments.length > 1 ? arguments[1] : undefined;
      var pointer = root;
      var array = [];
      var queue = [];
      var previous;
      if (pointer.right == null) {
        return pointer.data;
      }
      while (pointer.left != null) {
        previous = pointer;
        queue.push(previous);
        pointer = pointer.left;
      }
      if (pointer.left == null) {
        array.push(pointer.data);
      }
      for (var i = queue.length - 1; i >= 0; i--) {
        array.push(this.postorder(queue[i].right));
        array.push(queue[i].data);
      }

      //console.log(array);
      array = array.flat();
      if (func == undefined) {
        return array;
      } else if (func != undefined) {
        var _iterator4 = _createForOfIteratorHelper(array),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var num = _step4.value;
            console.log(func(num));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }
  }, {
    key: "depth",
    value: function depth(node) {
      var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      if (node == null) {
        return null;
      }
      var counter = 0;
      var current = root;
      if (current.data == node.data) {
        return counter;
      }
      if (node.data < root.data) {
        counter++;
        current = current.left;
        counter += this.depth(node, current);
      } else if (node.data > root.data) {
        counter++;
        current = current.right;
        counter += this.depth(node, current);
      }
      return counter;
    }
  }, {
    key: "getRoot",
    value: function getRoot() {
      console.log(this.root);
    }
  }, {
    key: "isBalanced",
    value: function isBalanced() {
      var left = this.height(this.root.left);
      var right = this.height(this.root.right);
      if (Math.abs(left - right) == 1 || left == right) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "rebalance",
    value: function rebalance() {}
  }]);
  return Tree;
}(); //           0   1   2   3   4   5   6     7  8   9    
var array = [98, 93, 80, 61, 64, 70, 73, 64, 71, 86, 20]; // Length = 10;

function toSquare(num) {
  num = num * num;
  return num;
}
var tree = new Tree(array);
var item = tree.buildTree();
// tree.insert(22);
// tree.insert(21);
// tree.insert(23);
// tree.insert(24);

prettyPrint(item);
//let test = tree.find(23);
console.log(tree.isBalanced());

//tree.getRoot();

//console.log(item);
//prettyPrint(arrayToBST(array));
})();

/******/ })()
;
//# sourceMappingURL=bundledda31da95b9c4ba751f7.js.map