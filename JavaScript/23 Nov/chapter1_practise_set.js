// chapter1_practise_set
let name = "neer";
let b = 34;
console.log(name + b);
console.log(typeof (name + b));

const obj = {
  id: 1,
  name: "nirnjan",
}
console.log(obj);
console.log(obj.id);
console.log(obj.name);
console.log(obj["id"]);
console.log(obj["name"]);
// const obj=345;
// constent values never changed
obj["name"] = "Himanshu"; // will be re-initialised
console.log(obj["name"]);
obj.sirName = "Patel";
console.log(obj.sirName);
console.log(obj);

const disc = {
  swizzle:"to agitate a beverage with a rod for stirring highballs and cocktails.",
  malic:"pertaining to or derived from apples",
  petrichor:"a distinctive scent, usually described as earthy, pleasant, or sweet, produced by rainfall on very dry ground"
};

console.log(disc.swizzle);
console.log(disc["malic"]);
