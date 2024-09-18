
import { useState } from 'react'
import './BarChart.css'
import BarChartItem from './../BarChartItem/BarChartItem.jsx'
import { usersData } from "./Data.jsx"



function BarChart() {

    const [userData, setUserData] = useState({
        labels: usersData.map((data) => data.productName),
        datasets: [{
            label: "Predicted Sales",
            data: usersData.map((data) => data.PredictedSales),
            backgroundColor: ["blue"],
            // borderColor: "white",
            // borderWidth: 1
        }, {
            label: "Safety Stock",
            data: usersData.map((data) => data.safetyStock),
            backgroundColor: ["red"]
        }, {
            label: "Reorder Point Quantity",
            data: usersData.map((data) => data.reorderPointQuantity),
            backgroundColor: ["green"]
        }
        ]
    })

    return (
        <div className='bar-chart-container'>
            <div style={{ width: 550 }}>
                <BarChartItem chartData={userData} />
            </div>

        </div>
    )
}

export default BarChart
