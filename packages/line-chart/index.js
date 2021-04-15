import fsLineChart from './src/fsLineChart'
fsLineChart.install = function (Vue) {
	Vue.component(fsLineChart.name, fsLineChart)
}

export default fsLineChart;