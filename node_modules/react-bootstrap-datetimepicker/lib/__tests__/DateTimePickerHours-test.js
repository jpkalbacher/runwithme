"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _reactAddons = require("react/addons");

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _ConstantsJs = require("../Constants.js");

var _ConstantsJs2 = _interopRequireDefault(_ConstantsJs);

jest.dontMock("../DateTimePickerHours.js");
var TestUtils = _reactAddons2["default"].addons.TestUtils;

describe("DateTimePickerHours", function () {
  var DateTimePickerHours = require("../DateTimePickerHours.js");
  var hours = undefined,
      onSwitchMock = undefined,
      setSelectedHourMock = undefined;

  describe("Controls", function () {

    beforeEach(function () {
      setSelectedHourMock = jest.genMockFunction();
      onSwitchMock = jest.genMockFunction();
      hours = TestUtils.renderIntoDocument(_reactAddons2["default"].createElement(DateTimePickerHours, {
        mode: _ConstantsJs2["default"].MODE_TIME,
        onSwitch: onSwitchMock,
        setSelectedHour: setSelectedHourMock
      }));
    });

    it("calls setSelectedHour when clicking a hour", function () {
      var hour = TestUtils.scryRenderedDOMComponentsWithClass(hours, "hour")[0];
      TestUtils.Simulate.click(hour);
      expect(setSelectedHourMock.mock.calls.length).toBe(1);
    });

    it("calls onSwitch when clicking the switch", function () {
      var switchIcon = TestUtils.findRenderedDOMComponentWithClass(hours, "picker-switch");
      TestUtils.Simulate.click(switchIcon);
      expect(onSwitchMock.mock.calls.length).toBe(1);
    });
  });

  describe("UI", function () {
    beforeEach(function () {
      setSelectedHourMock = jest.genMockFunction();
      onSwitchMock = jest.genMockFunction();
    });

    it("renders the switch if mode is time", function () {
      hours = TestUtils.renderIntoDocument(_reactAddons2["default"].createElement(DateTimePickerHours, {
        mode: _ConstantsJs2["default"].MODE_TIME,
        onSwitch: onSwitchMock,
        setSelectedHour: setSelectedHourMock
      }));
      var switchList = TestUtils.scryRenderedDOMComponentsWithClass(hours, "list-unstyled");
      expect(switchList.length).toBe(1);
    });

    it("does not render the switch if mode is date", function () {
      hours = TestUtils.renderIntoDocument(_reactAddons2["default"].createElement(DateTimePickerHours, {
        mode: _ConstantsJs2["default"].MODE_DATE,
        onSwitch: onSwitchMock,
        setSelectedHour: setSelectedHourMock
      }));
      var switchList = TestUtils.scryRenderedDOMComponentsWithClass(hours, "list-unstyled");
      expect(switchList.length).toBe(0);
    });

    it("renders 24 Hours", function () {
      hours = TestUtils.renderIntoDocument(_reactAddons2["default"].createElement(DateTimePickerHours, {
        mode: _ConstantsJs2["default"].MODE_DATE,
        onSwitch: onSwitchMock,
        setSelectedHour: setSelectedHourMock
      }));
      var hourList = TestUtils.scryRenderedDOMComponentsWithClass(hours, "hour");
      expect(hourList.length).toBe(24);
    });

    it("renders 01 to 24", function () {
      hours = TestUtils.renderIntoDocument(_reactAddons2["default"].createElement(DateTimePickerHours, {
        mode: _ConstantsJs2["default"].MODE_DATE,
        onSwitch: onSwitchMock,
        setSelectedHour: setSelectedHourMock
      }));
      var hourList = TestUtils.scryRenderedDOMComponentsWithClass(hours, "hour");
      expect(hourList.map(function (x) {
        return x.props.children;
      })).toEqual(["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]);
    });
  });
});