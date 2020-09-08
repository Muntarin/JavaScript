/*
//Area
var base = parseFloat(prompt("Enter Base ="));
var height = parseFloatssss(prompt("Enter Height ="));

var area = base * height;
document.write("Area =" + area);
*/

/*
//Temperature Converter
var farn = parseFloat(prompt("Enter Fahrenheit = "));
var celsius = (farn-32) * (5/9);
document.write("Celsius = " +  celsius);
*/

/*
//Relational Operator-> >,>=,<,<=,==,===,!=,!==
var num1=20;
var num2=10;
document.write(num1>num2);

document.write(20==20);// check value
document.write(20==="20");//check datatype
document.write(20!=20);
*/

/*
//Logical operator-> && , || , !
var num1 =50;
var num2 =30;
var num3 =10;

//document.write(num1>num2 && num1>num3);
document.write(num1<num2 || num1>num3);
*/

/*
//if,else if ,else
//var num = 5;

//if(num % 2 == 0)
//document.write("Even");
//else
//document.write("Odd");

var num = prompt("Enter a number");
if (num>0)
	document.write("Positive");

else if
	document.write("Negative");

else
	document.write("Zero");
*/

/*
//letter grade
var marks = prompt("Enter your marks");
if(marks>=70)
	document.write("A+");
else if(marks>=80)
	document.write("A");
else if(marks>=60)
	document.write("A-");
else if(marks>=50)
	document.write("B");
else if(marks>=40)
	document.write("C");
else if(marks>=33)
	document.write("D");
else
	document.write("F");
*/

/*
//Switch
var digit = prompt("Enter your digit");
switch(digit){
	case "0":
		document.write("Zero");
		break;
	case "1":
		document.write("One");	
		break;
	case "2":
		document.write("Two");
		break;	
	case "3":
		document.write("Three");
		break;	
	case "4":
		document.write("Four");	
		break;
	case "5":
		document.write("Five");	
		break;
	case "6":
		document.write("Six");
		break;	
	case "7":
		document.write("Seven");
		break;	
	case "8":
		document.write("Eight");
		break;	
	case "9":
		document.write("Nine");	
		break;
	default:
		document.write("Not a digit");									
}	
*/

/*
//For Loop
var sum=0;
for(var x=1;x<=10;x++){
	//document.write(" " +x);
	sum=sum+x;
}
//document.write("<h1> End </h1>");
document.write(sum);
*/

/*
//While Loop

//var x=1;//starting
//while(x<=100)//condition
//{
//	document.write(" " +x)
//	x=x+1;//update

//}

var i=1;
var sum=0;

while(i<50){
	if(i%3==0 && i%5==0)
	{
		document.write(" "+i +("<br/>"));
		sum=sum+i;
	}
	i=i+1;
}
document.write(" sum="+sum);
*/

/*
//Do while loop
var i=1;
do{
	document.write(" "+i);
	i++;
}while(i<=10);
*/

/*
//Break & Continue

//for(var i=1;i<=100;i++){
//	document.write(" "+i);
//	if(i==10){
//		break;
//	}
	//document.write(" "+i);
//}	
for(var i=1;i<=100;i++){
	
	if(i%2==0){
		continue;
	}
	document.write(" "+i);
}
*/

/*
//Function
function addition (num1,num2){
	//var num = 5;
	var result = num1 + num2;
	//document.write("Result="+result+"<br/>");
	return result;
}

//addition(6,5);//calling function
document.write(addition(6,5));
*/

/*
//Array->collection of variable

//var names = new Array(10);
//names[1]="Tarin";
//names[2]="Islam";
//document.write(names[1]);

var names=["Mun","Tarin","Islam"];
names.push("Muna");
document.write(names.length +"<br/>");
names.pop();
document.write(names);
*/

/*
//Object->Adding function inside a constructor
function Student(names,Age,cgpa,lang){
	this.name=names;
	this.Age=Age;
	this.cgpa=cgpa;
	this.lang=lang;

	this.display= function(){
		document.write(this.name);
		document.write(this.Age);
		document.write(this.cgpa);
		document.write(this.lang);
	}
}
var student1 =new Student("Muntarin",21,3.8,["Bangali","Hindi"]);
var student2 =new Student(" Islam",22,3.6,["Hindi"]);
var student3 =new Student("Muntarin",29,3.9,["Bangali","English"]);

student1.display();
*/

/*
//Query Selector

//document.querySelector("a").innerHTML ="Menu";
//document.querySelector(".my-div a").innerHTML ="Phone"; //class
document.querySelector("#my-div a").innerHTML ="Mobile";//id
*/























