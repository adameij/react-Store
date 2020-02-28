import React,{Component} from 'react'
import Product from './Product'
class ProductList extends Component{
  render(){
    return(
      <div>
        <div className="card">
                    <div className="card-header">
                        <h1 className="m-3">Products list</h1>

                    </div>
                    <div className="card-body">
                        <ul className="list-group m-3">
                            {
                                <Product/>
                            }
                        </ul>
                    </div>
                </div>
      </div>
    )
  }
}

export default ProductList