import React from 'react'

export default props => (
    <table className='table table-striped mt-3'>
        <thead className='thead-dark'>
            <tr>
                <th>Category</th>
                <th>Name</th>
                <th onClick={props.onSort.bind(null, 'price')} style = {{width: '183px'}}>
                    Price <small>{props.sort}</small>
                    </th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(item => (
                <tr key={item.id}>
                    <td>{item.category.name}</td>
                    <td>{item.name}</td>
                    <td style={{width: '183px'}}>{item.price}$</td>
                    <td>
                        <button className='btn' onClick = {props.removeCartItem.bind(this, item)}>-</button>
                        Select
                        <button className='btn' onClick = {props.addCartItem.bind(this, item)}>+</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
)