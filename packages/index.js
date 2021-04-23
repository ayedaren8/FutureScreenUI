import button from './button/src/fsButton';
import linechart from './line-chart/src/fsLineChart';
import keyvisual from './key-visual/src/fsKeyVisual';
import piechart from './pie-chart/src/fsPieChart';
import Dialog from './dialog/src/main.js';
import amap from './amap/src/amap';
import title from './title/src/fsTitle';
import { toggleFullScreen } from './utils';

const components = [button, linechart, piechart, keyvisual, amap, title];

const install = function(Vue) {
	Vue.prototype.$fullscreen = toggleFullScreen;
	Vue.prototype.$Dialog = Dialog;
	components.forEach((item) => {
		Vue.component(item.name, item);
	});

	if (typeof window !== 'undefined' && window.Vue) {
		install(window.Vue);
	}
};

export default {
	install,
};
