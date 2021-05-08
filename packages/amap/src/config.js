// 高德地图 key
export const MapKey = 'd9d7b5fedb49f18077512eee5321cc8f';
// 地图限定城市

export const CIDP = { lat: 116.800434, lng: 39.955123 };
export const CIDP_SOURTH = [116.800189, 39.955123];
export const CIDP_NORTH = [116.799793, 39.963474];

export const NOUTH_BUILDINGS = {
	N1: [116.79905, 39.964321],
	N2: [116.799034, 39.964658],
	N3: [116.798127, 39.964313],
	N4: [116.798084, 39.964633],
	N5: [116.798074, 39.963947],
	N6: [116.799109, 39.964021],
	WANGSHU: [116.799758, 39.964235],
	TIANYI: [116.800434, 39.963375],
	CHANGGENG: [116.800182, 39.962372],
	PLAYGROUND: [116.798573, 39.962726],
};

export const extDatas = {
	N1: [0, 24, 6762, 'normal'],
	N2: [1, 22, 4322, 'normal'],
	N3: [0, 22, 1235, 'normal'],
	N4: [0, 63, 1345, 'normal'],
	N5: [1, 74, 9989, 'danger'],
	N6: [0, 87, 8900, 'warning'],
	WANGSHU: [2, 35, 7689, 'warning'],
	TIANYI: [2, 35, 5426, 'normal'],
	CHANGGENG: [0, 22, 8732, 'normal'],
	PLAYGROUND: [0, 21, 1201, 'normal'],
};

export const NOUTH_MARKERS = [
	{
		position: NOUTH_BUILDINGS.N1,
		center: NOUTH_BUILDINGS.N1,
		title: '北辰员1号楼',
		text: '北辰员1号楼',
		id: 'N1',
		get extData() {
			return extDatas[this.id];
		},
	},
	{
		position: NOUTH_BUILDINGS.N2,
		center: NOUTH_BUILDINGS.N2,
		title: '北辰员2号楼',
		text: '北辰员2号楼',
		id: 'N2',
		get extData() {
			return extDatas[this.id];
		},
	},
	{
		position: NOUTH_BUILDINGS.N3,
		center: NOUTH_BUILDINGS.N3,
		title: '北辰员3号楼',
		text: '北辰员3号楼',
		id: 'N3',
		get extData() {
			return extDatas[this.id];
		},
	},
	{
		position: NOUTH_BUILDINGS.N4,
		center: NOUTH_BUILDINGS.N4,
		title: '北辰员4号楼',
		text: '北辰员4号楼',
		id: 'N4',
		get extData() {
			return extDatas[this.id];
		},
	},
	{
		position: NOUTH_BUILDINGS.N5,
		center: NOUTH_BUILDINGS.N5,
		title: '北辰员5号楼',
		text: '北辰员5号楼',
		id: 'N5',
		get extData() {
			return extDatas[this.id];
		},
	},
	{
		position: NOUTH_BUILDINGS.N6,
		center: NOUTH_BUILDINGS.N6,
		title: '北辰员6号楼',
		text: '北辰员6号楼',
		id: 'N6',
		get extData() {
			return extDatas[this.id];
		},
	},
	{
		position: NOUTH_BUILDINGS.WANGSHU,
		center: NOUTH_BUILDINGS.WANGSHU,
		title: '北辰员校号楼餐厅',
		text: '北辰员校号楼餐厅',
		id: 'WANGSHU',
		get extData() {
			return extDatas[this.id];
		},
	},
	{
		position: NOUTH_BUILDINGS.TIANYI,
		center: NOUTH_BUILDINGS.TIANYI,
		title: '天仪楼',
		text: '天仪楼',
		id: 'TIANYI',
		get extData() {
			return extDatas[this.id];
		},
	},
	{
		position: NOUTH_BUILDINGS.CHANGGENG,
		center: NOUTH_BUILDINGS.CHANGGENG,
		title: '长庚楼',
		text: '长庚楼',
		id: 'CHANGGENG',
		get extData() {
			return extDatas[this.id];
		},
	},
	{
		position: NOUTH_BUILDINGS.PLAYGROUND,
		center: NOUTH_BUILDINGS.PLAYGROUND,
		title: '操场',
		text: '操场',
		id: 'PLAYGROUND',
		get extData() {
			return extDatas[this.id];
		},
	},
];

export const markerContent = function(data, status) {
	let color = {
		normal: '#2ed13d',
		warning: '#BB8C0F',
		danger: '#B20000',
	};
	let statusColor = status && status in color ? color[status] : color['normal'];
	let icon = `
	<svg t="1620443403993" style='display:block;' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8436" width="20" height="20"><path d="M896.02 469.27h-45.41C831.35 314.92 709.09 192.66 554.74 173.4v-45.41c0-23.46-19.2-42.66-42.66-42.66-23.47 0-42.66 19.2-42.66 42.66v45.41C315.06 192.65 192.8 314.92 173.54 469.27h-45.41c-23.47 0-42.66 19.2-42.66 42.66 0 23.46 19.2 42.66 42.66 42.66h45.41C192.8 708.94 315.06 831.2 469.41 850.46v45.41c0 23.46 19.2 42.66 42.66 42.66 23.47 0 42.66-19.2 42.66-42.66v-45.41C709.08 831.2 831.34 708.94 850.6 554.59h45.41c23.47 0 42.66-19.2 42.66-42.66 0.01-23.47-19.19-42.66-42.65-42.66z m-131.84 0h-131.8C620.01 433.01 591 404 554.73 391.63V259.82c106.96 18.05 191.4 102.49 209.45 209.45z m-294.77 42.66c0-23.46 19.2-42.66 42.66-42.66 23.47 0 42.66 19.2 42.66 42.66 0 23.46-19.2 42.66-42.66 42.66-23.46 0-42.66-19.2-42.66-42.66z m0-252.11v131.81c-36.26 12.37-65.27 41.38-77.65 77.64h-131.8c18.06-106.96 102.5-191.4 209.45-209.45zM259.96 554.59h131.8c12.37 36.26 41.38 65.27 77.65 77.64v131.81c-106.95-18.06-191.39-102.5-209.45-209.45z m294.77 209.45V632.23c36.26-12.37 65.27-41.38 77.65-77.64h131.8c-18.05 106.95-102.49 191.39-209.45 209.45z" fill="${statusColor}" p-id="8437"></path></svg>
	`;
	let html = `<div style='display: flex;flex-direction: column;align-items: center;justify-content: center; color:#68bac9;font-size:12px'>${icon}<span style="display:block;white-space: nowrap;">${data.title}</span></div>`;
	return html;
};

import Vue from 'vue';
import infoWindow from './infoWindow.vue';

export function getInfoWindow(options) {
	let instance;
	options ? options : {};
	if (!instance) {
		const Constructor = Vue.extend(infoWindow);
		instance = new Constructor({ data: options });
		instance.$mount();
	}
	instance.onClose = null;
	instance.del = instance.$destroy;
	return instance;
}
