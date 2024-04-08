import { Component } from "react";
import "./product.css";
import ProductContext from "./../context/products";

class Products extends Component {
  static contextType = ProductContext;
  imageUrl = "https://picsum.photos/200";
  render() {
    const { productName } = this.props;
    const list = ["item one", "item two", "item three"];

    return (
      <div>
        <span className="m-2 text-info">{productName}</span>
        <span className="m-2 bg-primary">{this.format()}</span>
        <button
          onClick={this.handelIncrement}
          className="m-2 btn btn-sm btn-success"
        >
          +
        </button>
        <button
          onClick={this.handelDecrement}
          className="m-2  btn btn-sm btn-warning"
        >
          -
        </button>
        <button
          onClick={this.handelDelete}
          className="m-2  btn btn-sm btn-danger"
        >
          Delete
        </button>
        <p>{this.props.children}</p>
        <img src={this.imageUrl} alt="" />
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  handelIncrement = () => {
    this.context.onIncrement(this.props.id);
  };
  handelDecrement = () => {
    this.context.onDecrement(this.props.id);
  };
  handelDelete = () => {
    this.context.onDelete(this.props.id);
  };

  format() {
    if (this.props.count === 0) {
      return "zero";
    } else {
      return this.props.count;
    }
  }
}

export default Products;
