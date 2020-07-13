

import { Mobile } from "./mobile";


export class MobileLibrary {

    private name: string;
    private location: string; 
    private mobiles: Mobile[];
    private totalPrice: number;

    constructor (name: string, location: string, mobiles: Mobile[], totalPrice: number) {

        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = totalPrice;

    }

    getname() {
        return this.name;
    }

    getlocation() {
        return this.location;
    }

    getmobiles() {
        return this.mobiles;
    }

    setname(nuevoName) {
        this.name = nuevoName;
    }

    setmobiles(newMobiles) {
        this.mobiles = newMobiles;
    }

    setlocation(nuevoLocation) {
        this.location = nuevoLocation;
    }

    private totalPriceCalculation () {
        let sum = 0;
        for(let i=0; i<this.mobiles.length; i++) {
            sum = this.mobiles[i].getPrice() + sum;
            console.log(sum);
        }        
    }

    public showPrice () {
        console.log(this.totalPriceCalculation());
    }

    printLibrary () {
        for (let i = 0; i<this.mobiles.length; i++) {
        console.log("This is all my mobiles: " + "\n");
        console.log("The characteristics of the mobile '" + this.mobiles[i].getName() + "' are: " + "\n" + "Name: " + this.mobiles[i].getName() + "\n" + "Model: " + this.mobiles[i].getModel() + "\n" + "Trademark: " + this.mobiles[i].getTrademark() + "\n" + "SD size: " + this.mobiles[i].getSdSize() + "\n" + "Color: " + this.mobiles[i].getColor() + "\n" + "Is 5g? " + this.mobiles[i].getIs5G() + "\n" + "Number of cameras: " + this.mobiles[i].getCameraNumber());
        console.log("Price overall: " + this.showPrice());
        }
    }
}
