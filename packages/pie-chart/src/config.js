const staticOptions = {
	//坐标轴指示器

	tooltip: { show: true },
	label: {
		color: '#68bac9',
	},
	series: [{ type: 'pie', top: '18%' }],
};
const extraOptions = {
	title: { show: true },
};

function showTitle() {
	if (
		Object.prototype.toString.call(this.titleObj) ===
		'[object Object]'
	) {
		let title = this.extraOptions.title;
		if (this.titleObj.text) title.text = this.titleObj.text;
		if (this.titleObj.subtext)
			title.subtext = this.titleObj.subtext;
		this.chartOption.title = title;
	} else {
		this.chartOption.title = {
			show: true,
			text: this.titleObj,
		};
	}
}

module.exports = {
	showTitle,
	staticOptions,
	extraOptions,
};
