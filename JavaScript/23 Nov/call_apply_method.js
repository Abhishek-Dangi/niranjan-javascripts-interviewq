var emp_address = {  
    fullAddress: function() {  
        return this.company + " " + this.city+" "+this.state;  
    }  
}  
var address = {  
    company:"trh",  
    city:"indore",  
    state:"MP",  
}  
  
console.log(emp_address.fullAddress.call(address));   
