import { toggleFullScreen } from './utils';
import amap from './amap/src/amap';
import button from './button/src/fsButton';
import card from './card/src/fsCard';
import Dialog from './dialog/src/main.js';
import digitalblock from './digital-block/src/fsDigitalBlock';
import keyvisual from './key-visual/src/fsKeyVisual';
import linechart from './line-chart/src/fsLineChart';
import list from './list/src/fsList';
import marquee from './marquee/src/fsMarquee';
import panel from './panel/src/fsPanel';
import piechart from './pie-chart/src/fsPieChart';
import statuslabel from './status-label/src/fsStatusLabel';
import title from './title/src/fsTitle';
import videoplayer from './video-player/src/fsVideoPlayer';

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

	if (typeof window !== 'undefined' && window.Vue) {
		install(window.Vue);
	}
};

export default {
	install,
};
