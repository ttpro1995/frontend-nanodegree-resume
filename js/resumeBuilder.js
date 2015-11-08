var bio = {
	"name":"Pusheen",
	"role":"cat",
	"welcomeMessage":"meow",
	"contacts":{
		"mobile":"call me in your hearth",
		"email":"meow@emeow.com"
	},
	"Skills":[
		"Meow",
		"Purr",
		"Eat",
		"Sleep"
	]
};

var work = {
	"jobs":[
		{
			"employer":"Mr CatLover",
			"title":"The fantastic Pet Pillow",
			"location":"Sky Garden",
			"dates":"12-11-2014",
			"description":"lying there all day long"
		},
		{"employer":"Mrs CatLover",
			"title":"a extraordinary Cat",
			"location":"Green Garden",
			"dates":"11-10-2014",
			"description":"meow all day long"}
	]
}

var projects = {
	"projects":[
	{
		"title":"How to catch Santa",
		"dates":"Dec 18",
		"description":"Merry Christmas",
		"image":[
		"http://www.pusheen.com/post/38254768792"
		]
	},
	{
		"title":"How to beath the Summer heat",
		"dates":"Aug 03",
		"description":"Meow hot",
		"image":[
		"http://www.pusheen.com/post/57280189571"
		]

	}
	]
}

var education = {
	"schools":[
	{
		"name":"Google",
		"location":"On meow laptop",
		"degree":"nope",
		"majors":["meow majors one","meow majors two"],
		"date":"1-1-2001",
		"url":"www.google.com"
	},
	{	"name":"Catflex",
		"location":"On meow laptop",
		"degree":"nope",
		"majors":["flex mewo one","flex mewo one"],
		"date":"1-1-2010",
		"url":"www.catflix.com"}
	],
	"onlineCourse":[
	{
		"title":"meow",
		"school":"meow",
		"dates":"1-1-1991",
		"url":"meow.meow.meow"
	},
	{	"title":"I am Pusheen the cat",
		"school":"Home",
		"dates":"1-1-2000",
		"url":"http://www.pusheen.com/"}
	]

}

//if statement
if (bio.Skills.length > 0){//if there are any skill
	$("#header").append(HTMLskillsStart);

	var FormattedSkill = HTMLskills.replace("%data%",bio.Skills[0]);
	$("#skills").append(FormattedSkill);
		var FormattedSkill = HTMLskills.replace("%data%",bio.Skills[1]);
	$("#skills").append(FormattedSkill);
		var FormattedSkill = HTMLskills.replace("%data%",bio.Skills[2]);
	$("#skills").append(FormattedSkill);
		var FormattedSkill = HTMLskills.replace("%data%",bio.Skills[3]);
	$("#skills").append(FormattedSkill);

}

//for-in loops
	$("#workExperience").append(HTMLworkStart);
	for (i in work.jobs){
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;

		var formattedDate = HTMLworkDates.replace("%data%",work.jobs[i].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
		var fornattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);

		$(".work-entry:last").append(formattedEmployerTitle+formattedDate+formattedLocation+fornattedDescription);
	}
