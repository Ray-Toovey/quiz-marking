//Quiz time!
document.getElementById('mark').addEventListener('click', markquiz)

//Mark Quiz
function markquiz() {
	let count = 0;
	let answer1 = document.getElementById('ans1').value;
	let answer2 = document.getElementById('ans2').value;
	let answer3 = document.getElementById('ans3').value;
	let answer4 = document.getElementById('ans4').value;
	let answer5 = document.getElementById('ans5').value;

	//check answer 1
	if (answer1 == "Geonosis" || answer1 == "2") {
		//update correct
		document.getElementById('img1').src = "images/check.png";
		count ++;
		document.getElementById('totalfinal').innerHTML = count;
	} else {
		//update wrong
		document.getElementById('img1').src = "images/wrong.png";
	}
	//check answer 2
	if (answer2 == "theCIS" || answer2 == "CIS" || answer2 == "2") {
		//update correct
		document.getElementById('img2').src = "images/check.png";
		count ++;
		document.getElementById('totalfinal').innerHTML = count;
	} else {
		//update wrong
		document.getElementById('img2').src = "images/wrong.png";
	}
	//check answer 3
	if (answer3 == "2" || answer3 == "no") {
		//update correct
		document.getElementById('img3').src = "images/check.png";
		count ++;
		document.getElementById('totalfinal').innerHTML = count;
	} else {
		//update wrong
		document.getElementById('img3').src = "images/wrong.png";
	}
	//check answer 4
	if (answer4 == "karina" || answer4 == "queen karina" || answer4 == "2") {
		//update correct
		document.getElementById('img4').src = "images/check.png";
		count ++;
		document.getElementById('totalfinal').innerHTML = count;
	} else {
		//update wrong
		document.getElementById('img4').src = "images/wrong.png";
	
	}
	//check answer 5
	if (answer5 == "princess leia" || answer5 == "leia" || answer5 == "1") {
		//update correct
		document.getElementById('img5').src = "images/check.png";
		count ++;
		document.getElementById('totalfinal').innerHTML = count;
	} else {
		//update wrong
		document.getElementById('img5').src = "images/wrong.png";
	
	}
	if (totalfinal == "5" || totalfinal =="4"){
		doucment.getElementById('truth').innerHTML = "good job"
	} else if (totalfinal =="3"||totalfinal=="2"){
		document.getElementById('truth').innerHTML = "study more"
	} else if (totalfinal =="1"||totalfinal == "0"){
		doucment.getElementById('truth').innerHTML = "why do you even bother..."
	}
//display percentage
Number(count);

percentage = (count / 5) * 100;

document.getElementById('percentfinal').innerHTML = percentage;
document.getElementById('totalfinal').innerHTML = count;

if (count <=2){
	document.getElementById('quote').innerHTML = "pretty bad ngl";
	console.log(count);
} else if (count <=4){
	document.getElementById('quote').innerHTML = "not bad. not bad.";
	console.log(count);
} else {
	document.getElementById('quote').innerHTML = "you're too good for this world...";
	console.log(count);
}
}

