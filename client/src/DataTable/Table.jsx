import React from 'react'
import "./Table.css"
import { revenueData } from './JsonData'

const Table = () => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th className='column-name'>Product_Id</th>
                    <th className='column-name'>Product_Name</th>
                    <th className='column-name'>Lead_Time</th>
                    <th className='column-name'>Monthly_Sales</th>
                    <th className='column-name'>Daily_Sales</th>
                    <th className='column-name'>Safety_Stock</th>
                    <th className='column-name'>Reorder_Point</th>
                </tr>
            </thead>
            <tbody>
                {
                    revenueData.map((eachRow, index) => {
                        {/* console.log(index) */ }
                        return (
                            <tr>
                                <td>{eachRow.productId}</td>
                                <td>{eachRow.productName}</td>
                                <td>{eachRow.leadTimeInDays}</td>
                                <td>{eachRow.monthlySales}</td>
                                <td>{eachRow.dailySales}</td>
                                <td>{eachRow.safetyStock}</td>
                                <td>{eachRow.reorderPoint}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table
