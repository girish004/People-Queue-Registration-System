var x = 0;
var size = prompt("Enter the size of the queue", "10");
var flag = 0;
var entries = [];
function getEntries() {
	flag = 0;
	if (x < size) {
		var ele = { name: document.getElementById("name").value, id: document.getElementById("id").value, mob: document.getElementById("mob").value, itm: document.getElementById("itm").value, que: x + 1, time: new Date() };
		for (var i = 0; i < x; i++) {
			if (entries[i].name === ele.name && entries[i].id === ele.id) {
				alert("Already in queue");
				flag = 1;
				break;
			}
			if (entries[i].id === ele.id) {
				alert("ID already taken");
				flag = 1;
				break;
			}
		}
		if (flag == 0) {
			entries.push(ele);
			entries = quickSortID(entries);
			document.getElementById("custadd").style.visibility = "visible";
			document.getElementById("dull").style.visibility = "visible";

			x++;
			if (x == size) {
				alert("Queue full");
				displayTimer();
			}
		}
	}
	else {
		alert("Queue is already full. Please try again later");
	}
}
function sort() {
	var a = document.getElementById("sort").value;
	if (a == "sname")
		entries = quickSortName(entries);
	if (a == "sid")
		entries = quickSortID(entries);
	if (a == "sitem")
		entries = quickSortITM(entries);
	if (a == "sitemd")
		entries = quickSortITMD(entries);
	if (a == "que")
		entries = quickSortque(entries);
	alert("Queue is sorted as per your requirement");
}
function displayTimer() {
	var countDownDate = new Date().getTime();
	countDownDate = countDownDate + 10 * 60000;
	var x = setInterval(function () {
		var now = new Date().getTime();
		var distance = countDownDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
		if (entries.length == 0) { document.getElementById("demo").innerHTML = ""; return;}
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("demo").innerHTML = "The shopping time is finished";
			alert("The time for the registered batch is over");
		}
	}, 1000);
}
function quickSortName(origArray) {

	if (origArray.length <= 1) {
		return origArray;
	}
	else {
		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i].name <= pivot.name) {
				left.push(origArray[i]);
			}
			else {
				right.push(origArray[i]);
			}
		}
		return newArray.concat(quickSortName(left), pivot, quickSortName(right));
	}
}
function quickSortque(origArray) {

	if (origArray.length <= 1) {
		return origArray;
	}
	else {
		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i].que <= pivot.que) {
				left.push(origArray[i]);
			}
			else {
				right.push(origArray[i]);
			}
		}
		return newArray.concat(quickSortque(left), pivot, quickSortque(right));
	}
}
function quickSortID(origArray) {

	if (origArray.length <= 1) {
		return origArray;
	}
	else {
		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (Number(origArray[i].id) <= Number(pivot.id)) {
				left.push(origArray[i]);
			}
			else {
				right.push(origArray[i]);
			}
		}
		return newArray.concat(quickSortID(left), pivot, quickSortID(right));
	}
}
function quickSortITM(origArray) {

	if (origArray.length <= 1) {
		return origArray;
	}
	else {
		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i].itm <= pivot.itm) {
				left.push(origArray[i]);
			}
			else {
				right.push(origArray[i]);
			}
		}
		return newArray.concat(quickSortITM(left), pivot, quickSortITM(right));
	}
}
function quickSortITMD(origArray) {

	if (origArray.length <= 1) {
		return origArray;
	}
	else {
		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i].itm >= pivot.itm) {
				left.push(origArray[i]);
			}
			else {
				right.push(origArray[i]);
			}
		}
		return newArray.concat(quickSortITMD(left), pivot, quickSortITMD(right));
	}
}

function binSearID(origArray, sear) {
	var val = sear;
	var low = 0;
	var high = origArray.length - 1;
	while (low <= high) {
		var mid = Math.floor((low + high) / 2);
		if (origArray[mid].id == val) {
			alert("Customer in position (Sorting by ID):" + Number(mid + 1));
			return 1;
		}
		else if (origArray[mid].id < val) {
			low = mid + 1;
		}
		else {
			high = mid - 1;
		}
	}


}
function visibility() {

	entries = quickSortID(entries);
	var sear = prompt("Enter the id to search", "1");
	var c = binSearID(entries, sear);
	if (c != 1) {
		alert("ID not found");
	}
}

function display() {
	if (entries.length == 0) {
		x = 0;
		document.getElementById("displayempty").style.visibility = "visible";
		document.getElementById("dull").style.visibility = "visible";
		document.getElementById("displaydetails").innerHTML = "Queue empty!";
	}
	else {
		var s = "";
		for (var y = 0; y < entries.length; y++) {
			s += y + 1 + ") Customer " + entries[y].name + "," + " with ID " + entries[y].id + " is in the queue. phno:" + entries[y].mob + ". No. Items: " + entries[y].itm + ", Time :" + entries[y].time + " <br>";
			document.getElementById("displaydetails").innerHTML = s;
			document.getElementById("display").style.visibility = "visible";
			document.getElementById("dull").style.visibility = "visible";
		}

	}
}
function close_display(x) {
	document.getElementById(x).style.visibility = "hidden";
	document.getElementById("dull").style.visibility = "hidden";
}

function Delete() {
	if (entries.length != 0) {
		entries.shift();
		x--;
		document.getElementById("delete").style.visibility = "visible";
		document.getElementById("dull").style.visibility = "visible";
	}
	else {
		alert("No customer in queue");
		document.getElementById("demo").innerHTML = "";
	}
}