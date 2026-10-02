funexample();//it can be hoisting when it is a anonymous function

let funexample=function(){
    console.log("==========================================");
    console.log("Anonymous Function");
    console.log("==========================================");
}
funexample();

displayDetails();
//normal function/named functions
function displayDetails(){
    let emp={
        name:"sai",
        email:"sai@example.com",
        salary:10000,
    }
    console.log(emp);
}
displayDetails();

//function with parameters-> when ever we want give input to the function then we need to use functon with parameters



