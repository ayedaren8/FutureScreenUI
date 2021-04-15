export const staticOptions = {
	//坐标轴指示器
	tooltip: { show: true },
	grid: { bottom: '15%', right: '0' },
	xAxis: {
		show: true,
	},
	yAxis: {
		show: true,
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

export function showTitle() {
	if (Object.prototype.toString.call(this.titleObj) === '[object Object]') {
		let title = this.extraOptions.title;
		if (this.titleObj.text) title.text = this.titleObj.text;
		if (this.titleObj.subtext) title.subtext = this.titleObj.subtext;
		this.chartOption.title = title;
	} else {
		this.chartOption.title = { show: true, text: this.titleObj };
	}
}
