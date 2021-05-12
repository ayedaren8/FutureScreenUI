import Dialog from './dialog/src/main.js';
import { toggleFullScreen } from './utils';
import amap from './amap/index.js';
import button from './button/index.js';
import card from './card/index.js';
import digitalblock from './digital-block/index.js';
import keyvisual from './key-visual/index.js';
import linechart from './line-chart/index.js';
import list from './list/index.js';
import marquee from './marquee/index.js';
import panel from './panel/index.js';
import piechart from './pie-chart/index.js';
import statuslabel from './status-label/index.js';
import title from './title/index.js';
import videoplayer from './video-player/index.js';
const components = [
	amap,
	button,
	card,
	digitalblock,
	keyvisual,
	linechart,
	list,
	marquee,
	panel,
	piechart,
	statuslabel,
	title,
	videoplayer,
];
const install = function(Vue) {
	Vue.prototype.$fullscreen = toggleFullScreen;
	Vue.prototype.$Dialog = Dialog;
	components.forEach((item) => {
		Vue.component(item.name, item);
	});
};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}
export default {
	install,
	amap,
	button,
	card,
	digitalblock,
	keyvisual,
	linechart,
	list,
	marquee,
	panel,
	piechart,
	statuslabel,
	title,
	videoplayer,
};
