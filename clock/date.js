
function updateTime() {
	const fullDate = new Date();

	let hh = fullDate.getHours();
	let mm = fullDate.getMinutes();
	let ss = fullDate.getSeconds();

	hh = (hh < 10)? "0" + hh: hh;
	mm = (mm < 10)? "0" + mm: mm;
	ss = (ss < 10)? "0" + ss: ss;

	let time = `${hh} : ${mm} : ${ss}`;

	document.querySelector("#time").innerText = time;
}

function updateDate() {
	const fullDate = new Date();
	const monthList = ['January', 'February', 'March', 'April',
	'May', 'June', 'July', 'August', 'September',
	'October', 'November', 'December'];

	let year = fullDate.getFullYear();
	let month = monthList[fullDate.getMonth()];
	let date = fullDate.getDate();
	let today = `${month} : ${date} : ${year}`;
	document.querySelector("#date").innerText = today;
}

setInterval(updateTime, 1000);
setInterval(updateDate, 1000);
	
