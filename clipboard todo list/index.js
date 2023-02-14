
const btn = document.getElementById("btn-add");
let list = document.getElementById("list-container");
let text = document.getElementById("text");
let lock = document.querySelector(".lock");

let closeBtn = "<button onclick='destroy(this)' class='close-btn'>&#x2717;</button>"

function addItem() {
	list.innerHTML += "<li>" + text.value + `${closeBtn}</li>`;
	text.value = "";				
}

function check() {
	if (text.value !=="" && list.childElementCount<14) {
		addItem();
	} else if (text.value !=="" && list.childElementCount === 14){
		addItem();
		lock.src = "Images/lock.png";
	}
}

function destroy(el) {
	el.parentNode.remove();
	lock.src = "Images/unlock.png";
}

btn.addEventListener('click', check);

text.addEventListener('keydown', (e)=> {
	if (e.key === "Enter") {
		check();
	}
})
