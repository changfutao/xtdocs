# echarts 案例

## 案例 1:

页面初加载有很多分类(categroy), 但是前端默认只展示第一个。

```js
// option
const categories = ["苹果", "桃子", "香蕉"];
const selectedOptions = {};
categories.forEach((name, index) => {
  if (index === 0) {
    selectedOptions[name] = true;
  } else {
    selectedOptions[name] = false;
  }
});
const options = {
  legend: {
    data: categories,
    top: "1%",
    textStyle: {
      fontSize: 14,
      fontFamily: "Arial, sans-serif",
      color: "#666",
    },
    type: "scroll", // 当分类条目过多时,类似分页的方式
    selected: selectedOptions,
  },
};
```

## 案例 2:

在一个折线图中, 要实现折线在超过一定数值范围内的颜色发生变化

```js
const option = {
  visualMap: {
    top: 50, // top 和 right 表示visualMap图标位置
    right: 100,
    pieces: [
      { gt: 200, lte: 1000, color: "red" }, // 数值在200 - 1000是红色
    ],
    outOfRange: {
      // 其余数值范围是灰色
      color: "#gray",
    },
  },
};
```

> 注意: 必须要设置 gt 和 lte,否则曲线不显示【必须设置范围】

## 案例 3:

在一个实时刷新的折线图中 legend 保证初始化只有第一个显示, 其余的隐藏

```js
const option = {
    legend: {
        data: [],
        selected: {}
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: []
}
const myChart = document.querySelector('#chart')
let isFirst = true
for(let i = 0; i < 100; i++) {
    const mainData = {'篮球': Math.random() * 100, '足球': Math.random() * 100, '棒球': Math.random() * 100 }
    const d = new Date()
    option.xAxis.data.push(d)
    const legendData = []
    const legendOption = {}
    let index = 1
    for(const [key, value] of Object.entries(mainData)) {
        if(!this.legend.data.includes(key)) {
            legendData.push(key)
            if(index == 1) {
                legendOption[key] = true
            } else {
                legendOption[key] = false
            }
            index++

        }
       const obj = option.series.find(a => a.name == key)
       if(!obj) {
           option.series.push({
               name: key,
               data: [value],
               type: 'line',
               smooth: true
           })
       } else {
           obj.data.push(value)
       }
    }
    if(isFirst) {
      myChart.setOption(option)
      isFirst = false
    } else {
      myChart.setOption({ series: option.series, xAxis: {data: option,xAxis.data} })
    }
}
```
