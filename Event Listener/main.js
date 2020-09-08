

//document.querySelector("button").addEventListener("click",function(){
//	alert("Hello");
//});

/*
var myVariable = document.querySelector("h1");
myVariable.addEventListener("click",function(){
	alert("hi");
});
*/
var myVariable = document.querySelector("Hi");

myVariable.addEventListener("mouseover",function(){
	myVariable.classList.add("my-style");
});
myVariable.addEventListener("mouseout",function(){
	myVariable.classList.remove("my-style");
});




