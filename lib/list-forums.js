"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require("./http");

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async function listForums() {
  var $ = await _http2.default.document("");
  return $(".timeline-room .submenu-room-list .submenu-room-item > a").map(function (i, ele) {
    return {
      title: $(ele).find(".title").text(),
      href: $(ele).attr('href')
    };
  }).get();
};