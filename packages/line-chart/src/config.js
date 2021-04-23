export const staticOptions = {
	//坐标轴指示器
	tooltip: { show: true },
	grid: { bottom: '15%', right: '0' },
	xAxis: {
		show: true,
		type: 'category',
	},
	yAxis: {
		show: true,
		type: 'value',
		splitLine: { show: false, lineStyle: { opacity: 0.1 } },
	},
	dataZoom: [{ id: 'dataZoomX', type: 'inside', xAxisIndex: [0], filterMode: 'filter' }],
	series: [{ type: 'line', smoooth: true }],
};

export const extraOptions = {
	axisPointer: {
		show: true,
		snap: true,
		lineStyle: {
			type: 'line',
			color: 'rgba(104,186,201,0.6)',
		},
	},
	title: { show: true },
};

export function showAxisPointer() {
	this.chartOption[this.currentCategoryAxis === 'xAxis' ? 'yAxis' : 'xAxis'].axisPointer = this.extraOptions[
		'axisPointer'
	];
}

export function showTitle(titleObj) {
	if (Object.prototype.toString.call(titleObj) === '[object Object]') {
		let title = JSON.parse(JSON.stringify(extraOptions.title));
		if (titleObj.text) title.text = titleObj.text;
		if (titleObj.subtext) title.subtext = titleObj.subtext;
		this.chartOption.title = title;
	} else {
		this.chartOption.title = { show: true, text: titleObj };
	}
}
