import React, {useState} from "react";
import {ReactEcharts} from "./react-echarts";

export function ReactApp() {
    const [option, setOption] = useState({
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
            data: ["1月", "2月", "3月", "4月", "5月", "6月"]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            type: 'line',
            data: [5, 20, 36, 10, 10, 20],
            lineStyle: {
                color: 'blue'
            },
            itemStyle: {
                borderWidth: 10,
                borderColor: 'green'
            },
            name: 'bug 数'

        }]
    },)
    const [status, setStatus] = useState(false)
    const addMore = () => {
        if (status) {
            return
        }
        setStatus(true)
        setTimeout(() => {
            setOption({
                    xAxis: {
                        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"]
                    },
                    series: [
                        {
                            data: [5, 20, 36, 10, 10, 20, 40]
                        }
                    ]
                }
            )
            setStatus(false)
        }, 1000)
    }
    return (
        <div>
            <ReactEcharts option={option} status={status}/>
            <button onClick={addMore}>加载更多
            </button>
        </div>

    )
}
