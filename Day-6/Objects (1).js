

// new keyword
let product=new Object({name: "laptop",
    price: 70000,
    brand: "HP",
    about: "512 SSD, 16 RAM,i7 core, 3.9 Ghz"
})
console.log(product);

//CRUD operations

let productDetails={
    name: "laptop",
    price: 70000,
    brand: "HP",
    about: "512 SSD, 16 RAM,i7 core, 3.9 Ghz"
}
console.log(productDetails);
console.log(productDetails.name);

let empDetails={
    name: "vivek",
    salary: 950000,
    role: "developer",
    skills: ["system design","Api validations and testing","Deployment"],
    address:{
        city:"Guntur",
        zipcode:534352
    }
};
console.log(empDetails);
console.log(empDetails.salary);
console.log(empDetails.skills[1]);
console.log(empDetails.address.city);

Object.seal(empDetails);//we cant insert or delete the elements in object when we use seal function but we can update the values
Object.seal(empDetails.address);

Object.freeze(empDetails);
Object.freeze(empDetails.address);//we cant insert or delete or update the values the in an object when using the freeze function
//updation
empDetails.salary=150000;
console.log(empDetails.salary);

empDetails.skills[1]="API Integration";
console.log(empDetails.skills);

empDetails.address.city="Tenali";
console.log(empDetails.address.city);
//insertion
empDetails.email="vivek@tcs.in";
empDetails.phone=9494949449;
console.log(empDetails);

empDetails.address.state="AP";
console.log(empDetails);

//deletion
delete empDetails.name;
delete empDetails.address.city;
console.log(empDetails);


//Object inbuilt funstions
console.log("--------------Object inbuilt functions---------------");
console.log(Object.keys(empDetails));
console.log(Object.values(empDetails));
console.log(Object.entries(empDetails));

console.log(Object.isFrozen(empDetails));
console.log(Object.isSealed(empDetails));

