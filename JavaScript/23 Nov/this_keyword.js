// this keyword 
var address =
{
  company: "trh",
  city: "indore",
  state: "MP",
  fullAddress: function() {
    return this.company + " " + this.city + " " + this.state;
  }
};

var fetch = address.fullAddress();
console.log(fetch);

// The call() and apply() method allows us to write a method that can be used on different objects.
// call()


// apply()
