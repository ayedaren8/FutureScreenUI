import fsScrollInfoBar from './src/fsScrollInfoBar';
fsScrollInfoBar.install = function(Vue) {
	Vue.component(fsScrollInfoBar.name, fsScrollInfoBar);
};

export default fsScrollInfoBar;
