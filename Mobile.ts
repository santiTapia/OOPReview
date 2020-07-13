

export class Mobile {

    private name
    private model
    private trademark
    private sdSize
    private color
    private is5G
    private cameraNumber
    private price
    
    constructor(name: string, model: string, trademark: string, sdSize: string, color: string, is5G: string, cameraNumber: number, price: string) {

        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }

    getName () {
        return this.name;
    }

    getModel () {
        return this.model;
    }

    getTrademark () {
        return this.trademark;
    }

    getSdSize () {
        return this.sdSize;
    }

    getColor () {
        return this.color;
    }

    getIs5G () {
        return this.is5G;
    }

    getCameraNumber () {
        return this.cameraNumber;
    }

    getPrice () {
        return this.price;
    }

    setIs5G (newIs5G) {
        return this.is5G = newIs5G;
    }

    setCameraNumber (newNumber) {
        return this.cameraNumber = newNumber;
    }

    toString () {
        console.log("[" + this.getName() + "\n" + this.getModel() + "\n" + this.getTrademark() + "\n" + this.getSdSize() + "\n" + this.getColor() + "\n" + this.getIs5G() + "\n" + this.getCameraNumber() + " cams." + "\n" + this.getPrice() + "]");
    }

    //EJERCICIO 4: atributos privados y metodos geters y seters.

    //EJERCICIO 5: segundo metodo para masotrar atributos.

    toStringEJ5 () {
        console.log("The characteristics of the mobile '" + this.getName() + "' are: " + "\n" + "Name: " + this.getName() + "\n" + "Model: " + this.getModel() + "\n" + "Trademark: " + this.getTrademark() + "\n" + "SD size: " + this.getSdSize() + "\n" + "Color: " + this.getColor() + "\n" + "Is 5g? " + this.getIs5G() + "\n" + "Number of cameras: " + this.getCameraNumber());
    }
}
