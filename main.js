const emailAddress = document.querySelector('.emailAddress')
const notifyButton = document.querySelector('.notify')
const containerInput = document.querySelector('.containerInput')
const msgErro = document.createElement('h1')
notifyButton.addEventListener('click', () => {
	if(emailAddress.value == ''){
		containerInput.appendChild(msgErro)
		msgErro.classList.add('msgErro')
		msgErro.textContent = 'Please provide a valid email'

	}else{
		msgErro.classList.remove('msgErro')
		msgErro.textContent = ''
	}
})