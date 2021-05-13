# 状态标签
用于指示某种状态,一组有三个指示灯，通过状态码数组绑定。
<template>
<div  style="height:70px;position: relative;">
<fs-status-label :position="[0,0]" :status="[1, 1, 1]"></fs-status-label>
</div>
</template>

``` html
<template>
<div  style="height:200px;position: relative;">
<fs-status-label :position="[0,0]" :status="[1, 1, 1]"></fs-status-label>
</div>
</template>
```

| 参数     | 说明                   | 类型          | 可选值          |
| -------- | ---------------------- | ------------- | --------------- |
| position | 位置坐标，原点为左上角 | Array，Object | {x，y},[x,y]    |
| status   | 状态信息               | Array         | [0,0,0]~[1,1,1] |


### 位置
位置属性是按从左上角开始的坐标系，当传入数组时，代表从距左上角的百分比，例如：
``` html
<fs-status-label :position="[10,30]" :status="[1, 1, 1]"></fs-status-label>
```
当传入对象时，代表从距左上角的像素值，例如：
``` html
<fs-status-label :position="{1000,500}" :status="[1, 1, 1]"></fs-status-label>
```


正常状态
<template>
<div  style="height:100px;position: relative;">
<fs-status-label :position="[0,0]" :status="[1, 0, 0]"></fs-status-label>
</div>
</template>

警告状态
<template>
<div  style="height:100px;position: relative;">
<fs-status-label :position="[0,0]" :status="[0, 1, 0]"></fs-status-label>
</div>
</template>

危险状态
<template>
<div  style="height:100px;position: relative;">
<fs-status-label :position="[0,0]" :status="[0, 0, 1]"></fs-status-label>
</div>
</template>


