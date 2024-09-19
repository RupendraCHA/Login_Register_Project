import React from 'react'

import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Colors } from "chart.js/auto"

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

const PieChartItem = ({ chartData }) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Revenue Share of each Category",
                color: "blue"
            }
        }
    }

    return (
        <Pie options={options} data={chartData}>
            Pie Chart
        </Pie>
    )
}

export default PieChartItem
