import React, {Component} from 'react'
import Table from 'components/Table'
import Navbar from 'components/Navbar'
import Select from 'components/Select'
import {MyContext} from 'context/MyContext'

class Home extends Component{

    static contextType = MyContext;

    render(){
        return (
                <div className='container'>
                    <Navbar/>
                    <Select filterData = {this.context.filterData}/>
                    <Table 
                    data = {this.context.data}
                    onSort = {this.context.onSort}
                    sort = {this.context.sort}
                    addCartItem = {this.context.addCartItem}
                    removeCartItem = {this.context.removeCartItem}
                    />
                </div>
        )
    }
}

export default Home