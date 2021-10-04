document.getElementById('title').style.fontSize = "40px";
title.style.textAlign = "center";
document.getElementById('title').innerHTML = "COME SEE YOUR FORTUNE";

function color(value){
	document.body.style.backgroundColor=value;
}

function pressed(){
	var changecolor = document.getElementById("inp").value;
	switch(changecolor){
		case "blue":
		document.getElementById('title').style.color = "blue";
		break;
		case "yellow":
		document.getElementById('title').style.color = "yellow";
		break;
		case "green":
		document.getElementById('title').style.color = "green";
		break;
		default:
		document.getElementById('title').style.color = "red";
		break;
	}
}

function getFortune(){
		var num;
		var number001 = pickNumber.value;
		if(number001 == '1'){
			num = 'You will find one million dollars today';
			document.getElementById("random").innerHTML=num;
		}
		if(number001 == '2'){
			num = 'You will lose $10 tomorrow';
			document.getElementById("random").innerHTML=num;
		}
		if(number001 == '3'){
			num = 'You will have an amazing day!';
			document.getElementById("random").innerHTML=num;
		}
		if(number001 == '4'){
			num = 'You will have a terrible day';
			document.getElementById("random").innerHTML=num;
		}
		if(number001 == '5'){
			num = 'You will not like this next month';
			document.getElementById("random").innerHTML=num;
	}
}
