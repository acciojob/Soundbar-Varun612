const buttons=document.querySelectorAll('.btn');
const stopButton=document.querySelector('.stop');
										
let currentSound=null;
										
buttons.forEach(button => {
	button.addEventListener('click', () => {
		const soundFile=button.getAttribute('data-sound');
		playSound(soundFile);
	});
});

stopButton.addEventListener('click',() => {
	stopSound();
});

function playSound(soundFile) {
		stopSound();
		currentSound=document.createElement('audio');
		currentSound.src=`./sounds/${soundFile}`;
		currentSound.setAttribute('autoplay','true');
		currentSound.setAttribute('controls','true');
		currentSound.style.display='none';
		currentSound.classList.add('audio-player');
		document.body.appendChild(currentSound);

	currentSound.play();
}

function stopSound(){
	if(currentSound) {
		currentSound.pause();
		currentSound.currentTime = 0;//if new sound clicked, make previous sound to zero time
		currentSound.remove();
		currentSound=null;
	}
}