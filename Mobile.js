"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setIs5G = function (newIs5G) {
        return this.is5G = newIs5G;
    };
    Mobile.prototype.setCameraNumber = function (newNumber) {
        return this.cameraNumber = newNumber;
    };
    Mobile.prototype.toString = function () {
        console.log("[" + this.getName() + "\n" + this.getModel() + "\n" + this.getTrademark() + "\n" + this.getSdSize() + "\n" + this.getColor() + "\n" + this.getIs5G() + "\n" + this.getCameraNumber() + " cams." + "\n" + this.getPrice() + "]");
    };
    return Mobile;
}());
exports.Mobile = Mobile;
