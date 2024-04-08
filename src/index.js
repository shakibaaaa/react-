import React from "react";
import  ReactDom  from 'react-dom';
import App from './app';
// import Products from "./components/products";
// import Products from "./components/functional/products";
// import Product from "./components/product";
// import Product from "./components/functional/product"

import 'bootstrap/dist/css/bootstrap.min.css';

// const element = <h1>hello world</h1>

ReactDom.render(<App/>, document.getElementById('root'));
