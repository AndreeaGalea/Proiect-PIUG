const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const telefon = document.getElementById('telefon');
const mesaj = document.getElementById('mesaj');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const telefonValue = telefon.value.trim();
	const mesajValue = mesaj.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Numele nu poate fi gol');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Emailul nu poate fi gol');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Adresa de email nu este validă');
	} else {
		setSuccessFor(email);
	}
	
	if(telefonValue === '') {
		setErrorFor(telefon, 'Nr. de telefon nu poate fi gol');
	}else if(!isTelefon(telefonValue)) {
		setErrorFor(telefon, 'Nr. de telefon nu este valid');
	} else {
		setSuccessFor(telefon);
	}
	
	if(mesajValue === '') {
		setErrorFor(mesaj, 'Mesajul nu poate fi gol');
	} else{
		setSuccessFor(mesaj);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isTelefon(telefon) {
	return /^[0-9]{10}$/.test(telefon);
}