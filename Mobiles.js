"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var Nokia3210 = new mobile_1.Mobile("Nokia3210", "3210", "Nokia", "No SD", "Grey", "No 5G", 0, "66.16(Amazon)");
var iPhone3G = new mobile_1.Mobile("iPhone3G", "3G", "Apple", "No SD", "White", "No 5G", 1, "349(Ebay)");
var Samsung_Galaxy_10 = new mobile_1.Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", "512GB", "Black", "Is 5G", 4, "909(Fabricant)");
Nokia3210.toString();
iPhone3G.toString();
Samsung_Galaxy_10.toString();
Nokia3210.setCameraNumber(4);
Nokia3210.setIs5G("Is 5G");
Nokia3210.toString();
iPhone3G.toString();
Samsung_Galaxy_10.toString();
