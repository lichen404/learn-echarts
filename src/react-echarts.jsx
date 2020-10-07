import React, {useEffect, useRef} from 'react'
import echarts from 'echarts'

export function ReactEcharts(props){
    const {option,status} = props
    const container = useRef(null)
    const chart = useRef(null)
    useEffect(()=>{
        const width = document.documentElement.clientWidth
        container.current.style.width = `${width - 20}px`
        container.current.style.height = `${(width - 20) * 1.2}px`
        chart.current = echarts.init(container.current,'dark')
    },[])
    useEffect(()=>{
        chart.current.setOption(option)
        }
    ,[option])
    useEffect(()=>{
        if(status){
            chart.current.showLoading()
        }
        else {
            chart.current.hideLoading()
        }
    },[status])
    return(
        <div ref={container}/>
    )
}
