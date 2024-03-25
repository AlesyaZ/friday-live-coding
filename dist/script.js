/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Article */ \"./src/js/Article.js\");\n/* harmony import */ var _js_ArticleModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ArticleModal */ \"./src/js/ArticleModal.js\");\n/* harmony import */ var _js_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Modal */ \"./src/js/Modal.js\");\n/* harmony import */ var _js_Data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/Data */ \"./src/js/Data.js\");\n/* harmony import */ var _js_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/Header */ \"./src/js/Header.js\");\n\n\n\n\n\nwindow.onload = function () {\n  // Render Articles\n  if (_js_Data__WEBPACK_IMPORTED_MODULE_3__.data) {\n    renderArticlesToDom();\n  }\n  // Tags\n  addTagsClickHandler();\n\n  // Generate Base Modal from Modal Class\n  addToolsClickHandler();\n\n  // Generate Burger Menu\n  (0,_js_Header__WEBPACK_IMPORTED_MODULE_4__.addHeaderClickHandler)();\n};\nvar addTagsClickHandler = function addTagsClickHandler() {\n  document.querySelector(\".strategies__tags\").addEventListener(\"click\", function (e) {\n    if (e.target.classList.contains(\"tag\")) {\n      var clickedTag = e.target;\n      removeSelectedTags();\n      selectClickedTag(clickedTag);\n      if (clickedTag.innerText === \"All\") {\n        showAllStrategies();\n      } else {\n        filterStrategyBySelectedTag(clickedTag.innerText);\n      }\n    }\n  });\n};\nvar removeSelectedTags = function removeSelectedTags() {\n  var tags = document.querySelectorAll(\".strategies__tags .tag\");\n  tags.forEach(function (tag) {\n    tag.classList.remove(\"tag_selected\");\n    tag.classList.add(\"tag_bordered\");\n  });\n};\nvar selectClickedTag = function selectClickedTag(clickedTag) {\n  clickedTag.classList.add(\"tag_selected\");\n  clickedTag.classList.remove(\"tag_bordered\");\n};\nvar showAllStrategies = function showAllStrategies() {\n  var strategies = document.querySelectorAll(\".strategy-wrapper .strategy\");\n  strategies.forEach(function (strategy) {\n    strategy.classList.remove(\"strategy_hidden\");\n  });\n};\nvar filterStrategyBySelectedTag = function filterStrategyBySelectedTag(selectedTag) {\n  var strategies = document.querySelectorAll(\".strategy-wrapper .strategy\");\n  strategies.forEach(function (strategy) {\n    strategy.classList.add(\"strategy_hidden\");\n    strategy.querySelectorAll(\".tag\").forEach(function (tag) {\n      if (tag.innerText === selectedTag) {\n        strategy.classList.remove(\"strategy_hidden\");\n      }\n    });\n  });\n};\nvar renderArticlesToDom = function renderArticlesToDom() {\n  var strategiesWrapper = getStrategiesWrapper();\n  generateArticles(_js_Data__WEBPACK_IMPORTED_MODULE_3__.data).forEach(function (article) {\n    strategiesWrapper.append(article.generateArticle());\n  });\n  addStrategyClickHandler();\n};\nvar getStrategiesWrapper = function getStrategiesWrapper() {\n  var strategiesContainer = document.querySelector(\".strategy-wrapper\");\n  strategiesContainer.innerHTML = \"\";\n  return strategiesContainer;\n};\nvar generateArticles = function generateArticles(data) {\n  var articles = [];\n  data.forEach(function (article) {\n    articles.push(new _js_Article__WEBPACK_IMPORTED_MODULE_0__.Article(article));\n  });\n  return articles;\n};\nvar addToolsClickHandler = function addToolsClickHandler() {\n  document.querySelector(\".tools__button .button\").addEventListener(\"click\", function () {\n    generateToolsModal();\n  });\n};\nvar generateToolsModal = function generateToolsModal() {\n  renderModalWindow(\"Test content for Tools Modal\");\n};\nvar renderModalWindow = function renderModalWindow(content) {\n  var modal = new _js_Modal__WEBPACK_IMPORTED_MODULE_2__.Modal(\"tools-modal\");\n  modal.buildModal(content);\n};\nvar addStrategyClickHandler = function addStrategyClickHandler() {\n  document.querySelector(\".strategy-wrapper\").addEventListener(\"click\", function (e) {\n    if (e.target.closest(\".strategy\")) {\n      var clickedStrategyId = e.target.closest(\".strategy\").getAttribute(\"data-id\");\n      var clickedStrategyData = getClickedData(clickedStrategyId);\n      renderArticleModalWindow(clickedStrategyData);\n    }\n  });\n};\nvar getClickedData = function getClickedData(id) {\n  return _js_Data__WEBPACK_IMPORTED_MODULE_3__.data.find(function (article) {\n    return article.id == id;\n  });\n};\nvar renderArticleModalWindow = function renderArticleModalWindow(article) {\n  var modal = new _js_ArticleModal__WEBPACK_IMPORTED_MODULE_1__.ArticleModal(\"article-modal\", article);\n  modal.renderModal();\n};\n\n//# sourceURL=webpack://friday-live-coding/./src/index.js?");

/***/ }),

/***/ "./src/js/Article.js":
/*!***************************!*\
  !*** ./src/js/Article.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Article: () => (/* binding */ Article)\n/* harmony export */ });\nvar _excluded = [\"id\", \"title\", \"urlToImage\", \"tags\"];\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Article = /*#__PURE__*/function () {\n  function Article(_ref) {\n    var id = _ref.id,\n      title = _ref.title,\n      urlToImage = _ref.urlToImage,\n      tags = _ref.tags,\n      rest = _objectWithoutProperties(_ref, _excluded);\n    _classCallCheck(this, Article);\n    this.id = id;\n    this.title = title;\n    this.urlToImage = urlToImage;\n    this.tags = tags;\n  }\n\n  // Article generator\n  return _createClass(Article, [{\n    key: \"generateArticle\",\n    value: function generateArticle() {\n      var template = \"\";\n      var article = document.createElement(\"article\");\n      article.className = \"strategy block-shadowed\";\n      article.setAttribute(\"data-id\", this.id);\n      this.urlToImage && (template += \"<img class = \\\"strategy__image\\\" src=\".concat(this.urlToImage, \" alt=\\\"strategy\\\">\"));\n      if (this.title || this.tags) {\n        template += \"<div class=\\\"strategy__content\\\">\";\n        this.title && (template += \"<h3 class=\\\"strategy__name\\\">\".concat(this.title, \"</h3>\"));\n        if (this.tags) {\n          template += \"<div class=\\\"strategy__tags tags\\\">\";\n          this.tags.map(function (tag) {\n            template += \"<span class=\\\"tag tag_colored\\\">\".concat(tag, \"</span>\");\n          });\n          template += \"</div>\";\n        }\n        template += \"</div>\";\n      }\n      article.innerHTML = template;\n      return article;\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://friday-live-coding/./src/js/Article.js?");

/***/ }),

/***/ "./src/js/ArticleModal.js":
/*!********************************!*\
  !*** ./src/js/ArticleModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ArticleModal: () => (/* binding */ ArticleModal)\n/* harmony export */ });\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ \"./src/js/Modal.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _get() { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar ArticleModal = /*#__PURE__*/function (_Modal) {\n  function ArticleModal(classes, _ref) {\n    var _this;\n    var id = _ref.id,\n      title = _ref.title,\n      urlToImage = _ref.urlToImage,\n      tags = _ref.tags,\n      content = _ref.content,\n      date = _ref.date;\n    _classCallCheck(this, ArticleModal);\n    _this = _callSuper(this, ArticleModal, [classes]);\n    _this.id = id;\n    _this.title = title;\n    _this.urlToImage = urlToImage;\n    _this.tags = tags;\n    _this.content = content;\n    _this.date = date;\n    return _this;\n  }\n\n  // Article Modal generator\n  _inherits(ArticleModal, _Modal);\n  return _createClass(ArticleModal, [{\n    key: \"generateContent\",\n    value: function generateContent() {\n      var template = \"\";\n      var article = document.createElement(\"div\");\n      article.className = \"article-modal__content\";\n      this.urlToImage && (template += \"<img class = \\\"strategy__image\\\" src=\".concat(this.urlToImage, \" alt=\\\"strategy\\\">\"));\n      if (this.title || this.tags || this.content || this.date) {\n        template += \"<div class=\\\"strategy__content\\\">\";\n        this.date && (template += \"<p class=\\\"strategy__date\\\">\".concat(this.date, \"</p>\"));\n        this.title && (template += \"<h3 class=\\\"strategy__name\\\">\".concat(this.title, \"</h3>\"));\n        this.content && (template += \"<p class=\\\"strategy__text\\\">\".concat(this.content, \"</p>\"));\n        if (this.tags) {\n          template += \"<div class=\\\"strategy__tags tags\\\">\";\n          this.tags.map(function (tag) {\n            template += \"<span class=\\\"tag tag_colored\\\">\".concat(tag, \"</span>\");\n          });\n          template += \"</div>\";\n        }\n        template += \"</div>\";\n      }\n      article.innerHTML = template;\n      return article;\n    }\n  }, {\n    key: \"renderModal\",\n    value: function renderModal() {\n      var content = this.generateContent();\n      _get(_getPrototypeOf(ArticleModal.prototype), \"buildModal\", this).call(this, content);\n    }\n  }]);\n}(_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal);\n\n//# sourceURL=webpack://friday-live-coding/./src/js/ArticleModal.js?");

/***/ }),

/***/ "./src/js/Data.js":
/*!************************!*\
  !*** ./src/js/Data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   data: () => (/* binding */ data)\n/* harmony export */ });\n/* harmony import */ var _img_strategies_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/strategies/1.jpg */ \"./src/img/strategies/1.jpg\");\n/* harmony import */ var _img_strategies_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/strategies/2.jpg */ \"./src/img/strategies/2.jpg\");\n/* harmony import */ var _img_strategies_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/strategies/3.jpg */ \"./src/img/strategies/3.jpg\");\n/* harmony import */ var _img_strategies_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/strategies/4.jpg */ \"./src/img/strategies/4.jpg\");\n/* harmony import */ var _img_strategies_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/strategies/5.jpg */ \"./src/img/strategies/5.jpg\");\n\n\n\n\n\nvar data = [{\n  id: 1,\n  title: \"Increasing Prosperity With Positive Thinking\",\n  urlToImage: _img_strategies_1_jpg__WEBPACK_IMPORTED_MODULE_0__,\n  tags: [\"Art\", \"Design\"],\n  content: \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\n  date: \"01.01.2024\"\n}, {\n  id: 2,\n  title: \"Motivation Is The First Step To Success\",\n  urlToImage: _img_strategies_2_jpg__WEBPACK_IMPORTED_MODULE_1__,\n  tags: [\"Culture\"],\n  content: \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\n  date: \"01.01.2024\"\n}, {\n  id: 3,\n  title: \"Success Steps For Your Personal Or Business Life\",\n  urlToImage: _img_strategies_3_jpg__WEBPACK_IMPORTED_MODULE_2__,\n  tags: [\"Culture\", \"Design\", \"Art\"],\n  content: \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\n  date: \"01.01.2024\"\n}, {\n  id: 4,\n  title: \"Success Steps For Your Personal Or Business Life Plus Funny Image on the Back\",\n  urlToImage: _img_strategies_4_jpg__WEBPACK_IMPORTED_MODULE_3__,\n  tags: [\"Culture\", \"Design\", \"Art\"],\n  content: \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\n  date: \"01.01.2024\"\n}, {\n  id: 5,\n  title: \"Increasing Prosperity With Positive Thinking\",\n  urlToImage: _img_strategies_5_jpg__WEBPACK_IMPORTED_MODULE_4__,\n  tags: [\"Design\"],\n  content: \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\n  date: \"01.01.2024\"\n}, {\n  id: 6,\n  title: \"Increasing Prosperity With Positive Thinking\",\n  urlToImage: _img_strategies_1_jpg__WEBPACK_IMPORTED_MODULE_0__,\n  tags: [\"Art\", \"Design\"],\n  content: \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\n  date: \"01.01.2024\"\n}, {\n  id: 7,\n  title: \"Motivation Is The First Step To Success\",\n  urlToImage: _img_strategies_2_jpg__WEBPACK_IMPORTED_MODULE_1__,\n  tags: [\"Culture\"],\n  content: \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\n  date: \"01.01.2024\"\n}, {\n  id: 8,\n  title: \"Success Steps For Your Personal Or Business Life\",\n  urlToImage: _img_strategies_3_jpg__WEBPACK_IMPORTED_MODULE_2__,\n  tags: [\"Culture\", \"Design\", \"Art\"],\n  content: \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\n  date: \"01.01.2024\"\n}];\n\n//# sourceURL=webpack://friday-live-coding/./src/js/Data.js?");

/***/ }),

/***/ "./src/js/Header.js":
/*!**************************!*\
  !*** ./src/js/Header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addHeaderClickHandler: () => (/* binding */ addHeaderClickHandler)\n/* harmony export */ });\nvar headerNavigation = document.querySelector(\".header__navigation\");\nvar humberger = document.querySelector(\".hamburger\");\nvar addHeaderClickHandler = function addHeaderClickHandler() {\n  humberger.addEventListener(\"click\", function (e) {\n    humberger.classList.toggle(\"active\");\n    headerNavigation.classList.toggle(\"active\");\n  });\n};\n\n//# sourceURL=webpack://friday-live-coding/./src/js/Header.js?");

/***/ }),

/***/ "./src/js/Modal.js":
/*!*************************!*\
  !*** ./src/js/Modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Modal: () => (/* binding */ Modal)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Modal = /*#__PURE__*/function () {\n  function Modal(classes) {\n    _classCallCheck(this, Modal);\n    this.classes = classes;\n    this.modal = \"\";\n    this.modalContent = \"\";\n    this.modalCloseBtn = \"\";\n    this.overlay = \"\";\n  }\n  return _createClass(Modal, [{\n    key: \"buildModal\",\n    value: function buildModal(content) {\n      // Overlay\n      this.overlay = this.createDomNode(this.overlay, \"div\", \"overlay\", \"overlay_modal\");\n      // Modal\n      this.modal = this.createDomNode(this.modal, \"div\", \"modal\", this.classes);\n\n      // Modal content\n      this.modalContent = this.createDomNode(this.modalContent, \"div\", \"modal__content\");\n\n      // Close button\n      this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, \"span\", \"modal__close-icon\");\n      this.modalCloseBtn.innerHTML = '<svg width=\"21\" height=\"22\" viewBox=\"0 0 21 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z\" fill=\"#2F281E\"/></svg>';\n      this.setContent(content);\n      this.appendModalElements();\n\n      // Bind Events\n      this.bindEvents();\n\n      // Open Modal\n      this.openModal();\n    }\n  }, {\n    key: \"createDomNode\",\n    value: function createDomNode(node, element) {\n      var _node$classList;\n      node = document.createElement(element);\n      for (var _len = arguments.length, classes = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n        classes[_key - 2] = arguments[_key];\n      }\n      (_node$classList = node.classList).add.apply(_node$classList, classes);\n      return node;\n    }\n  }, {\n    key: \"setContent\",\n    value: function setContent(content) {\n      if (typeof content === \"string\") {\n        this.modalContent.innerHTML = content;\n      } else {\n        this.modalContent.innerHTML = \"\";\n        this.modalContent.appendChild(content);\n      }\n    }\n  }, {\n    key: \"appendModalElements\",\n    value: function appendModalElements() {\n      this.modal.append(this.modalCloseBtn);\n      this.modal.append(this.modalContent);\n      this.overlay.append(this.modal);\n    }\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      // this.modalCloseBtn.addEventListener(\"click\", this.closeModal);\n      this.overlay.addEventListener(\"click\", this.closeModal);\n    }\n  }, {\n    key: \"openModal\",\n    value: function openModal() {\n      document.body.append(this.overlay);\n    }\n  }, {\n    key: \"closeModal\",\n    value: function closeModal(e) {\n      var classes = e.target.classList;\n      if (classes.contains(\"overlay\") || classes.contains(\"modal__close-icon\")) {\n        document.querySelector(\".overlay\").remove();\n      }\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://friday-live-coding/./src/js/Modal.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://friday-live-coding/./src/sass/style.scss?");

/***/ }),

/***/ "./src/img/strategies/1.jpg":
/*!**********************************!*\
  !*** ./src/img/strategies/1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d8c3d29ec9756c2e7643.jpg\";\n\n//# sourceURL=webpack://friday-live-coding/./src/img/strategies/1.jpg?");

/***/ }),

/***/ "./src/img/strategies/2.jpg":
/*!**********************************!*\
  !*** ./src/img/strategies/2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a500ef0dbbca50cad07c.jpg\";\n\n//# sourceURL=webpack://friday-live-coding/./src/img/strategies/2.jpg?");

/***/ }),

/***/ "./src/img/strategies/3.jpg":
/*!**********************************!*\
  !*** ./src/img/strategies/3.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2bc33b41d34705c0f26e.jpg\";\n\n//# sourceURL=webpack://friday-live-coding/./src/img/strategies/3.jpg?");

/***/ }),

/***/ "./src/img/strategies/4.jpg":
/*!**********************************!*\
  !*** ./src/img/strategies/4.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13c47153d62cf1b1d285.jpg\";\n\n//# sourceURL=webpack://friday-live-coding/./src/img/strategies/4.jpg?");

/***/ }),

/***/ "./src/img/strategies/5.jpg":
/*!**********************************!*\
  !*** ./src/img/strategies/5.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"371b9537a69e3f24acba.jpg\";\n\n//# sourceURL=webpack://friday-live-coding/./src/img/strategies/5.jpg?");

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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sass/style.scss");
/******/ 	
/******/ })()
;