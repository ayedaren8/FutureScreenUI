import fsPanel from './src/fsPanel';
fsPanel.install = function(Vue) {
	Vue.component(fsPanel.name, fsPanel);
};

export default fsPanel;
