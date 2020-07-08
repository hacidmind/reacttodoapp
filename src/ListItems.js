import React from 'react';
import './ListItems.css'

function ListItems(props) {
    const items = props.items
    const listItems = items.map(item => {
        return (
            <div className='list' key={item.key}>
                <p>{item.text} <i className='fa fa-trash faicon' aria-hidden='true' onClick={()=>props.deleteItem(item.key)}></i></p>
            </div>
        )
    })
    return (
        <div>
            <div>{listItems}</div>
        </div>
    )
}

export default ListItems