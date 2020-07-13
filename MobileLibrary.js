"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
    }
    MobileLibrary.prototype.getname = function () {
        return this.name;
    };
    MobileLibrary.prototype.getlocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.getmobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.setname = function (nuevoName) {
        this.name = nuevoName;
    };
    MobileLibrary.prototype.setmobiles = function (newMobiles) {
        this.mobiles = newMobiles;
    };
    MobileLibrary.prototype.setlocation = function (nuevoLocation) {
        this.location = nuevoLocation;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var sum = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            sum = this.mobiles[i].getPrice() + sum;
            console.log(sum);
        }
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
