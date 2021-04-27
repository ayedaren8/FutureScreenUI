import fsList from './src/fsList';
fsList.install = function(Vue) {
	Vue.component(fsList.name, fsList);
};

export default fsList;
