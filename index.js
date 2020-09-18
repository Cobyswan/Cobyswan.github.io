let video = document.querySelector("video");
const gif = document.createElement('div');
gif.innerHTML = '<img class="gifBackground" src="https://media.giphy.com/media/GRpBKrZne3AfCbuF6R/giphy.gif" alt="deeplake"></img>';
if (screen.width < 460) {
    console.log(document.querySelector('video'))
    console.log('smaller')
    video.parentNode.replaceChild(gif, video)
}
