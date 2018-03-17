"use strict";
exports.__esModule = true;
var Model_1 = require("./Model");
var $ = require("jquery");
var m = new Model_1.Alerts();
m.Messages = ['Great new feature'];
function DisplayAlerts() {
    $("#alerts").append(m.Messages.join());
}
exports.DisplayAlerts = DisplayAlerts;
