let obj={
    name:"john",
    age:20,
    fun:function(){    //anonymous function
        console.log(this.age);
    }
}
obj.fun();

/*let obj={
    name:"john",
    age:20,
    fun:()=>{
        console.log(this.age);
    }
}*/

//arrow function syntax example
let arrFun=() => {
    let a=10;
    console.log("This is arrow function");
    console.log(a);
}

arrFun();
arrFun();
arrFun();

//arrow function with parameters
const loginDetails=(username,password)=>{
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);

    return "Login Successful";
}
let res=loginDetails("admin@123","admin@12");
console.log(res);
console.log(loginDetails("user@123","user@12"));

//Nested Functions
function outerFun(){
    console.log("Outer Executing...");
    let a=10;
    function innerFun(){
        console.log("Inner Executing...");
        return a++;
    }
    return innerFun();
}
let result=outerFun();
console.log(result);

//Any functions accept another function as a parameter

function HomePage(){
    console.log("This is Home Page");
}
function LoginPage(){
    console.log("User Login Successfully");
}
function RegisterPage(){
    console.log("User Register Successfully");
}

HomePage(RegisterPage(), LoginPage());//Call back function


//Callback function
/*function Display(setValues(), getValues()){
    setValues();
    getValues();
}
Display(()=>{

});
*/

//Generator function
function* generatorFun(){
    yield a=10;
    yield b=20;
    console.log("Generator function");
}
let results=generatorFun();
console.log(results.next().value);
console.log(results.next());
console.log(results.next());


//JSON Function(JavaScript Object Notation)

let jsondata={
    "name":"ravi",
    "age":22
}