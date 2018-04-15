"use strict";

var http = require("./http");

module.exports = async function listTopics() {
  var $ = await http.document("");
  return $(".timeline-room .submenu-room-list .submenu-room-item > a").map(function (i, ele) {
    return {
      title: $(ele).find(".title").text(),
      href: $(ele).attr('href')
    };
  }).get();
};