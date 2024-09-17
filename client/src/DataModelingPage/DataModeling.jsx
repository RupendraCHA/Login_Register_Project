import React from 'react'
import "./DataModeling.css"
import { FaRegCircleUser } from "react-icons/fa6";
import DatasetItem from "./../DatasetsItem/DatasetsItem.jsx"

const DataModeling = () => {

    const datasetsNames = ["Order History", "Product Information", "Warehouse Information", "Past Demand", "Stock Movement", "Weather Data"]

    return (
        <div className='data-modeling-container'>
            <header className='container website-header'>
                <div className='header-container'>
                    <h1 className='website-heading'>
                        HANELYTICS
                    </h1>
                    <div>
                        <FaRegCircleUser className='user-icon' />
                    </div>
                </div>
            </header>
            <div className='container data-models-section-container'>
                <section className='workflows-section'>
                    <h1 className='use-case-heading'>Use Cases</h1>
                    <div className='data-model-types'>
                        <h2 className='model-name'>
                            Predicting Inventory Reorder Point & Safety Stock
                        </h2>
                        <h2 className='model-name'>
                            Revenue/Demand Sensing
                        </h2>
                        <h2 className='model-name'>
                            Equipment Failure Prediction
                        </h2>
                    </div>
                </section>
                <ul className='datasets-section'>
                    {datasetsNames.map((dataset) => {
                        return <DatasetItem dataset={dataset} />
                    })}
                </ul>
                <section className='dataset-section'>
                    Datasets
                </section>
            </div>
        </div>
    )
}

export default DataModeling
