import React from 'react'

export default props => (
    <table className='table table-striped mt-3'>
        <thead className='thead-dark'>
            <tr>
                <th>Category</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(item => (
                <tr key={item.id}>
                    <td>{item.category.name}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td style={{width: '183px'}}>{(item.price * item.quantity).toFixed(2)}$</td>
                    <td>
                        <button className='btn' onClick={(e) => props.removeQuantity(item, e)}>-</button>
                        Select
                        <button className='btn' onClick={(e) => props.addQuantity(item, e)}>+</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
)