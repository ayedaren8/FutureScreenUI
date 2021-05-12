const fs = require('fs');
const path = require('path');
function componentsScaner() {
	let temp = [];
	let scanerPath = path.resolve(
		__dirname + '../../components'
	);
	Array.prototype
		.concat(temp, fs.readdirSync(scanerPath))
		.forEach((e) => {
			let n = e.split('.');
			n.splice(-1) == 'md' && n[0] !== 'index'
				? temp.push(n[0])
				: null;
		});
	return {
		'/components/': temp,
	};
}

module.exports = {
	title: 'Future Screen UI',
	description: '智慧行业数据可视化组件库',
	cache: false,
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: '/logo.png',
			},
		],
	],
	extraWatchFiles: ['./config.js'],
	themeConfig: {
		search: false,
		logo: '/logo.png',
		nav: [
			{
				text: 'Home',
				link: '/',
			},
			{
				text: '组件',
				link: '/components/',
			},
			{
				text: '设计',
				link: 'https://google.com',
			},
		],
		sidebar: {
			'/components/': [
				'bar-chart',
				'line-chart',
				'button',
				'card',
				'color',
				'dialog',
				'digital-block',
				'fullscreen',
				'list',
				'marquee',
				'panel',
				'pie-chart',
				'status-lable',
				'title',
				'video-player',
				'amap',
			],
		},
	},
};
