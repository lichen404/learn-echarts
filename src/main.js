import echarts from 'echarts'


const width = document.documentElement.clientWidth
const main = document.querySelector('#main')
main.style.width = `${width}px`
main.style.height = `${width * 1.5}px`
const myChart = echarts.init(main, 'dark');
const loadMoreButton = document.querySelector('#loadMore')


const values = [5, 20, 36, 10, 10, 20]
const xData = ["1月", "2月", "3月", "4月", "5月", "6月"]
// 使用指定的配置项和数据显示图表
myChart.setOption({
   baseOption:{
       title: {
           text: 'bug 数',
           show: true,
           right: 20
       },
       tooltip: {
           show: true
       },
       legend: {
           data: ['bug 数']
       },
       xAxis: {
           data: xData
       },
       yAxis: {
           type: 'value'
       },
       series: [{
           type: 'line',
           data: values,
           lineStyle: {
               color: 'blue'
           },
           itemStyle: {
               borderWidth: 10,
               borderColor:'green'
           },
           name: 'bug 数'

       }]
   },
    media:[
        {
            query:{
                maxWidth:500
            },
            option:{
                series:[
                    {
                        itemStyle:{
                            borderWidth: 15,
                            borderColor:'red'
                        }
                    }
                ]
            }

        }
    ]
});

let key = '7'
let value = 20
let isLoading = false
loadMoreButton.addEventListener('click', () => {
    if (isLoading === true) {
        return
    }
    myChart.showLoading()
    isLoading = true
    setTimeout(() => {

        myChart.setOption({
            xAxis: {
                data: [...xData, `${key}月`]
            },
            series: [
                {
                    data: [...values, value]
                }
            ]
        })
        myChart.hideLoading()
        isLoading = false
        xData.push(`${key}月`)
        values.push(value)
        key++
        value -= 2
    }, 1000)

})

myChart.on('click', (e) => {
    console.log(e.data)
    console.log(e.name)
})
