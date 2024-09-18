import React from 'react'
import "./DatasetsItem.css"

const DatasetsItem = (props) => {

    const { dataset } = props

    return (
        <li>
            <button className='dataset-button'>{`Upload ${dataset}`}</button>
        </li>
    )
}

export default DatasetsItem
