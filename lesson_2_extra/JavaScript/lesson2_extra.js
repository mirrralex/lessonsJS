var week = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "<b>Saturday", "Sunday</b>"];

var date = new Date();

var day = (date.getDay()-1);

for(let i=0; i<=6; i++) {

	if(i == day){

		document.write("<i>" + week[i] + "</i><br>");

	} else {

	document.write(week[i] + "<br>");
	
	}
}

var arr = ["356468", "489456", "780246", "3", "1545148", "659412", "74541213"];
for(let i=0; i<=6; i++) {
	let numb = arr[i];
	if(numb[0] == 3 || numb[0] == 7){
		console.log(numb);
	}
}