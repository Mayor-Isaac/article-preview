'use strict'
const shareBtn = document.querySelector('.share')
const shareMedia = document.querySelector('.share-media')
shareBtn.addEventListener('click', function(){
    shareMedia.style.opacity = 1
    shareMedia.addEventListener('mouseleave', function(){
        shareMedia.style.opacity = 0
    })
})