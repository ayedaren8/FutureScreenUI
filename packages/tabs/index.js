import fsTab from './src/fsTab';
fsTab.install = function(Vue) {
	Vue.component(fsTab.name, fsTab);
};

export default fsTab;
