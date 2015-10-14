"use strict";

var _extends = require("babel-runtime/helpers/extends")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _reactAddons = require("react/addons");

var _reactAddons2 = _interopRequireDefault(_reactAddons);

jest.dontMock("moment");

jest.dontMock("../DateTimeField.js");
var TestUtils = _reactAddons2["default"].addons.TestUtils;

describe("DateTimeField", function () {
  var moment = require("moment");
  var DateTimeField = require("../DateTimeField.js");
  var happyDate = moment("1990-06-05 07:30");
  var createParent = undefined,
      TestParent = undefined;

  describe("By default", function () {

    it("shows the right date for a given dateTime and inputFormat", function () {
      var component = TestUtils.renderIntoDocument(_reactAddons2["default"].createElement(DateTimeField, { dateTime: happyDate.format("x") }));
      var input = TestUtils.findRenderedDOMComponentWithTag(component, "input");
      expect(input.getDOMNode().value).toBe("06/05/90 7:30 AM");
    });
  });

  describe("When changing props", function () {

    beforeEach(function () {
      TestParent = _reactAddons2["default"].createFactory(_reactAddons2["default"].createClass({
        getInitialState: function getInitialState() {
          return _extends({
            dateTime: happyDate.format("x")
          }, this.props);
        },

        render: function render() {
          return _reactAddons2["default"].createElement(DateTimeField, this.state);
        }
      }));
      createParent = function (initalState) {
        return TestUtils.renderIntoDocument(TestParent(initalState));
      }; // eslint-disable-line
    });

    it("changes the displayed date when dateTime changes", function () {
      var Parent = createParent();
      var input = TestUtils.findRenderedDOMComponentWithTag(Parent, "input");
      expect(input.getDOMNode().value).toBe("06/05/90 7:30 AM");
      Parent.setState({ dateTime: moment("1981-06-04 05:45").format("x") });
      expect(input.getDOMNode().value).toBe("06/04/81 5:45 AM");
    });

    it("changes the displayed format when inputFormat changes", function () {
      var Parent = createParent();
      var input = TestUtils.findRenderedDOMComponentWithTag(Parent, "input");
      expect(input.getDOMNode().value).toBe("06/05/90 7:30 AM");
      Parent.setState({ inputFormat: "x" });
      expect(input.getDOMNode().value).toBe(happyDate.format("x"));
    });

    it("doesn't change the defaultText if dateTime didn't change", function () {
      var Parent = createParent({ defaultText: "Pick a date" });
      var input = TestUtils.findRenderedDOMComponentWithTag(Parent, "input");
      expect(input.getDOMNode().value).toBe("Pick a date");
      Parent.setState({});
      expect(input.getDOMNode().value).toBe("Pick a date");
    });
  });
});