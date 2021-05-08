import { CIDP_NORTH, NOUTH_MARKERS, markerContent, getInfoWindow } from './config';
export function initMap(id) {
	// let AMapUI = (this.AMapUI = window.AMapUI);
	let AMap = (this.AMap = window.AMap);
	var map = new AMap.Map(id, {
		mapStyle: 'amap://styles/darkblue',
		features: ['bg', 'road', 'building'],
		center: CIDP_NORTH,
		zoom: 19,
		zoomEnable: false,
		pitch: 0,
	});

	map.on('click', function(ev) {
		console.log(ev);
		var lnglat = ev.lnglat;
		console.log([lnglat.lng, lnglat.lat]);
	});
	const base_circle = {
		radius: 2, // 圆半径
		fillColor: '#68bac9', // 圆形填充颜色
		strokeColor: '#68bac9', // 描边颜色
		strokeWeight: 1, // 描边宽度
	};

	let markerList = NOUTH_MARKERS.map((e) => {
		console.log(e.extData[3]);
		return new AMap.Marker(
			Object.assign({}, e, base_circle, {
				content: markerContent(e, e.extData[3]),
			})
		);
	});

	markerList.forEach((e) => {
		e.on('click', function(ev) {
			map.panTo(ev.lnglat);
			let instance = getInfoWindow(ev);
			let infoWindow = new AMap.InfoWindow({
				isCustom: true,
				content: instance.$el, //传入 dom 对象，或者 html 字符串
			});
			instance.onClose = function() {
				map.panTo(CIDP_NORTH);
				infoWindow.close();
			};
			infoWindow.on('close', function() {
				instance.del();
			});
			// 打开信息窗体
			infoWindow.open(map, ev.lnglat);
		});
	});
	map.add(markerList);
}
