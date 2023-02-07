import React, {Component, createContext} from 'react';
import _ from 'lodash'

export const MyContext = createContext();

class MyContextProvider extends Component{
    state = {
        url: 'http://localhost:3001/api/products/',
        data: [],
        originalData: [],
        cart: [],
        sort: '',
        filed: 'price',
        totalPrice: 0
    }

    async componentDidMount (){
        const response = await fetch(this.state.url)
        const data = await response.json()
        this.setState({
            data: _.orderBy(data, this.state.filed, this.state.sort),
            originalData: data
        })
    }

    onSort = () => {
        const clonedData = this.state.data.concat();
        const sortType = this.state.sort === 'desc' ? 'asc' : 'desc';
        const orderData = _.orderBy(clonedData, 'price', sortType);
        
        this.setState({
            sort: sortType,
            data: orderData
        })
    }

    addCartItem = (item) => {
        const index = item.id;
        if (this.state.cart.findIndex(x => x.id === index) === -1){
            this.state.cart.push(item)
            const targetIndex = this.state.cart.findIndex(x => x.id === item.id);
            this.state.cart[targetIndex].quantity = 1;
            this.state.totalPrice += item.price;
        }
        this.setState({
            totalPrice: this.state.totalPrice,
        })
        console.log(this.state.totalPrice)
    }

    removeCartItem = (item) => {
        const target = item.id;
        for (let i = 0; i < this.state.cart.length; i++)
            if (this.state.cart[i].id === target){
                this.setState({
                    totalPrice: this.state.totalPrice - (this.state.cart[i].price * this.state.cart[i].quantity),
                })
                this.state.cart.splice(i, 1);
            }
        console.log(this.state.cart);
        
    }

    filterData = (category) => {
        let filteredData = [];
        if (category === "all") {
            filteredData = this.state.originalData.concat();
            this.state.sort = '';
        } else {
            this.state.data = this.state.originalData.concat();
            this.state.sort = '';
            filteredData = this.state.data.filter(item => item.category.id === category);
        }
        this.setState({
            data: filteredData
        });
    }

    setQuantity = () => {
        for (let i = 0; i< this.state.cart.length; i++)
            this.state.cart[i].quantity = 1;
    }

    addQuantity = (index) => {
        // console.log(index)
        const targetIndex = this.state.cart.findIndex(item => item.id === index.id);
        const cart = [...this.state.cart];
        cart[targetIndex].quantity = cart[targetIndex].quantity + 1;
        this.setState({
            totalPrice: this.state.totalPrice + this.state.cart[targetIndex].price,
            cart,
        });
        console.log(this.state.cart);
    }

    removeQuantity = (item) => {
        const targetIndex = this.state.cart.findIndex(x => x.id === item.id);
        const cart = [...this.state.cart];
        cart[targetIndex] = { ...cart[targetIndex], quantity: cart[targetIndex].quantity - 1 };
        const currentPrice = this.state.cart[targetIndex].price
        if (cart[targetIndex].quantity === 0) {
            cart.splice(targetIndex, 1);
        }
        console.log(this.state.cart)
        this.setState({
            totalPrice: this.state.totalPrice - currentPrice,
            cart
        });

    }

    render(){
        return(
            <MyContext.Provider value = {{
                ...this.state,
                onSort: this.onSort,
                addCartItem: this.addCartItem,
                removeCartItem: this.removeCartItem,
                filterData: this.filterData,
                setQuantity: this.setQuantity,
                addQuantity: this.addQuantity,
                removeQuantity: this.removeQuantity
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyContextProvider