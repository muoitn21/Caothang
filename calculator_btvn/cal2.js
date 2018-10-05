var result = '';
function addValue(val){
	//alert(1);
	result = result + val;
	console.log(result);
	document.getElementById('result').innerHTML = result;
}
function cal(){
	result = eval(result);
	document.getElementById('result').innerHTML = result;
}
function delelecal(){
	document.getElementById('result').innerHTML = result;
	result = '';
}
function BACK(){
	var lengresult = result.length;
	var newresult = result.substring(0, lengresult - 1);
	document.getElementById('result').innerHTML = newresult;
	result = newresult;
}