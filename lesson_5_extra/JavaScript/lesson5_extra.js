let options = {
  era: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
	},
daty = new Date(2014, 8, 6, 4, 9, 9);
daty.toLocaleString("ru", options);
date = daty.toString();
console.log(date);

function zeroDate(dat){
	if(dat[8] = 0) {
	
	console.log(dat);
	}
/*	if(dat.getDate(date) < 10) {
		dat.setDate(["0" + date]);
		}*/
}

zeroDate(date);

document.write(date);
