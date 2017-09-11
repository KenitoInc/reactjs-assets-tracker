'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PhoneListItem = require('./PhoneListItem');

var _PhoneListItem2 = _interopRequireDefault(_PhoneListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhoneList = function (_React$Component) {
    _inherits(PhoneList, _React$Component);

    function PhoneList() {
        _classCallCheck(this, PhoneList);

        return _possibleConstructorReturn(this, (PhoneList.__proto__ || Object.getPrototypeOf(PhoneList)).apply(this, arguments));
    }

    _createClass(PhoneList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var data = this.props.phones;
            var listItems = data.map(function (phone) {
                return _react2.default.createElement(_PhoneListItem2.default, { key: phone.id, phone: phone, onSearchKeyChange: _this2.props.onSearchKeyChange });
            });

            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-12' },
                    _react2.default.createElement(
                        'table',
                        { className: 'table table-bordered' },
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    'ID'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    'Brand'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    'Model'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    'Imei 1'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    'Imei 2'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    'Condition'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    'Purchase Date'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    'Edit'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    'Delete'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tbody',
                            null,
                            listItems
                        )
                    )
                )
            );
        }
    }]);

    return PhoneList;
}(_react2.default.Component);

;

exports.default = PhoneList;