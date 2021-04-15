# 折线图组件
横向折线图 
竖向折线图（不常用） 
图例开关（多系列默认开启、单系列关闭）
渐变填充开关
指示点类型
数据缩放条

# 需求
可变更类目轴方向
可选择标题副标题
可自定义是否展示某轴
可自定义是否多条数据（智能）

# 抽象
增删改查

## props字段 没有必要
直接boolean
widgetToHidden=[] 
用于隐藏默认展示但不需要的控件
预先提供的可枚举的数组项
需要进行校验无效数据丢弃

widgetToShow=[]
用于展示但事先没有的控件
预先提供的可枚举的数组项
需要进行校验无效数据丢弃

TransCategoryAxis=boolean
保留一个状态
旋转类目轴 将默认水平展示的类目轴改为垂直。

seriesData=multi-dimentional array
数据，category、data
当seriesData.length>2时展示图例。
渲染多条数据
否则直接展示

# 方法
handlerHidden(array){
	循环取单项，
	校验是否有这个key，
	判断层级，
  需要找到父节点删除==>这里需要一个表判断层级关系。
}

handlerShow(array){
	数组去重。
	循环取单项，
	校验是否有这个key，
	判断层级，找到父节点添加默认值===>这里需要一个表判断层级关系
}

## 我需要一个什么样的表
一棵树
第一层配置项
第二层配置项
第...层配置项
第...层配置项
### 配置的原则是什么 最小颗粒度是什么 
能显著改变图形的外观或者交互模式的配置项
## 我需要什么
我需要一个地方插入配置项
## 这个地方怎么来
1.通过默认配置，一些配置项只能出现在某一个地方；
2.通过指定，一些配置项出现的地方有很多；

## 表的结构是怎样的
{
	id:'配置项的唯一索引'，
	name:'配置项的'
	parent:'配置项的父节点'，
	content:'配置项的最小颗粒内容'
}
例如：
[{
	id:0000,
	name:'root',
	parent:'root',
	content:'',
},
{
	id:1000,
	name:'title',
	parent:'root',
	content:'',
},
{
	id:1000,
	name:'title',
	parent:'root',
	content:'',
},
{
	id:1000,
	name:'title',
	parent:'root',
	content:'',
},
]
