import React, {Component} from "react";
import TableCart from '../components/TableCart'
import Navbar from '../components/Navbar'
import { MyContext } from "context/MyContext";

class Cart extends Component {
  
  static contextType = MyContext
  render(){
    console.log(this.context)
    return (
      <div className="container">
        <Navbar/>
        <TableCart 
        data = {this.context.cart}
        addQuantity = {this.context.addQuantity}
        removeQuantity = {this.context.removeQuantity}
        />
        <strong>Total price: </strong>
        <span>{Math.abs(this.context.totalPrice.toFixed(2))}$</span>
      </div>
    )
  }
}

export default Cart;