var second = 0;
var minute = 0;
var hour = 0;

var d = new Date();

setInterval(()=>{
	d = new Date();
	hour = d.getHours() * 30 + Math.round(minute / 12);
	minute = d.getMinutes() * 6;
	second = d.getSeconds() * 6 ;

	document.getElementById("hour").style.transform = "rotate("  + hour + "deg)"
	document.getElementById("minutes").style.transform = "rotate("  + minute + "deg)"
	document.getElementById("seconds").style.transform = "rotate("  + second + "deg)"

	
},1000);