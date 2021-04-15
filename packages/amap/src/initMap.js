import { area, CIDP_NORTH } from './config';
export function initMap(id) {
	// let AMapUI = (this.AMapUI = window.AMapUI);
	let AMap = (this.AMap = window.AMap);
	let Loca = (this.Loca = window.Loca);
	var colors = ['#035594', '#117aab', '#28a2b8', '#64c4c1', '#86cfbb'];
	var map = new AMap.Map(id, {
		mapStyle: 'amap://styles/darkblue',
		features: ['bg', 'road', 'point', 'building'],
		center: CIDP_NORTH,
		zoom: 33,
		pitch: 0,
		viewMode: '3D',
	});

	var layer = new Loca.PolygonLayer({
		map: map,
		fitView: false,
	});

	layer.setData(area, {
		lnglat: 'lnglat',
	});

	layer.setOptions({
		style: {
			opacity: 0.76,
			color: function(res) {
				var index = res.index;
				return colors[index % colors.length];
			},
			height: function() {
				return Math.random() * 500 + 100;
			},
		},
	});

	layer.render();
}
