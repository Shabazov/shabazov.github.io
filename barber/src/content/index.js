"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var NewsElement = (function(_Component) {
  _inherits(NewsElement, _Component);

  function NewsElement() {
    _classCallCheck(this, NewsElement);

    return _possibleConstructorReturn(
      this,
      (NewsElement.__proto__ || Object.getPrototypeOf(NewsElement))
        .apply(this, arguments)
    );
  }

  _createClass(NewsElement, [
    {
      key: "render",
      value: function render() {
        var article = this.props.article;

        return React.createElement(
          "div",
          null,
          React.createElement("h2", { className: "title" }, article.title),
          React.createElement(
            "div",
            { className: "barb" },
            React.createElement("img", {
              src: "../src/barb2.jpg",
              alt: "picture"
            })
          ),
          React.createElement("p", { className: "text" }, article.text),
          React.createElement("a", { className: "more", href: "#" }, "More...")
        );
      }
    }
  ]);

  return NewsElement;
})(Component);

exports.default = NewsElement;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NewsList;

var _NewsElement = require("./NewsElement");

var _NewsElement2 = _interopRequireDefault(_NewsElement);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function NewsList(_ref) {
  var articles = _ref.articles;

  var newsElements = articles.map(function(article) {
    return React.createElement(
      "div",
      { className: "news__item", key: article.id },
      " ",
      React.createElement(_NewsElement2.default, { article: article })
    );
  });

  return React.createElement("div", { className: "news" }, newsElements);
}

function App() {
  return React.createElement(NewsList, {
    articles: news,
    foo: "bar",
    flag: true
  });
}


ReactDOM.render(
  <App/>,
  document.getElementById('myApp')  
)