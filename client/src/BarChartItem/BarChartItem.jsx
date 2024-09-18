import React from 'react'

import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

const BarChartItem = ({ chartData }) => {
    return (
        <Bar data={chartData}>
            Bar Chart
        </Bar>
    )
}

export default BarChartItem
