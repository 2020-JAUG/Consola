let player;
function onYouTubeIframeAPIReady() {

    player = new YT.Player('player', {

        height: '303.5',
        width: '527.5',
        videoId: 'XL0MRDkLq6k',
        playerVars: {
            controls: 0
        }
    });

        let button = document.getElementById("on");

        button.addEventListener('click', play, false);
}

function play() {

    if (player.getPlayerState() == YT.PlayerState.PLAYING) {
        player.stopVideo();
    } else {
        player.playVideo();
    }
}