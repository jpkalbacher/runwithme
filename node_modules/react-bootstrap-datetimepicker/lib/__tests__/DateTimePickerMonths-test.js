"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _reactAddons = require("react/addons");

var _reactAddons2 = _interopRequireDefault(_reactAddons);

jest.dontMock("moment");

jest.dontMock("../DateTimePickerMonths.js");
var TestUtils = _reactAddons2["default"].addons.TestUtils;

describe("DateTimePickerMonths", function () {
  var moment = require("moment");
  var DateTimePickerMonths = require("../DateTimePickerMonths.js");
  var subtractYearMock = undefined,
      addYearMock = undefined,
      setViewMonthMock = undefined,
      showYearsMock = undefined,
      months = undefined;

  beforeEach(function () {
    subtractYearMock = jest.genMockFunction();
    addYearMock = jest.genMockFunction();
    showYearsMock = jest.genMockFunction();
    setViewMonthMock = jest.genMockFunction();
    months = TestUtils.renderIntoDocument(_reactAddons2["default"].createElement(DateTimePickerMonths, {
      addYear: addYearMock,
      selectedDate: moment(),
      setViewMonth: setViewMonthMock,
      showYears: showYearsMock,
      subtractYear: subtractYearMock,
      viewDate: moment()
    }));
  });

  describe("Controls", function () {
    it("calls subtractYear when clicking the prev arrow", function () {
      var prevArrow = TestUtils.findRenderedDOMComponentWithClass(months, "prev");
      TestUtils.Simulate.click(prevArrow);
      expect(subtractYearMock.mock.calls.length).toBe(1);
    });

    it("calls addYear when clicking the next arrow", function () {
      var nextArrow = TestUtils.findRenderedDOMComponentWithClass(months, "next");
      TestUtils.Simulate.click(nextArrow);
      expect(addYearMock.mock.calls.length).toBe(1);
    });

    it("calls showYears when clicking the year", function () {
      var year = TestUtils.findRenderedDOMComponentWithClass(months, "switch");
      TestUtils.Simulate.click(year);
      expect(showYearsMock.mock.calls.length).toBe(1);
    });

    it("calls setViewMonth when clicking a month", function () {
      var month = TestUtils.findRenderedDOMComponentWithClass(months, "active");
      TestUtils.Simulate.click(month);
      expect(setViewMonthMock.mock.calls.length).toBe(1);
    });
  });

  describe("UI", function () {
    it("renders 12 months", function () {
      var monthList = TestUtils.scryRenderedDOMComponentsWithClass(months, "month");
      expect(monthList.length).toBe(12);
    });

    it("rendersJanuary through December", function () {
      var monthList = TestUtils.scryRenderedDOMComponentsWithClass(months, "month");
      expect(monthList.map(function (x) {
        return x.props.children;
      })).toEqual(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
    });

    it("has an active month that is now's month", function () {
      var active = TestUtils.findRenderedDOMComponentWithClass(months, "active");
      expect(active.props.children).toBe(moment().format("MMM"));
    });

    it("has no active month that if viewDate is another year than selectedDate", function () {
      months = TestUtils.renderIntoDocument(_reactAddons2["default"].createElement(DateTimePickerMonths, {
        addYear: addYearMock,
        selectedDate: moment(),
        setViewMonth: setViewMonthMock,
        showYears: showYearsMock,
        subtractYear: subtractYearMock,
        viewDate: moment().add(2, "year")
      }));
      var active = TestUtils.scryRenderedDOMComponentsWithClass(months, "active");
      expect(active.length).toBe(0);
    });
  });
});