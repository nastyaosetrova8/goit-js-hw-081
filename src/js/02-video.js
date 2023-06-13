import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);
 const STORAGE_KEY = 'videoplayer-current-time';

 
 const onPlay = throttle(function (data)
 {
    localStorage.setItem(STORAGE_KEY, data.seconds)
}, 1000);

 player.on('timeupdate', onPlay)
    
 let time = localStorage.getItem(STORAGE_KEY) ;
 if(time !== 0) {
    player.setCurrentTime(time)
 }

