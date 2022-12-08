// we can use the same method name repeatedly.
    class firstClass {
        add() {
            console.log("First Method")
        }
    }
    class secondClass extends firstClass {
        add() {
            console.log("add = "+(30 + 40));
        }
    }
    class thirdClass extends secondClass {
        add() {
            console.log("Last Method")
        }
    }
    var ob1 = new firstClass();
    var ob2 = new secondClass();
    var ob3 = new thirdClass();
    ob1.add();
    ob2.add();
    ob3.add();
