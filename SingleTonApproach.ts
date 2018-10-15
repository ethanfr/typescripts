class Singleton {
    private static singleton: Singleton;
    constructor() {
        if (!Singleton.singleton) {
            Singleton.singleton = this;
            console.log("init steps ... ", this);
        }
        return Singleton.singleton; //EOD this creates java script so return is possible
    }
    add() {console.log("add fn called"); }
}

let  obj1a = new Singleton();
let obj2 = new Singleton();