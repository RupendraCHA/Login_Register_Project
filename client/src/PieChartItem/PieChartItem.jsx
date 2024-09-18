import React from 'react'

import { Pie } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

const PieChartItem = ({ chartData }) => {
    return (
        <Pie data={chartData}>
            Pie Chart
        </Pie>
    )
}

export default PieChartItem
