import { height, width } from "@mui/system";
import React from "react";
import APIService from "../APIService";
import "../style/productpage.css";

export default class ProductComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    APIService.getProducts()
      .then((data) => {
        this.setState({ product: data });
        console.log(this.state.data);
      })
      .catch(function (ex) {
        console.log("Response parsing failed. Error: ", ex);
      });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Product Details</h2>
        <div className="card-row" data-testid="name">
          {this.state.product.map((product) => (
            <div className="card">
              <div className="card-img">
                <img src={product.image} style={{ height: "100%" }}></img>
              </div>
              <a href="#">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <h6 className="card-subtitle"> €{product.price}</h6>
                  {product.stock <= 0 ? (
                    <h6 className="card-subtitle" style="color: red">
                      OUT OF STOCK
                    </h6>
                  ) : (
                    <div></div>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
