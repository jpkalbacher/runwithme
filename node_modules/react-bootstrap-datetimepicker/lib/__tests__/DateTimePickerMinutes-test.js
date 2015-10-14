"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _reactAddons = require("react/addons");

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _ConstantsJs = require("../Constants.js");

var _ConstantsJs2 = _interopRequireDefault(_ConstantsJs);

jest.dontMock("../DateTimePickerMinutes.js");
var TestUtils = _reactAddons2["default"].addons.TestUtils;

describe("DateTimePickerMinutes", function () {
  var DateTimePickerMinutes = require("../DateTimePickerMinutes.js");
  var minutes = undefined,
      onSwitchMock = undefined,
      setSelectedMinuteMock = undefined;

  describe("Controls", function () {

    beforeEach(function () {
      setSelectedMinuteMock = jest.genMockFunction();
      onSwitchMock = jest.genMockFunction();
      minutes = TestUtils.renderIntoDocument(_reactAddons2["default"].createElement(DateTimePickerMinutes, {
        mode: _ConstantsJs2["default"].MODE_TIME,
        onSwitch: onSwitchMock,
        setSelectedMinute: setSelectedMinuteMock
      }));
    });

    it("calls setSelectedMinute when clicking a minute", function () {
      var minute = TestUtils.scryRenderedDOMComponentsWithClass(minutes, "minute")[0];
      TestUtils.Simulate.click(minute);
      expect(setSelectedMinuteMock.mock.calls.length).toBe(1);
    });

    it("calls onSwitch when clicking the switch", function () {
      var switchIcon = TestUtils.findRenderedDOMComponentWithClass(minutes, "picker-switch");
      TestUtils.Simulate.click(switchIcon);
      expect(onSwitchMock.mock.calls.length).toBe(1);
    });
  });

  describe("UI", function () {
    beforeEach(function () {
      setSelectedMinuteMock = jest.genMockFunction();
      onSwitchMock = jest.genMockFunction();
    });

    it("renders the switch if mode is time", function () {
      minutes = TestUtils.renderIntoDocument(_reactAddons2["default"].createElement(DateTimePickerMinutes, {
        mode: _ConstantsJs2["default"].MODE_TIME,
        onSwitch: onSwitchMock,
        setSelectedMinute: setSelectedMinuteMock
      }));
      var switchList = TestUtils.scryRenderedDOMComponentsWithClass(minutes, "list-unstyled");
      expect(switchList.length).toBe(1);
    });

    it("does not render the switch if mode is date", function () {
      minutes = TestUtils.renderIntoDocument(_reactAddons2["default"].createElement(DateTimePickerMinutes, {
        mode: _ConstantsJs2["default"].MODE_DATE,
        onSwitch: onSwitchMock,
        setSelectedMinute: setSelectedMinuteMock
      }));
      var switchList = TestUtils.scryRenderedDOMComponentsWithClass(minutes, "list-unstyled");
      expect(switchList.length).toBe(0);
    });

    it("renders 12 different Minutes", function () {
      minutes = TestUtils.renderIntoDocument(_reactAddons2["default"].createElement(DateTimePickerMinutes, {
        mode: _ConstantsJs2["default"].MODE_DATE,
        onSwitch: onSwitchMock,
        setSelectedMinute: setSelectedMinuteMock
      }));
      var minuteList = TestUtils.scryRenderedDOMComponentsWithClass(minutes, "minute");
      expect(minuteList.length).toBe(12);
    });

    it("renders 01 to 24", function () {
      minutes = TestUtils.renderIntoDocument(_reactAddons2["default"].createElement(DateTimePickerMinutes, {
        mode: _ConstantsJs2["default"].MODE_DATE,
        onSwitch: onSwitchMock,
        setSelectedMinute: setSelectedMinuteMock
      }));
      var minuteList = TestUtils.scryRenderedDOMComponentsWithClass(minutes, "minute");
      expect(minuteList.map(function (x) {
        return x.props.children;
      })).toEqual(["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"]);
    });
  });
});