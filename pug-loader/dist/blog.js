!function(e){var n={};function t(c){if(n[c])return n[c].exports;var u=n[c]={i:c,l:!1,exports:{}};return e[c].call(u.exports,u,u.exports,t),u.l=!0,u.exports}t.m=e,t.c=n,t.d=function(e,n,c){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:c})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony default export */ __webpack_exports__[\"a\"] = (function(array, className) {\n    let menu = document.createElement('ul');\n    menu.className = className;\n    let listItems = '';\n    for(let item of array) {\n        listItems += '<li>'+ item +'</li>';\n    };\n    menu.innerHTML = listItems;\n    return menu;\n});;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuanM/MzAxYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIGNsYXNzTmFtZSkge1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBtZW51LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBsZXQgbGlzdEl0ZW1zID0gJyc7XG4gICAgZm9yKGxldCBpdGVtIG9mIGFycmF5KSB7XG4gICAgICAgIGxpc3RJdGVtcyArPSAnPGxpPicrIGl0ZW0gKyc8L2xpPic7XG4gICAgfTtcbiAgICBtZW51LmlubmVySFRNTCA9IGxpc3RJdGVtcztcbiAgICByZXR1cm4gbWVudTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);\n\nlet menu = Object(_components_menu_menu__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])(['home', 'gallery', 'fcuk', 'contacts'], 'menu');\ndocument.body.appendChild(menu);\n\nconsole.log('blog pug');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYmxvZy9ibG9nLmpzPzFjMGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVudS9tZW51JztcbmxldCBtZW51ID0gY3JlYXRlTWVudShbJ2hvbWUnLCAnZ2FsbGVyeScsICdmY3VrJywgJ2NvbnRhY3RzJ10sICdtZW51Jyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnUpO1xuXG5jb25zb2xlLmxvZygnYmxvZyBwdWcnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n")}]);