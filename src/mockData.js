//引入mockjs
import Mock from 'mockjs';
import './queue';
import fixedLenQueue from './queue';
//使用mockjs模拟数据
function mockdata(i, j) {
	return Mock.mock({
		// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
		'data|10': [() => Mock.Random.integer(i, j)],
	}).data;
}

function mockPieData() {
	return Mock.mock({
		'data|5': [{ 'value|1-500': 0, 'name|1': () => Mock.Random.word() }],
	});
}

export function barData() {
	return {
		title: {
			text: '校内各楼宇人员数量',
			subtext: '统计时间：2021年4月5日',
		},
		row: ['天仪楼', '承基楼', '文德楼', '操场', '长庚楼', '体育馆', '餐厅'],
		column: [
			{
				name: '老师',
				data: mockdata(1, 10),
				type: 'bar',
			},
			{
				name: '学生',
				data: mockdata(100, 200),
				type: 'bar',
			},
			{
				name: '其他人员',
				data: mockdata(20, 50),
				type: 'bar',
			},
		],
	};
}

export function pieData() {
	return {
		title: {
			text: '校园各类人员占比',
			subtext: '统计时间：2021年4月5日',
		},
		data: mockPieData().data,
	};
}

let tempValue = new fixedLenQueue();
let tempDate = new fixedLenQueue();

export function lineData() {
	if (tempValue.full()) {
		tempValue.outqueue();
		tempValue.enqueue(Mock.Random.integer(10, 100));
	} else {
		tempValue.enqueue(Mock.Random.integer(10, 100));
	}
	if (tempDate.full()) {
		tempDate.outqueue();
		tempDate.enqueue(new Date().toLocaleTimeString());
	} else {
		tempDate.enqueue(new Date().toLocaleTimeString());
	}
	return {
		title: {
			text: '数据中心出口流量',
			subtext: '统计时间：2021年4月5日',
		},
		row: tempDate.dataStore,
		column: [
			{
				data: tempValue.dataStore,
				type: 'line',
			},
		],
	};
}

export function tableData() {
	let headData = ['事件', '时间'];
	let rowData = [
		['天仪楼8楼消防栓老化，存在漏水现象', new Date().toLocaleTimeString()],
		['承基楼2号电梯发生故障，请及时处理', new Date().toLocaleTimeString()],
		['天水路有校外车辆超速行驶', new Date().toLocaleTimeString()],
		['图书馆四层书库湿度超标', new Date().toLocaleTimeString()],
		['N3525宿舍电力负载异常', new Date().toLocaleTimeString()],
		['N3525宿舍电力负载异常', new Date().toLocaleTimeString()],
		['N3525宿舍电力负载异常', new Date().toLocaleTimeString()],
		['N3525宿舍电力负载异常', new Date().toLocaleTimeString()],
		['N3525宿舍电力负载异常', new Date().toLocaleTimeString()],
	];

	return {
		headData,
		rowData,
	};
}

export function digitalData() {
	return [
		{
			name: '校内人员总数',
			unit: '人',
			number: Mock.Random.integer(7600, 8100),
		},
		{
			name: '流动人员数量',
			unit: '人',
			number: Mock.Random.integer(100, 400),
		},
	];
}
