import fsDialog from './src/fsDialog';
fsDialog.install = function(Vue) {
	Vue.component(fsDialog.name, fsDialog);
};

export default fsDialog;
