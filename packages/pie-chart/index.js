import fsPieChart from './src/fsPieChart';
fsPieChart.install = function(Vue) {
	Vue.component(fsPieChart.name, fsPieChart);
};

export default fsPieChart;
