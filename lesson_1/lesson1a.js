var num = 33721;
var stringNum = "";
stringNum = num;
var orderNumb = ('' + num).split('');
var multip = 1;
for (var i = 0; i <= 4; i++){
	multip = multip * orderNumb[i];
}
console.log(multip);
multip = Math.pow(multip, 3);
var twoNum = "" + multip;
alert(twoNum[0] + "" + twoNum[1]);