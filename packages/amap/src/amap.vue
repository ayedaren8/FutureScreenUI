<template>
	<div id="map" onclick="event.stopPropagation()"></div>
</template>
<script>
import remoteLoad from './remoteLoad.js';
import { MapKey } from './config';
import { initMap } from './initMap';
export default {
	props: ['lat', 'lng'],
	name: 'amap',
	data() {
		return {
			AMapUI: null,
			AMap: null,
			CIDP: { lat: 116.800189, lng: 39.955123 },
		};
	},
	watch: {},
	methods: {
		// 搜索
		// 实例化地图
	},
	async created() {
		// 已载入高德地图API，则直接初始化地图
		if (window.AMap && window.AMapUI && window.Loca) {
			initMap.call(this, 'map');
			// 未载入高德地图API，则先载入API再初始化
		} else {
			await remoteLoad(`http://webapi.amap.com/maps?v=1.4.2&key=${MapKey}`);
			await remoteLoad('http://webapi.amap.com/ui/1.0/main.js');
			await remoteLoad(`http://webapi.amap.com/loca?v=1.3.2&key=${MapKey}`);
			initMap.call(this, 'map');
		}
	},
	mounted() {},
};
</script>

<style lang="css">
#map {
	height: 100vh;
	width: 100vw;
}
</style>
