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

var BranchListItem = function (_React$Component) {
    _inherits(BranchListItem, _React$Component);

    function BranchListItem() {
        _classCallCheck(this, BranchListItem);

        return _possibleConstructorReturn(this, (BranchListItem.__proto__ || Object.getPrototypeOf(BranchListItem)).apply(this, arguments));
    }

    _createClass(BranchListItem, [{
        key: "linkHandler",
        value: function linkHandler(e) {
            this.props.onSearchKeyChange(e.target.innerHTML);
            return false;
        }
    }, {
        key: "render",
        value: function render() {
            var branch = this.props.branch;

            return _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                    "td",
                    null,
                    branch.id
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    branch.uuid
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    branch.branch_name
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(
                        "a",
                        { href: "/branch/" + branch.id, className: "btn btn-default btn-sm" },
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

    return BranchListItem;
}(_react2.default.Component);

;

exports.default = BranchListItem;