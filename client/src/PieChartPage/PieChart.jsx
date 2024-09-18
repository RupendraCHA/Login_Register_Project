
import { useState } from 'react'
import './PieChart.css'
import PieChartItem from './../PieChartItem/PieChartItem.jsx'
import { usersData } from "./Sales.jsx"



function PieChart() {

    const [userData, setUserData] = useState({
        // 
        labels: usersData.map((data) => data.category),
        datasets: [{
            label: "Revenue Generated",
            data: usersData.map((data) => data.revenue),
            backgroundColor: ["yellow", "#ff0000", "#00ff00", "#0000ff"],
            borderColor: "white",
            borderWidth: 1
        }
            //     ,
            // {
            //     label: "Safety Stock",
            //     data: usersData.map((data) => data.safetyStock),
            //     backgroundColor: ["#000", "#fff", "#aaa", "#55852c", "#14c49e", "#07de2b", "#086acc", "#810fab"],
            //     borderColor: "white",
            //     borderWidth: 1
            // }, {
            //     label: "Reorder Point Quantity",
            //     data: usersData.map((data) => data.reorderPointQuantity),
            //     backgroundColor: ["#fcba03", "#8c8a54", "#0c04b0", "#55852c", "#14c49e", "#07de2b", "#086acc", "#810fab"],
            //     borderColor: "white",
            //     borderWidth: 1
            // }
        ]
    })

    return (
        <div id='app'>
            <div style={{ width: 260 }}>
                <PieChartItem chartData={userData} />
            </div>

        </div>
    )
}

export default PieChart
