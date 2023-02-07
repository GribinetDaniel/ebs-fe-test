import React from 'react';

export default props => {
    return (
        <div className="input-group mb-3 mt-3">
            <div className="input-group-prepend">
                <label className="input-group-text">Options</label>
            </div>
            <select 
                className="custom-select" 
                onChange={(e) => props.filterData(e.target.value)}
            >
                <option>all</option>
                <option>vegetables</option>
                <option>grain</option>
                <option>meal</option>
                <option>lactose</option>
            </select>
        </div>
    )
}