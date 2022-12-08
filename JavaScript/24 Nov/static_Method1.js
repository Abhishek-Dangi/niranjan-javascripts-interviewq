class test{
    static display() {
        return "Static method invoked";
    }
    static display() {
        return "Static method invoked again and overwrite previous method";
    }
}

console.log(test.display());