import fsVideoPlayer from './src/fsVideoPlayer';
fsVideoPlayer.install = function(Vue) {
	Vue.component(fsVideoPlayer.name, fsVideoPlayer);
};

export default fsVideoPlayer;
