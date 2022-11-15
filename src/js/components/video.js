const videoBlock = document.querySelector('.video-block');
const video = videoBlock.querySelector('video');
const playBtn = videoBlock.querySelector('.video-block__play');
const muteBtn = videoBlock.querySelector('.video-block__muted');
const soundSvg = muteBtn.querySelector('use');



videoBlock.addEventListener('click', (evt) => {

	if (evt.target !== muteBtn) {
		if (video.paused) {
			video.play();
			videoBlock.classList.toggle('video-block--played');
			playBtn.classList.toggle('video-block__play--played');
		} else {
			video.pause();
			videoBlock.classList.toggle('video-block--played');
			playBtn.classList.toggle('video-block__play--played');
		}
	}

});

muteBtn.addEventListener('click', () => {
	if (video.muted) {
		video.muted = false;
		soundSvg.setAttribute('href', "images/sprite.svg#sound-on")
	} else {
		video.muted = true;
		soundSvg.setAttribute('href', "images/sprite.svg#mute")
	}
});
