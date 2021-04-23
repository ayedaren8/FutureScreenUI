(function(root, factory) {
	// eslint-disable-next-line no-undef
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		// eslint-disable-next-line no-undef
		define(['exports', 'echarts'], factory);
	} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		// CommonJS
		factory(exports, require('echarts'));
	} else {
		// Browser globals
		factory({}, root.echarts);
	}
})(this, function(exports, echarts) {
	var log = function(msg) {
		if (typeof console !== 'undefined') {
			console && console.error && console.error(msg);
		}
	};
	if (!echarts) {
		log('ECharts is not Loaded');
		return;
	}
	echarts.registerTheme('chalk', {
		'color': [
			'rgba(104,186,201,0.8)',
			'rgba(104,186,201,0.6)',
			'rgba(38,164,181,0.29)',
			'#7ea9ff',
			'#97ffb4',
			'#333333',
		],
		'textStyle': {},
		'title': {
			'textStyle': {
				'color': 'rgba(104,186,201,.9)',
			},
			'subtextStyle': {
				'color': 'rgba(104,186,201,.7)',
			},
		},
		'line': {
			'itemStyle': {
				'borderWidth': '4',
			},
			'lineStyle': {
				'width': '3',
			},
			'symbolSize': '0',
			'symbol': 'circle',
			'smooth': false,
		},
		'radar': {
			'itemStyle': {
				'borderWidth': '4',
			},
			'lineStyle': {
				'width': '3',
			},
			'symbolSize': '0',
			'symbol': 'circle',
			'smooth': true,
		},
		'bar': {
			'itemStyle': {
				'barBorderWidth': '0',
				'barBorderColor': 'rgba(255,255,255,0.59)',
			},
		},
		'pie': {
			'itemStyle': {
				'borderWidth': '0',
				'borderColor': 'rgba(255,255,255,0.59)',
			},
		},
		'scatter': {
			'itemStyle': {
				'borderWidth': '0',
				'borderColor': 'rgba(255,255,255,0.59)',
			},
		},
		'boxplot': {
			'itemStyle': {
				'borderWidth': '0',
				'borderColor': 'rgba(255,255,255,0.59)',
			},
		},
		'parallel': {
			'itemStyle': {
				'borderWidth': '0',
				'borderColor': 'rgba(255,255,255,0.59)',
			},
		},
		'sankey': {
			'itemStyle': {
				'borderWidth': '0',
				'borderColor': 'rgba(255,255,255,0.59)',
			},
		},
		'funnel': {
			'itemStyle': {
				'borderWidth': '0',
				'borderColor': 'rgba(255,255,255,0.59)',
			},
		},
		'gauge': {
			'itemStyle': {
				'borderWidth': '0',
				'borderColor': 'rgba(255,255,255,0.59)',
			},
		},
		'candlestick': {
			'itemStyle': {
				'color': '#e04831',
				'color0': '#14b352',
				'borderColor': '#e04831',
				'borderColor0': '#14b352',
				'borderWidth': '2',
			},
		},
		'graph': {
			'itemStyle': {
				'borderWidth': '0',
				'borderColor': 'rgba(255,255,255,0.59)',
			},
			'lineStyle': {
				'width': '1',
				'color': '#ffffff',
			},
			'symbolSize': '0',
			'symbol': 'circle',
			'smooth': true,
			'color': ['#68bac9', 'rgba(105,191,212,0.61)', 'rgba(38,164,181,0.29)', '#7ea9ff', '#97ffb4', '#333333'],
			'label': {
				'color': '#c9e6eb',
			},
		},
		'map': {
			'itemStyle': {
				'normal': {
					'areaColor': '#f3f3f3',
					'borderColor': '#999999',
					'borderWidth': 0.5,
				},
				'emphasis': {
					'areaColor': 'rgba(255,178,72,1)',
					'borderColor': '#eb8146',
					'borderWidth': 1,
				},
			},
			'label': {
				'normal': {
					'textStyle': {
						'color': '#893448',
					},
				},
				'emphasis': {
					'textStyle': {
						'color': 'rgb(137,52,72)',
					},
				},
			},
		},
		'geo': {
			'itemStyle': {
				'normal': {
					'areaColor': '#f3f3f3',
					'borderColor': '#999999',
					'borderWidth': 0.5,
				},
				'emphasis': {
					'areaColor': 'rgba(255,178,72,1)',
					'borderColor': '#eb8146',
					'borderWidth': 1,
				},
			},
			'label': {
				'normal': {
					'textStyle': {
						'color': '#893448',
					},
				},
				'emphasis': {
					'textStyle': {
						'color': 'rgb(137,52,72)',
					},
				},
			},
		},
		'categoryAxis': {
			'axisLine': {
				'show': true,
				'lineStyle': {
					'color': 'rgba(104,186,201,.4)',
				},
			},
			'axisTick': {
				'show': false,
				'lineStyle': {
					'color': '#333',
				},
			},
			'axisLabel': {
				'show': true,
				'textStyle': {
					'color': 'rgba(255,255,255,0.62)',
				},
			},
			'splitLine': {
				'show': false,
				'lineStyle': {
					'color': ['rgba(104,186,201,.2)'],
				},
			},
			'splitArea': {
				'show': false,
				'areaStyle': {
					'color': ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
				},
			},
		},
		'valueAxis': {
			'axisLine': {
				'show': true,
				'lineStyle': {
					'color': 'rgba(104,186,201,.4)',
				},
			},
			'axisTick': {
				'show': false,
				'lineStyle': {
					'color': '#333',
				},
			},
			'axisLabel': {
				'show': true,
				'textStyle': {
					'color': 'rgba(255,255,255,0.62)',
				},
			},
			'splitLine': {
				'show': false,
				'lineStyle': {
					'color': ['#e6e6e6'],
				},
			},
			'splitArea': {
				'show': false,
				'areaStyle': {
					'color': ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
				},
			},
		},
		'logAxis': {
			'axisLine': {
				'show': true,
				'lineStyle': {
					'color': 'rgba(104,186,201,.4)',
				},
			},
			'axisTick': {
				'show': false,
				'lineStyle': {
					'color': '#333',
				},
			},
			'axisLabel': {
				'show': true,
				'textStyle': {
					'color': 'rgba(255,255,255,0.62)',
				},
			},
			'splitLine': {
				'show': false,
				'lineStyle': {
					'color': ['#e6e6e6'],
				},
			},
			'splitArea': {
				'show': false,
				'areaStyle': {
					'color': ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
				},
			},
		},
		'timeAxis': {
			'axisLine': {
				'show': true,
				'lineStyle': {
					'color': 'rgba(255,255,255,0.29)',
				},
			},
			'axisTick': {
				'show': false,
				'lineStyle': {
					'color': '#333',
				},
			},
			'axisLabel': {
				'show': true,
				'textStyle': {
					'color': 'rgba(255,255,255,0.62)',
				},
			},
			'splitLine': {
				'show': false,
				'lineStyle': {
					'color': ['#e6e6e6'],
				},
			},
			'splitArea': {
				'show': false,
				'areaStyle': {
					'color': ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
				},
			},
		},
		'toolbox': {
			'iconStyle': {
				'normal': {
					'borderColor': 'rgba(255,255,255,0.6)',
				},
				'emphasis': {
					'borderColor': '#ffffff',
				},
			},
		},
		'legend': {
			'textStyle': {
				'color': 'rgba(255,255,255,0.61)',
			},
		},
		'tooltip': {
			'axisPointer': {
				'lineStyle': {
					'color': '#cccccc',
					'width': 1,
				},
				'crossStyle': {
					'color': '#cccccc',
					'width': 1,
				},
			},
		},
		'timeline': {
			'lineStyle': {
				'color': '#85b2db',
				'width': '1',
			},
			'itemStyle': {
				'normal': {
					'color': '#85b2db',
					'borderWidth': 1,
				},
				'emphasis': {
					'color': '#d7fffa',
				},
			},
			'controlStyle': {
				'normal': {
					'color': '#87f7cf',
					'borderColor': '#87f7cf',
					'borderWidth': '1',
				},
				'emphasis': {
					'color': '#87f7cf',
					'borderColor': '#87f7cf',
					'borderWidth': '1',
				},
			},
			'checkpointStyle': {
				'color': '#fcda97',
				'borderColor': '#fcda97',
			},
			'label': {
				'normal': {
					'textStyle': {
						'color': '#85b2db',
					},
				},
				'emphasis': {
					'textStyle': {
						'color': '#85b2db',
					},
				},
			},
		},
		'visualMap': {
			'color': ['#ed6115', '#ffffff', '#68bac9'],
		},
		'dataZoom': {
			'backgroundColor': 'rgba(255,255,255,0)',
			'dataBackgroundColor': 'rgba(114,204,255,1)',
			'fillerColor': 'rgba(114,204,255,0.2)',
			'handleColor': '#72ccff',
			'handleSize': '100%',
			'textStyle': {
				'color': '#333333',
			},
		},
		'markPoint': {
			'label': {
				'color': '#c9e6eb',
			},
			'emphasis': {
				'label': {
					'color': '#c9e6eb',
				},
			},
		},
	});
});
