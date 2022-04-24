"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
} // 1. Common framework: header footer
// header


var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
        className: "shortcut"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w"
      }, /*#__PURE__*/React.createElement("div", {
        className: "fl"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Welcome to Bookworm! \xA0"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/login"
      }, "Please log in | \xA0")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/signup"
      }, "Sign up for free")))), /*#__PURE__*/React.createElement("div", {
        className: "fr"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/homepage"
      }, "Homepage")), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/order"
      }, "My Orders")), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/addbook"
      }, "Sell a book")), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Contact us")), /*#__PURE__*/React.createElement("li", null))))), /*#__PURE__*/React.createElement("header", {
        className: "header w"
      }, /*#__PURE__*/React.createElement("div", {
        className: "logo"
      }, /*#__PURE__*/React.createElement("img", {
        src: "images/logo.png",
        width: "160%",
        onClick: function onClick() {
          window.location.href = "/#/homepage";
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "search"
      }, /*#__PURE__*/React.createElement("input", {
        type: "search",
        name: "",
        id: "",
        placeholder: "Title/ Course/ Author"
      }), /*#__PURE__*/React.createElement("button", null, "Search")), /*#__PURE__*/React.createElement("div", {
        className: "hotwords"
      }, /*#__PURE__*/React.createElement("a", {
        href: "#",
        className: "style_red"
      }, "Discounts"), /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Daily Vouchers"), /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Computing"), /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Engineering"), /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Architecture"), /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Literature")), /*#__PURE__*/React.createElement("div", {
        className: "shopcar"
      }, /*#__PURE__*/React.createElement("img", {
        src: "images/cart.png",
        width: "20px",
        height: "20px"
      }), /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "  My shopping cart"), /*#__PURE__*/React.createElement("i", {
        className: "count"
      }, "3"))));
    }
  }]);

  return Header;
}(React.Component); // footer


var Footer = /*#__PURE__*/function (_React$Component2) {
  _inherits(Footer, _React$Component2);

  var _super2 = _createSuper(Footer);

  function Footer() {
    _classCallCheck(this, Footer);

    return _super2.apply(this, arguments);
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("footer", {
        className: "footer"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mod_help"
      }, /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "ORGANIZATION"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "About us")), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Terms")), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Privacy")), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Ad Preferences")), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Help"))), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "WORK WITH US"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Authors")), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Advertise")), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Ads blog")), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "API"))), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "CONNECT"), /*#__PURE__*/React.createElement("dd", null), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("img", {
        src: "images/follow.png",
        width: "60%"
      })))));
    }
  }]);

  return Footer;
}(React.Component); // 2. Homepage


var HP_Nav = /*#__PURE__*/function (_React$Component3) {
  _inherits(HP_Nav, _React$Component3);

  var _super3 = _createSuper(HP_Nav);

  function HP_Nav() {
    _classCallCheck(this, HP_Nav);

    return _super3.apply(this, arguments);
  }

  _createClass(HP_Nav, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("nav", {
        className: "nav"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w"
      }, /*#__PURE__*/React.createElement("div", {
        className: "dropdown"
      }, /*#__PURE__*/React.createElement("div", {
        className: "dt"
      }, " All textbook genres"), /*#__PURE__*/React.createElement("div", {
        className: "dd"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Art"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Biography"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Business"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Computing"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "History"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Law"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Mathematics"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Medicine"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Music"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Poetry"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Psychology"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Romance"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Science"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Sports"), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "More genres"), " ")))), /*#__PURE__*/React.createElement("div", {
        className: "navitems"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Faculty of Sciences")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "Faculty of Engineering")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "School of Computing")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }, "More Falculties"))))));
    }
  }]);

  return HP_Nav;
}(React.Component);

var HP_Main = /*#__PURE__*/function (_React$Component4) {
  _inherits(HP_Main, _React$Component4);

  var _super4 = _createSuper(HP_Main);

  function HP_Main() {
    _classCallCheck(this, HP_Main);

    return _super4.apply(this, arguments);
  }

  _createClass(HP_Main, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "w"
      }, /*#__PURE__*/React.createElement("div", {
        className: "main"
      }, /*#__PURE__*/React.createElement("div", {
        className: "focus"
      }, /*#__PURE__*/React.createElement("a", {
        href: "",
        className: "left-arrow"
      }), /*#__PURE__*/React.createElement("a", {
        href: "",
        className: "right-arrow"
      }), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
        src: "images/1.png",
        alt: "",
        width: "100%",
        height: "450px"
      }))), /*#__PURE__*/React.createElement("ul", {
        className: "circle"
      }, /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", {
        className: "current"
      }), /*#__PURE__*/React.createElement("li", null))), /*#__PURE__*/React.createElement("div", {
        className: "newsflash"
      }, /*#__PURE__*/React.createElement("div", {
        className: "news"
      }, /*#__PURE__*/React.createElement("div", {
        className: "news-hd"
      }, /*#__PURE__*/React.createElement("h5", null, "News"), /*#__PURE__*/React.createElement("a", {
        href: "",
        className: "more"
      }, "More")), /*#__PURE__*/React.createElement("div", {
        className: "news-bd"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, /*#__PURE__*/React.createElement("strong", null, "[Hot]"), " Get ready to new semester sale!")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, /*#__PURE__*/React.createElement("strong", null, "[Hot]"), " Come and get daily cashback up to 10%!")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, /*#__PURE__*/React.createElement("strong", null, "[Hot]"), " What are your friends reading?")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, /*#__PURE__*/React.createElement("strong", null, "[Hot]"), " Best Computing textbooks")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, /*#__PURE__*/React.createElement("strong", null, "[Hot]"), " Best MERN stack textbooks"))))), /*#__PURE__*/React.createElement("div", {
        className: "news"
      }, /*#__PURE__*/React.createElement("div", {
        className: "news-hd"
      }, /*#__PURE__*/React.createElement("h5", null, "Top Reviews")), /*#__PURE__*/React.createElement("div", {
        className: "news-bd"
      }, /*#__PURE__*/React.createElement("img", {
        src: "images/ad1.jpeg",
        alt: "",
        width: "100%"
      })), /*#__PURE__*/React.createElement("div", {
        className: "news-bd"
      }, /*#__PURE__*/React.createElement("img", {
        src: "images/ad3.jpeg",
        alt: "",
        width: "100%"
      }))))));
    }
  }]);

  return HP_Main;
}(React.Component);

function HP_book(props) {
  var book = props.book;
  var booklink = "#/detail/".concat(book.title);
  return /*#__PURE__*/React.createElement("div", {
    className: "abook"
  }, /*#__PURE__*/React.createElement("img", {
    src: book.photo
  }), /*#__PURE__*/React.createElement("li", {
    className: "abook_title"
  }, /*#__PURE__*/React.createElement("a", {
    href: booklink
  }, " ", book.title)), /*#__PURE__*/React.createElement("li", {
    className: "abook_price"
  }, " $ ", book.price));
}

function Homepage(props) {
  var books = props.books.map(function (book) {
    return /*#__PURE__*/React.createElement(HP_book, {
      book: book
    });
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(HP_Nav, null), /*#__PURE__*/React.createElement(HP_Main, null), /*#__PURE__*/React.createElement("div", {
    className: "w sk_container"
  }, /*#__PURE__*/React.createElement("h2", null, "New Arrivals"), /*#__PURE__*/React.createElement("ul", {
    className: "clearfix"
  }, books)), /*#__PURE__*/React.createElement(Footer, null));
} // 3. Login Page


var Login = /*#__PURE__*/function (_React$Component5) {
  _inherits(Login, _React$Component5);

  var _super5 = _createSuper(Login);

  function Login() {
    var _this;

    _classCallCheck(this, Login);

    _this = _super5.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Login, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.login;
      var user = {
        email: form.email.value,
        password: form.password.value
      }; // console.log(user)

      this.props.checkUser(user);
      form.email.value = "";
      form.password.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
        className: "shortcut"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w"
      }, /*#__PURE__*/React.createElement("div", {
        className: "fl"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Welcome to Bookworm! \xA0"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/login"
      }, "Please log in | \xA0")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/signup"
      }, "Sign up for free")))), /*#__PURE__*/React.createElement("div", {
        className: "fr"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/homepage"
      }, "Homepage")), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/order"
      }, "My Orders")), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/addbook"
      }, "Sell a book")), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Contact us")), /*#__PURE__*/React.createElement("li", null))))), /*#__PURE__*/React.createElement("div", {
        className: "w"
      }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
        className: "logo"
      }, /*#__PURE__*/React.createElement("img", {
        src: "images/logo.png",
        alt: ""
      }))), /*#__PURE__*/React.createElement("div", {
        className: "loginarea"
      }, /*#__PURE__*/React.createElement("h3", null, "Sign in", /*#__PURE__*/React.createElement("div", {
        className: "login"
      }, "Already have an account?", /*#__PURE__*/React.createElement("a", {
        href: ""
      }, " Sign in"))), /*#__PURE__*/React.createElement("div", {
        className: "reg-form"
      }, /*#__PURE__*/React.createElement("form", {
        name: "login",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
        for: ""
      }, "Email: "), " ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "email",
        className: "inp"
      }), /*#__PURE__*/React.createElement("span", {
        className: "success"
      }, /*#__PURE__*/React.createElement("i", {
        className: "success_icon"
      }), "Email format is correct")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
        for: ""
      }, "Password: "), " ", /*#__PURE__*/React.createElement("input", {
        type: "password",
        name: "password",
        className: "inp"
      }), /*#__PURE__*/React.createElement("span", {
        className: "error"
      }, /*#__PURE__*/React.createElement("i", {
        className: "error_icon"
      }), "Password format is not correct")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("input", {
        type: "submit",
        value: "SIGN IN",
        className: "btn"
      }))))))));
    }
  }]);

  return Login;
}(React.Component); // 4. Sign up Page


var Signup = /*#__PURE__*/function (_React$Component6) {
  _inherits(Signup, _React$Component6);

  var _super6 = _createSuper(Signup);

  function Signup() {
    var _this2;

    _classCallCheck(this, Signup);

    _this2 = _super6.call(this);
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Signup, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.register;
      var user = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        password: form.password.value,
        purchase: 0,
        sell: 0
      }; // const agree = form.agree.value;
      // console.log(form.agree.checked)

      if (form.agree.checked === true) {
        this.props.createUser(user);
      } else {
        alert("please agree to our terms of services");
      }

      form.name.value = "";
      form.phone.value = "";
      form.email.value = "";
      form.password.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
        className: "shortcut"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w"
      }, /*#__PURE__*/React.createElement("div", {
        className: "fl"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Welcome to Bookworm! \xA0"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/login"
      }, "Please log in | \xA0")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/signup"
      }, "Sign up for free")))), /*#__PURE__*/React.createElement("div", {
        className: "fr"
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/homepage"
      }, "Homepage")), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/order"
      }, "My Orders")), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "/#/addbook"
      }, "Sell a book")), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: ""
      }, "Contact us")), /*#__PURE__*/React.createElement("li", null))))), /*#__PURE__*/React.createElement("div", {
        className: "w"
      }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
        className: "logo"
      }, /*#__PURE__*/React.createElement("img", {
        src: "images/logo.png",
        alt: "",
        onClick: this.props.showHomePage
      }))), /*#__PURE__*/React.createElement("div", {
        className: "registerarea"
      }, /*#__PURE__*/React.createElement("h3", null, "New User Register", /*#__PURE__*/React.createElement("div", {
        className: "login"
      }, "Already have an account?", /*#__PURE__*/React.createElement("a", {
        href: ""
      }, " Sign in"))), /*#__PURE__*/React.createElement("div", {
        className: "reg-form"
      }, /*#__PURE__*/React.createElement("form", {
        name: "register",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
        for: ""
      }, "Name: "), " ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "name",
        className: "inp"
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
        for: ""
      }, "Phone Number: "), " ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "phone",
        className: "inp"
      }), /*#__PURE__*/React.createElement("span", {
        className: "error"
      }, /*#__PURE__*/React.createElement("i", {
        className: "error_icon"
      }), "Phone number format is not correct")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
        for: ""
      }, "Email: "), " ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "email",
        className: "inp"
      }), /*#__PURE__*/React.createElement("span", {
        className: "success"
      }, /*#__PURE__*/React.createElement("i", {
        className: "success_icon"
      }), "Email format is correct")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
        for: ""
      }, "Password: "), " ", /*#__PURE__*/React.createElement("input", {
        type: "password",
        name: "password",
        className: "inp"
      }), /*#__PURE__*/React.createElement("span", {
        className: "error"
      }, /*#__PURE__*/React.createElement("i", {
        className: "error_icon"
      }), "Password format is not correct")), /*#__PURE__*/React.createElement("li", {
        className: "safe"
      }, "Password Strength ", /*#__PURE__*/React.createElement("em", {
        className: "ruo"
      }, "Weak"), " ", /*#__PURE__*/React.createElement("em", {
        className: "zhong"
      }, "Meidum"), " ", /*#__PURE__*/React.createElement("em", {
        class: "qiang"
      }, "Strong")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
        for: ""
      }, "Re-enter Password: "), " ", /*#__PURE__*/React.createElement("input", {
        type: "password",
        className: "inp"
      }), /*#__PURE__*/React.createElement("span", {
        className: "error"
      }, /*#__PURE__*/React.createElement("i", {
        className: "error_icon"
      }), "Password doesn't match")), /*#__PURE__*/React.createElement("li", {
        className: "agree"
      }, " ", /*#__PURE__*/React.createElement("input", {
        name: "agree",
        type: "checkbox"
      }), "  agree to our", /*#__PURE__*/React.createElement("a", {
        href: ""
      }, " Terms of Service")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("input", {
        type: "submit",
        value: "Register",
        className: "btn"
      }))))))));
    }
  }]);

  return Signup;
}(React.Component); // 5. Book Detail Page


var OrderAdd = /*#__PURE__*/function (_React$Component7) {
  _inherits(OrderAdd, _React$Component7);

  var _super7 = _createSuper(OrderAdd);

  function OrderAdd() {
    var _this3;

    _classCallCheck(this, OrderAdd);

    _this3 = _super7.call(this);
    _this3.handleBuy = _this3.handleBuy.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(OrderAdd, [{
    key: "handleBuy",
    value: function handleBuy(e) {
      e.preventDefault();
      var order = {
        // bookid:6,
        booktitle: this.props.book.title,
        buyerid: 6
      };
      this.props.createOrder(order);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("button", {
        onClick: this.handleBuy
      }, "Buy Now");
    }
  }]);

  return OrderAdd;
}(React.Component);

function Detailpage(props) {
  var book = props.book;
  var booklink = "/detail/".concat(book.title);
  return (
    /*#__PURE__*/
    //<React.Fragment>
    React.createElement(ReactRouterDOM.Route, {
      path: booklink
    }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
      className: "de_container w"
    }, /*#__PURE__*/React.createElement("div", {
      className: "crumb_wrap"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, book.category), " \u3009 ", /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, book.course, "  "), " \u3009 ", /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, book.title, "   ")), /*#__PURE__*/React.createElement("div", {
      className: "product_intro clearfix"
    }, /*#__PURE__*/React.createElement("div", {
      className: "preview_wrap fl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "preview_img"
    }, /*#__PURE__*/React.createElement("img", {
      className: "book_img",
      src: book.photo,
      alt: ""
    })), /*#__PURE__*/React.createElement("div", {
      className: "preview_list"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      className: "arrow_prev"
    }), /*#__PURE__*/React.createElement("a", {
      href: "#",
      className: "arrow_next"
    }), /*#__PURE__*/React.createElement("ul", {
      className: "list_item"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
      src: book.photo,
      alt: ""
    })), /*#__PURE__*/React.createElement("li", {
      className: "current"
    }, /*#__PURE__*/React.createElement("img", {
      src: book.photo,
      alt: ""
    })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
      src: book.photo,
      alt: ""
    })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
      src: book.photo,
      alt: ""
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "itemInfo_wrap fr"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sku_name"
    }, book.title), /*#__PURE__*/React.createElement("div", {
      className: "sku_author"
    }, "By ", book.author), /*#__PURE__*/React.createElement("div", {
      className: "summary"
    }, /*#__PURE__*/React.createElement("dl", {
      className: "summary_price"
    }, /*#__PURE__*/React.createElement("dt", null, "Price"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("i", {
      className: "price"
    }, "$ ", book.price, " "), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "List Price: ", /*#__PURE__*/React.createElement("i", null, "$29.99")))), /*#__PURE__*/React.createElement("dl", {
      className: "summary_introduction"
    }, /*#__PURE__*/React.createElement("dt", null, "Preview"), /*#__PURE__*/React.createElement("dd", null, book.description)), /*#__PURE__*/React.createElement("dl", {
      className: "summary_promotion"
    }, /*#__PURE__*/React.createElement("dt", null, "Promotion"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("em", null, "Sales!"), " Use coupon code: NEWSTART to get 10% off discount")), /*#__PURE__*/React.createElement(OrderAdd, {
      book: book,
      createOrder: props.createOrder
    }))))), /*#__PURE__*/React.createElement(Footer, null)) // </React.Fragment>

  );
}

function Detailpages(props) {
  var books = props.books.map(function (book) {
    return /*#__PURE__*/React.createElement(Detailpage, {
      key: book.id,
      book: book,
      createOrder: props.createOrder
    });
  });
  console.log("Hello", books);
  return /*#__PURE__*/React.createElement(ReactRouterDOM.Switch, null, books);
} // 6. AddBook Page


var AddBookPage = /*#__PURE__*/function (_React$Component8) {
  _inherits(AddBookPage, _React$Component8);

  var _super8 = _createSuper(AddBookPage);

  function AddBookPage() {
    var _this4;

    _classCallCheck(this, AddBookPage);

    _this4 = _super8.call(this);
    _this4.handleSubmit = _this4.handleSubmit.bind(_assertThisInitialized(_this4));
    _this4.handlerChange = _this4.handlerChange.bind(_assertThisInitialized(_this4));
    _this4.state = {
      img: ""
    };
    return _this4;
  }

  _createClass(AddBookPage, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.bookAdd;
      var book = {
        title: form.bk_title.value,
        author: form.bk_author.value,
        price: form.bk_price.value,
        category: form.bk_category.value,
        course: form.bk_course.value,
        description: form.bk_des.value,
        photo: form.bk_photo.value
      };
      this.props.createBook(book);
      form.bk_title.value = "";
      form.bk_author.value = "";
      form.bk_price.value = 0;
      form.bk_category.value = "", form.bk_course.value = "", form.bk_des.value = "", form.bk_photo.value = "";
    }
  }, {
    key: "handlerChange",
    value: function handlerChange() {
      var that = this;
      var file = document.getElementById('file').files[0];

      if (file.type !== 'image/png') {
        alert('please upload a png picture');
        return;
      }

      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (result) {
        console.log(this.result);
        that.setState({
          img: this.result
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
        className: "ab_container w"
      }, /*#__PURE__*/React.createElement("h1", null, " Add a new book"), /*#__PURE__*/React.createElement("form", {
        name: "bookAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("p", null, "Title: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "bk_title"
      })), /*#__PURE__*/React.createElement("p", null, "Author: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "bk_author"
      })), /*#__PURE__*/React.createElement("p", null, "Price: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "bk_price"
      })), /*#__PURE__*/React.createElement("p", null, "Category: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "bk_category"
      })), /*#__PURE__*/React.createElement("p", null, "Course: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "bk_course"
      })), /*#__PURE__*/React.createElement("div", {
        className: "description"
      }, /*#__PURE__*/React.createElement("p", null, "Description: "), /*#__PURE__*/React.createElement("textarea", {
        type: "text",
        id: "bk_des"
      })), /*#__PURE__*/React.createElement("div", {
        className: "photo"
      }, /*#__PURE__*/React.createElement("p", null, "Post Photo:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        id: "bk_photo"
      })), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("button", null, "Submit a book"))), /*#__PURE__*/React.createElement(Footer, null));
    }
  }]);

  return AddBookPage;
}(React.Component); // 7. My order page


function OrderRow(props) {
  var order = props.order;
  if (order.status == "Delivered") return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, order.id), /*#__PURE__*/React.createElement("td", null, order.booktitle), /*#__PURE__*/React.createElement("td", null, order.created ? order.created.toDateString() : ''), /*#__PURE__*/React.createElement("td", null, order.status), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      window.location.href = "/#/review";
    }
  }, "Add a review")));else if (order.status == "Rated") return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, order.id), /*#__PURE__*/React.createElement("td", null, order.booktitle), /*#__PURE__*/React.createElement("td", null, order.created ? order.created.toDateString() : ''), /*#__PURE__*/React.createElement("td", null, order.status), /*#__PURE__*/React.createElement("td", null, "Submitted"));else return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, order.id), /*#__PURE__*/React.createElement("td", null, order.booktitle), /*#__PURE__*/React.createElement("td", null, order.created ? order.created.toDateString() : ''), /*#__PURE__*/React.createElement("td", null, order.status), /*#__PURE__*/React.createElement("td", null, "Unable to add review"));
}

function OrderTable(props) {
  var orderRows = props.orders.map(function (order) {
    return /*#__PURE__*/React.createElement(OrderRow, {
      key: order.id,
      order: order
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "od_table_container"
  }, /*#__PURE__*/React.createElement("table", {
    className: "od_table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Book"), /*#__PURE__*/React.createElement("th", null, "Created Date"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Review"))), /*#__PURE__*/React.createElement("tbody", null, orderRows)));
}

function OrderPage(props) {
  var orders = props.orders;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "od_container w"
  }, /*#__PURE__*/React.createElement("h1", null, " My Orders"), /*#__PURE__*/React.createElement(OrderTable, {
    orders: orders
  })), /*#__PURE__*/React.createElement(Footer, null));
} // 8. Review Page
// Star Component


function Star(_ref) {
  var marked = _ref.marked,
      starId = _ref.starId;
  return /*#__PURE__*/React.createElement("span", {
    "star-id": starId,
    style: {
      color: "#ff9933"
    },
    role: "button"
  }, marked ? "\u2605" : "\u2606");
} // Star Rating


function StarRating(props) {
  // rating display
  var _React$useState = React.useState(typeof props.rating == "number" ? props.rating : 0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      rating = _React$useState2[0],
      setRating = _React$useState2[1]; // hover setting


  var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selection = _React$useState4[0],
      setSelection = _React$useState4[1];

  var hoverOver = function hoverOver(event) {
    var val = 0;
    if (event && event.target && event.target.getAttribute("star-id")) val = event.target.getAttribute("star-id");
    setSelection(val);
  }; // console.log(rating)


  var handleClick = function handleClick(event) {
    setRating(event.target.getAttribute("star-id") || rating);
    props.getRating(rating);
  };

  return /*#__PURE__*/React.createElement("div", {
    // hover setting
    onMouseOut: function onMouseOut() {
      return hoverOver(null);
    } // click to choose rating
    ,
    onClick: handleClick,
    onMouseOver: hoverOver
  }, Array.from({
    length: 5
  }, function (v, i) {
    return /*#__PURE__*/React.createElement(Star, {
      starId: i + 1,
      key: "star_".concat(i + 1, " "),
      marked: selection ? selection >= i + 1 : rating >= i + 1
    });
  }));
}

var Review = /*#__PURE__*/function (_React$Component9) {
  _inherits(Review, _React$Component9);

  var _super9 = _createSuper(Review);

  function Review() {
    var _this5;

    _classCallCheck(this, Review);

    _this5 = _super9.call(this);
    _this5.state = {
      rating: 0
    };
    _this5.getRating = _this5.getRating.bind(_assertThisInitialized(_this5));
    _this5.handleAdd = _this5.handleAdd.bind(_assertThisInitialized(_this5));
    return _this5;
  }

  _createClass(Review, [{
    key: "getRating",
    value: function getRating(rating) {
      // console.log("hi")
      console.log(rating);
      this.setState({
        rating: rating
      });
    }
  }, {
    key: "handleAdd",
    value: function handleAdd(e) {
      e.preventDefault();
      var form = document.forms.reviewToAdd;
      var review = {
        rating: this.state.rating,
        content: form.content.value
      };
      review.buyerid = 1;
      review.orderid = 1;
      console.log(review);
      this.props.createReview(review);
      form.content.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "r_container w"
      }, /*#__PURE__*/React.createElement("h1", null, " Write a Review"), /*#__PURE__*/React.createElement("form", {
        name: "reviewToAdd",
        onSubmit: this.handleAdd
      }, /*#__PURE__*/React.createElement("p", null, "Rate "), /*#__PURE__*/React.createElement(StarRating, {
        getRating: this.getRating
      }), /*#__PURE__*/React.createElement("div", {
        className: "comment"
      }, /*#__PURE__*/React.createElement("p", null, "Comment: "), /*#__PURE__*/React.createElement("textarea", {
        name: "content",
        type: "text",
        id: "cm"
      })), /*#__PURE__*/React.createElement("div", {
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        className: "comment",
        ref: "comment_in",
        contentEditable: "true"
      }), /*#__PURE__*/React.createElement("div", {
        className: "photo"
      }, /*#__PURE__*/React.createElement("p", null, "Picture/Video(Optional)"), /*#__PURE__*/React.createElement("input", {
        type: "file"
      })), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("button", null, "Submit Review")));
    }
  }]);

  return Review;
}(React.Component);

var ReviewPage = /*#__PURE__*/function (_React$Component10) {
  _inherits(ReviewPage, _React$Component10);

  var _super10 = _createSuper(ReviewPage);

  function ReviewPage() {
    _classCallCheck(this, ReviewPage);

    return _super10.apply(this, arguments);
  }

  _createClass(ReviewPage, [{
    key: "render",
    value: function render() {
      var createReview = this.props.createReview; // this.createReview = this.createReview.bind(this);

      return (
        /*#__PURE__*/
        // display &&
        React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Review, {
          createReview: createReview
        }), /*#__PURE__*/React.createElement(Footer, null))
      );
    }
  }]);

  return ReviewPage;
}(React.Component);

function graphQLFetch(_x) {
  return _graphQLFetch.apply(this, arguments);
} // 9. System page


function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(query) {
    var variables,
        response,
        body,
        result,
        error,
        details,
        _args9 = arguments;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            variables = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
            _context9.prev = 1;
            _context9.next = 4;
            return fetch('/graphql', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: query,
                variables: variables
              })
            });

          case 4:
            response = _context9.sent;
            _context9.next = 7;
            return response.text();

          case 7:
            body = _context9.sent;
            result = JSON.parse(body, jsonDateReviver);

            if (result.errors) {
              error = result.errors[0];

              if (error.extensions.code == 'BAD_USER_INPUT') {
                details = error.extensions.exception.errors.join('\n ');
                alert("".concat(error.message, ":\n ").concat(details));
              } else {
                alert("".concat(error.extensions.code, ": ").concat(error.message));
              }
            }

            return _context9.abrupt("return", result.data);

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](1);
            alert("Error in sending data to server: ".concat(_context9.t0.message));

          case 16:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 13]]);
  }));
  return _graphQLFetch.apply(this, arguments);
}

var Index = /*#__PURE__*/function (_React$Component11) {
  _inherits(Index, _React$Component11);

  var _super11 = _createSuper(Index);

  function Index() {
    var _this6;

    _classCallCheck(this, Index);

    _this6 = _super11.call(this);
    _this6.state = {
      books: [],
      users: [],
      currentUser: {},
      orders: []
    };
    _this6.createBook = _this6.createBook.bind(_assertThisInitialized(_this6));
    _this6.createUser = _this6.createUser.bind(_assertThisInitialized(_this6));
    _this6.checkUser = _this6.checkUser.bind(_assertThisInitialized(_this6));
    _this6.createOrder = _this6.createOrder.bind(_assertThisInitialized(_this6));
    _this6.createReview = _this6.createReview.bind(_assertThisInitialized(_this6));
    return _this6;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadBookData();
      this.loadUserData();
      this.loadOrderData();
    }
  }, {
    key: "loadUserData",
    value: function () {
      var _loadUserData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "query {\n            userList {\n                _id name email phone password purchase sell\n            }\n        }";
                _context.next = 3;
                return graphQLFetch(query);

              case 3:
                data = _context.sent;

                // console.log(data.userList)
                if (data) {
                  this.setState({
                    users: data.userList
                  });
                  console.log(data.userList);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadUserData() {
        return _loadUserData.apply(this, arguments);
      }

      return loadUserData;
    }()
  }, {
    key: "createUser",
    value: function () {
      var _createUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(user) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "mutation userAdd($user: UserInputs!) {\n          userAdd(user: $user)\n        }";
                _context2.next = 3;
                return graphQLFetch(query, {
                  user: user
                });

              case 3:
                data = _context2.sent;

                // this.loadData();
                // console.log(data);
                if (data.userAdd == "Done") {
                  alert("Your registration is successful!");
                } else if (data.userAdd == "duplicated") {
                  alert("The email address has been used, please choose another email");
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createUser(_x2) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "checkUser",
    value: function () {
      var _checkUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(user) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = "mutation userCheck($user: UserCheckInputs!) {\n            userCheck(user: $user)\n        }";
                _context3.next = 3;
                return graphQLFetch(query, {
                  user: user
                });

              case 3:
                data = _context3.sent;

                // this.loadData();
                // console.log(data);
                if (data.userCheck == "notmatch") {
                  alert("Password doesn't match!");
                } else if (data.userCheck == "match") {
                  window.location.href = "http://localhost:3000/#/homepage";
                  alert("You are successfully logged in");
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function checkUser(_x3) {
        return _checkUser.apply(this, arguments);
      }

      return checkUser;
    }()
  }, {
    key: "loadBookData",
    value: function () {
      var _loadBookData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                query = "query {\n          bookList {\n            id title author price description\n            category course photo sellerid\n          }\n        }";
                _context4.next = 3;
                return graphQLFetch(query);

              case 3:
                data = _context4.sent;

                if (data) {
                  this.setState({
                    books: data.bookList
                  });
                }

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadBookData() {
        return _loadBookData.apply(this, arguments);
      }

      return loadBookData;
    }()
  }, {
    key: "createBook",
    value: function () {
      var _createBook = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(book) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                query = "mutation bookAdd($book: BookInputs!) {\n          bookAdd(book: $book) {\n            _id\n          }\n        }";
                _context5.next = 3;
                return graphQLFetch(query, {
                  book: book
                });

              case 3:
                data = _context5.sent;

                if (data) {
                  this.loadBookData();
                  alert("Add successfully!");
                }

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function createBook(_x4) {
        return _createBook.apply(this, arguments);
      }

      return createBook;
    }()
  }, {
    key: "loadOrderData",
    value: function () {
      var _loadOrderData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                query = "query {\n          orderList {\n            id booktitle buyerid status created\n          }\n        }";
                _context6.next = 3;
                return graphQLFetch(query);

              case 3:
                data = _context6.sent;

                if (data) {
                  this.setState({
                    orders: data.orderList
                  });
                }

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function loadOrderData() {
        return _loadOrderData.apply(this, arguments);
      }

      return loadOrderData;
    }()
  }, {
    key: "createOrder",
    value: function () {
      var _createOrder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(order) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                query = "mutation orderAdd($order: OrderInputs!) {\n          orderAdd(order: $order) {\n            _id\n          }\n        }";
                _context7.next = 3;
                return graphQLFetch(query, {
                  order: order
                });

              case 3:
                data = _context7.sent;

                if (data) {
                  this.loadOrderData();
                  alert("Purchase successfully!");
                }

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function createOrder(_x5) {
        return _createOrder.apply(this, arguments);
      }

      return createOrder;
    }()
  }, {
    key: "createReview",
    value: function () {
      var _createReview = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(review) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                query = "mutation reviewAdd($review: ReviewInputs!) {\n          reviewAdd(review: $review)\n        }";
                _context8.next = 3;
                return graphQLFetch(query, {
                  review: review
                });

              case 3:
                data = _context8.sent;

                if (data.reviewAdd == "Done") {
                  alert("Your review is successful!");
                } // else if (data.userAdd == "duplicated") {
                //     alert("The email address has been used, please choose another email")
                // }


              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function createReview(_x6) {
        return _createReview.apply(this, arguments);
      }

      return createReview;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ReactRouterDOM.Switch, null, /*#__PURE__*/React.createElement(ReactRouterDOM.Redirect, {
        exact: true,
        from: "/",
        to: "/homepage"
      }), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
        path: "/homepage"
      }, /*#__PURE__*/React.createElement(Homepage, {
        books: this.state.books
      })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
        path: "/detail"
      }, /*#__PURE__*/React.createElement(Detailpages, {
        books: this.state.books,
        createOrder: this.createOrder
      })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
        path: "/signup"
      }, /*#__PURE__*/React.createElement(Signup, {
        createUser: this.createUser
      })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
        path: "/login"
      }, /*#__PURE__*/React.createElement(Login, {
        checkUser: this.checkUser
      })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
        path: "/order"
      }, /*#__PURE__*/React.createElement(OrderPage, {
        orders: this.state.orders
      })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
        path: "/review"
      }, /*#__PURE__*/React.createElement(ReviewPage, {
        createReview: this.createReview
      })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
        path: "/addbook"
      }, /*#__PURE__*/React.createElement(AddBookPage, {
        createBook: this.createBook
      }))));
    }
  }]);

  return Index;
}(React.Component);

var element = /*#__PURE__*/React.createElement(ReactRouterDOM.HashRouter, null, /*#__PURE__*/React.createElement(Index, null));
ReactDOM.render(element, document.getElementById('content'));