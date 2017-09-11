"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhoneListItem = function (_React$Component) {
    _inherits(PhoneListItem, _React$Component);

    function PhoneListItem() {
        _classCallCheck(this, PhoneListItem);

        return _possibleConstructorReturn(this, (PhoneListItem.__proto__ || Object.getPrototypeOf(PhoneListItem)).apply(this, arguments));
    }

    _createClass(PhoneListItem, [{
        key: "linkHandler",
        value: function linkHandler(e) {
            this.props.onSearchKeyChange(e.target.innerHTML);
            return false;
        }
    }, {
        key: "render",
        value: function render() {
            var phone = this.props.phone;

            return _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                    "td",
                    null,
                    phone.id
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    phone.brand
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    phone.model
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    phone.device_id1
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    phone.device_id2
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    phone.physical_condition
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    phone.date_of_purchase
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(
                        "a",
                        { href: "/phones/" + phone.id, className: "btn btn-default btn-sm" },
                        _react2.default.createElement("span", { className: "glyphicon glyphicon-pencil" }),
                        " Edit"
                    )
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(
                        "button",
                        { type: "button", className: "btn btn-default btn-sm" },
                        _react2.default.createElement("span", { className: "glyphicon glyphicon-remove" }),
                        " Delete"
                    )
                )
            );
        }
    }]);

    return PhoneListItem;
}(_react2.default.Component);

;

exports.default = PhoneListItem;