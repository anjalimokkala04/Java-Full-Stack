//literal way
let arr=[10,20,30,40];
console.log(arr);

//using new keyword
const strings=new Array('java',"javascript",`python`);
console.log(strings);
console.table(strings);

//Array inbuilt functions
let productprices=[400,520,650,780,900,1200,1320,390];
console.log(productprices);
productprices.push(2000,342,434,333,322);
console.log(productprices);
/*productprices.push(arr);
[
  400,
  520,
  650,
  780,
  900,
  1200,
  1320,
  390,
  2000,
  342,
  434,
  333,
  322,
  [ 10, 20, 30, 40 ]
]
console.log(productprices);*/
productprices.push(...arr);//ES6
/*[
   400,  520, 650,  780, 900,
  1200, 1320, 390, 2000, 342,
   434,  333, 322,   10,  20,
    30,   40
]*/
console.log(productprices);

productprices.pop();
console.log(productprices);
productprices.unshift("hello",true);//elemenst added at the beginning of the array
console.log(productprices);
productprices.shift();//removes the first element of the array
console.log(productprices);
productprices.splice(0,2);
console.log(productprices);
productprices.splice(2,3);//removes the elements from the array starting from index 2 and removes 3 elements
console.log(productprices);
productprices.splice(5,0,null,"java",1300);
console.log(productprices);
productprices.splice(1,productprices.length-2,"javascript");
console.log(productprices);
console.log(productprices.slice(1,2));
console.log(productprices.reverse());
console.log(productprices.sort());

let arr1=[2,30,403,2102,393];
let s="javascript";
//for-in loop
for(index in arr1){
    console.log(index);
}
//for-of loop
for(index of arr1){
    console.log(index);
}
for(index of s){
    console.log(index);
}
//for each loop
arr1.forEach((value, index) => {
    console.log(value,"->", index);
});

//map function
let prices=[400,500,100,4500,5000,9000];

console.log("----------prices----------");
console.log(prices);
let discountedprices = prices.map((x)=>{
    return x-x/10;
})

console.log(discountedprices);

let gst=prices.map((x)=>{
    return x+x/100*8;
})
console.log(gst);

const discount=prices.filter((x)=>{
    return x>=500 && x<=5000;
})
console.log(discount);

const totalprice=prices.reduce((acl,val)=>{
    return acl+val;
},500)

console.log(totalprice);
console.log(prices.join(" "));
