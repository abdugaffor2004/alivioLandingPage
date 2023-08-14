////////////////////////////////// MOBILE MENU\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const menuBtn = document.querySelector('.menu-btn')
const menuIcon = document.querySelector('.menu-btn-icon')
const mobileMenu = document.querySelector('.mobile-menu')

menuBtn.addEventListener('click',() =>{
    menuIcon.classList.toggle('active')
    mobileMenu.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
})

/////////////////////////////////// VIDEO \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const videoPlay = document.querySelector('.video-play')
// const videoPause = document.querySelector('.video-pause')

const videoBtn = document.querySelector('#video-story-btn')
const videoBtnIcon = document.querySelector('#video-story-btn-icon')
const videoFile = document.querySelector('#video-story')


const videoOverlay = document.getElementById('video-story-overlay')



/////////////////////////////// Video play and pause\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const togglePlay = () => videoFile.paused ? videoFile.play(): videoFile.pause()

videoBtn.addEventListener('click', togglePlay)
videoFile.addEventListener('click', togglePlay)
 

const overlayDisapearing = () => videoFile.paused ? videoOverlay.style.opacity = '1' : videoOverlay.style.opacity = '0'

videoBtn.addEventListener('click', overlayDisapearing)
videoFile.addEventListener('play', overlayDisapearing)
videoFile.addEventListener('pause', overlayDisapearing)


