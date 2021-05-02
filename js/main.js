// We created a function to remove the firts screen
const of = document.querySelector('#of')

of.addEventListener('click', () => {
if(of.removeChild( of.children[0] )) {

}
});


let player;
function onYouTubeIframeAPIReady() {

    player = new YT.Player('player', {

        height: '303.5',
        width: '527.5',
        videoId: 'XL0MRDkLq6k',
        playerVars: {
            controls: 0,
            showinfo: 0,
            start: 2,

            events: {
                'onReady': onPlayerReady,
            }
        }
    });

        let button = document.getElementById('on');
        let volumen = document.getElementById('vol');

        volumen.addEventListener('click',volUp);
        button.addEventListener('click', play, false);
}

function onPlayerReady(event) {
    event.target.playVideo();
    player.pauseVideo();
}

function play() {

    if(player.getPlayerState() == YT.PlayerState.PLAYING) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
}

function volUp() {
    if (player.setVolume() < 50) {
      player.setVolume() = player.setVolume ++, 20;
      sound.volume = currentVolume / 50;
    } else {
      alert("Max Vol")
    }
}