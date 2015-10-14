"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _reactAddons = require("react/addons");

var _reactAddons2 = _interopRequireDefault(_reactAddons);

jest.dontMock("moment");

jest.dontMock("../DateTimePickerYears.js");
var TestUtils = _reactAddons2["default"].addons.TestUtils;

describe("DateTimePickerYears", function () {
  var moment = require("moment");
  var DateTimePickerYears = require("../DateTimePickerYears.js");
  var subtractDecadeMock = undefined,
      addDecadeMock = undefined,
      setViewYearMock = undefined,
      years = undefined;

  beforeEach(function () {
    subtractDecadeMock = jest.genMockFunction();
    addDecadeMock = jest.genMockFunction();
    setViewYearMock = jest.genMockFunction();
    years = TestUtils.renderIntoDocument(_reactAddons2["default"].createElement(DateTimePickerYears, {
      addDecade: addDecadeMock,
      selectedDate: moment(),
      setViewYear: setViewYearMock,
      subtractDecade: subtractDecadeMock,
      viewDate: moment()
    }));
  });

  describe("Controls", function () {
    it("calls subtractDecade when clicking the prev arrow", function () {
      var prevArrow = TestUtils.findRenderedDOMComponentWithClass(years, "prev");
      TestUtils.Simulate.click(prevArrow);
      expect(subtractDecadeMock.mock.calls.length).toBe(1);
    });

    it("calls addDecade when clicking the next arrow", function () {
      var nextArrow = TestUtils.findRenderedDOMComponentWithClass(years, "next");
      TestUtils.Simulate.click(nextArrow);
      expect(addDecadeMock.mock.calls.length).toBe(1);
    });

    it("calls setViewYear when clicking a year", function () {
      var year = TestUtils.findRenderedDOMComponentWithClass(years, "active");
      TestUtils.Simulate.click(year);
      expect(setViewYearMock.mock.calls.length).toBe(1);
    });
  });

  describe("UI", function () {
    it("renders 12 years", function () {
      var yearList = TestUtils.scryRenderedDOMComponentsWithClass(years, "year");
      expect(yearList.length).toBe(12);
    });

    it("renders the decade plus two extra", function () {
      var yearList = TestUtils.scryRenderedDOMComponentsWithClass(years, "year");
      var beginningDecade = parseInt(moment().format("GGGG").substr(0, 3) + 0); // will produce 2010 for 2015.
      var array = [];
      for (var i = 0; i < 12; i++) {
        array.push(beginningDecade + i - 1);
      } // [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
      expect(yearList.map(function (x) {
        return x.props.children;
      })).toEqual(array);
    });

    it("has an active year that is now's year", function () {
      var active = TestUtils.findRenderedDOMComponentWithClass(years, "active");
      expect(active.props.children).toBe(parseInt(moment().format("GGGG")));
    });

    it("has no active year that if viewDate is another decade than selectedDate", function () {
      years = TestUtils.renderIntoDocument(_reactAddons2["default"].createElement(DateTimePickerYears, {
        addDecade: addDecadeMock,
        selectedDate: moment(),
        setViewYear: setViewYearMock,
        subtractDecade: subtractDecadeMock,
        viewDate: moment().add(12, "year")
      }));
      var active = TestUtils.scryRenderedDOMComponentsWithClass(years, "active");
      expect(active.length).toBe(0);
    });
  });
});