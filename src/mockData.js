//引入mockjs
import Mock from 'mockjs';
//使用mockjs模拟数据
function mockdata(i, j) {
	return Mock.mock({
		// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
		'data|10': [() => Mock.Random.integer(i, j)],
	}).data;
}

export function chartData() {
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

export const chartData1 = {
	row: ['一', '二', '三', '四', '五', '六', '日'],
	column: [
		{
			name: '2017',
			data: [150, 230, 224, 218, 135, 147, 260],
			type: 'bar',
		},
	],
};

export const chartData2 = {
	row: ['一', '二', '三', '四', '五', '六', '日'],
	column: [
		{
			name: '2017',
			data: [150, 230, 224, 218, 135, 147, 260],
			type: 'line',
		},
	],
};
export const chartData3 = {
	row: ['一', '二', '三', '四', '五', '六', '日'],
	column: [
		{
			name: '2017',
			data: [150, 230, 224, 218, 135, 147, 260],
			type: 'pie',
		},
	],
};
