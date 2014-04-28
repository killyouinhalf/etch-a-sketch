$(document).ready(add_div)
$(document).ready(add_p)

function add_div() {
	var div = document.createElement('div');
	document.body.appendChild(div);
};

function add_p() {
	var dv = document.createElement("p");
	dv.innerHTML = '<wrapper class="square"';
	document.getElementById('square').appendChild(dv) 
}