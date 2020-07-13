

import { MobileLibrary } from "./mobileLibrary"
import { Mobile } from "../REPASO_FUNDAMENTOS_2/mobile";

let Nokia3210: Mobile = new Mobile("Nokia3210", "3210", "Nokia", "No SD", "Grey", "No 5G", 0, "66.16(Amazon)");
let iPhone3G: Mobile = new Mobile("iPhone3G", "3G", "Apple", "No SD", "White", "No 5G", 1, "349(Ebay)");
let Samsung_Galaxy_10: Mobile = new Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", "512GB", "Black", "Is 5G", 4, "909(Fabricant)");
let Huawei_P_20: Mobile = new Mobile("Huawei P 20", "P 20", "Huawei", "512GB", "Black/Blue/Green", "Is 5G", 3, "199(Amazon)");

let arrayMobiles = [Nokia3210, iPhone3G, Samsung_Galaxy_10, Huawei_P_20];

let Aparatos: MobileLibrary = new MobileLibrary("Mi lista", "Marbella", arrayMobiles, this.showPrice())

console.log(arrayMobiles);
Aparatos.showPrice();
Aparatos.getname();
Aparatos.getlocation();
Aparatos.getmobiles();


//Crear nuevo objeto MobileLibrary:

let iPhoneSE: Mobile = new Mobile("iPhoneSE", "SE 2", "Apple", "No SD", "Red", "Is 5G", 2, "489(Fabricant)");
let iPhone4G: Mobile = new Mobile("iPhone4G", "4G", "Apple", "No SD", "Black", "No 5G", 2, "150(Amazon)");
let SamsungA10: Mobile = new Mobile("SamsungA10", "A10", "Samsung", "512", "Black", "Is 5G", 4, "140(Fabricant)");
let Huawei_Nova_7i: Mobile = new Mobile("Huawei_Nova_7i", "Nova 7i", "Huawei", "512", "Black/Blue/Green", "Is 5G", 4, "169")

let arrayMobiles2 = [iPhoneSE, iPhone4G, SamsungA10, Huawei_Nova_7i];

let Aparatos2: MobileLibrary = new MobileLibrary("Mi segunda lista", "Granada", arrayMobiles2, 54);

Aparatos2.showPrice();
Aparatos2.getname();
Aparatos2.getlocation();
Aparatos2.getmobiles();
