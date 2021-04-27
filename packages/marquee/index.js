import fsMarquee from './src/fsMarquee';
fsMarquee.install = function(Vue) {
	Vue.component(fsMarquee.name, fsMarquee);
};

export default fsMarquee;
