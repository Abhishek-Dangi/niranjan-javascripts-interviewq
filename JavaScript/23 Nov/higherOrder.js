// a function which takes another function as an argument or returns a function

// return a function
// const mainFunc = function(name){
// 	return function(m){
//         console.log("Hiii "+name+" "+m);
// 	}
// }
// const anoterFunc = mainFunc('Neer');
// anoterFunc("Called another functions")

// pass function as argument
function greet(name){
	return "Hiii"+name;
}

function greet_name(greeting,message,name){
    console.log(greeting(name)+" "+message);
}
greet_name(greet,'Welcome To GFG',' Neer, ');