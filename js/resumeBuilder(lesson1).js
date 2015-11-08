/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
	lesson1

 $("#main").append(["I am Pusheen the cat"]);
 $("#main").append(["<br>"])
 var awesomeThoughts;
 awesomeThoughts = "I am Pusheen the cat and I am AWESOME!";
 console.log(awesomeThoughts);

/* replace part of string*/
 var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
 $("#main").append([funThoughts]);


var name = "Pusheen";
var role = "the Cat";
 var formattedName = HTMLheaderName.replace("%data%",name);
  var formattedRole = HTMLheaderRole.replace("%data%",role);
  /* prepend put at the begging*/
        $("#header").prepend([formattedRole]);
      $("#header").prepend([formattedName]);

 // array
 var mArray = ["cat","cat","cat again"];
 console.log(mArray.length);

 //object
 var bio = {
 	"name":"Pusheen",
 	"role":"the cat",
 	"contact info":"meow",
 }

$("#main").append([bio.name]);

bio.city = "cat city";
bio["food"] = "cat food low fat";
$("#main").append([bio.city]);
$("#main").append([bio.food]);

bio.work = {
	"position":"cat",
	"year" : "today",
	"city":"cat city",
}


bio["education"] = {
	"name":"MEOW",
	"year" : "yesterday",
	"city":"cat city",
}

$("#main").append(["<br>"]);
$("#main").append([bio.work.position]);
$("#main").append([bio.education.name]);
