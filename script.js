const playPauseBtn = document.getElementById('play-pause-btn');
const calmSound = document.getElementById('calm-sound');
const slideshowContainer = document.getElementById('slideshow-container');

const images = [
    'fotos-1/foto-2.jpg',
    'fotos-1/foto-3.jpg',
    'fotos-1/foto-5.jpg',
    'fotos-1/foto-6.jpg'
];

let currentImageIndex = 0;

images.forEach((imageSrc, index) => {
    const img = document.createElement('img');
    img.src = imageSrc;
    if (index === 0) {
        img.classList.add('active');
    }
    slideshowContainer.appendChild(img);
});

setInterval(() => {
    const currentImage = slideshowContainer.querySelector('img.active');
    currentImage.classList.remove('active');

    currentImageIndex = (currentImageIndex + 1) % images.length;

    const nextImage = slideshowContainer.querySelectorAll('img')[currentImageIndex];
    nextImage.classList.add('active');
}, 5000);

let isPlaying = false;

const fadeAudio = (direction, duration) => {
    const interval = 50;
    const steps = duration / interval;
    let volume = direction === 'in' ? 0 : 1;
    const volumeStep = 1 / steps;

    const fade = setInterval(() => {
        if (direction === 'in') {
            volume = Math.min(1, volume + volumeStep);
        } else {
            volume = Math.max(0, volume - volumeStep);
        }

        calmSound.volume = volume;

        if ((direction === 'in' && volume >= 1) || (direction === 'out' && volume <= 0)) {
            clearInterval(fade);
            if (direction === 'out') {
                calmSound.pause();
            }
        }
    }, interval);
};

playPauseBtn.addEventListener('click', () => {
    if (!isPlaying) {
        calmSound.volume = 0;
        calmSound.play();
        fadeAudio('in', 2000);
        playPauseBtn.textContent = 'Pausar Sonido';
        playPauseBtn.classList.add('playing');
        isPlaying = true;
    } else {
        fadeAudio('out', 2000);
        playPauseBtn.textContent = 'Reproducir Sonido';
        playPauseBtn.classList.remove('playing');
        isPlaying = false;
    }
});
