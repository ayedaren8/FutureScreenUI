import amap from './src/amap';
amap.install = function(Vue) {
	Vue.component(amap.name, amap);
};

export default amap;
