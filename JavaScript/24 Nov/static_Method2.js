class test{
    constructor() {
        console.log(test.display());
        console.log(this.constructor.display());
}
    static display() {
        return "Static method invoked";
    }
}
var tObj = new test();