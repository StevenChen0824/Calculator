const insert = (value) => {
	document.form.textview.value = document.form.textview.value + value;
}

const equal = () => {
	let formula = document.form.textview.value;
	if(formula) {
		document.form.textview.value = eval(formula);
	}
}

const backward = () => {
	let input = document.form.textview.value;
	document.form.textview.value = input.substring(0,  input.length-1);
}

const clean = () => {
	document.form.textview.value = '';
}