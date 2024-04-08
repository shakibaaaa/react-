import { useState } from 'react';



const Product = ({productName ,count: propCount, children}) => {
 
  const  [count, setCount] = useState(propCount);
  

  return (
    <div>
      <span className="m-2 text-info">{productName}</span>
      <span className="m-2 bg-primary">{format()}</span>
      <button
        onClick={()=>handelIncrement(count , setCount)}
        className="m-2 btn btn-sm btn-success"
      >
        +
      </button>
      <button
        onClick={handelDecrement}
        className="m-2  btn btn-sm btn-warning"
      >
        -
      </button>
      <button
        onClick={handelDelete}
        className="m-2  btn btn-sm btn-danger"
      >
        Delete
      </button>
      {children}
      
   
    </div>
  );

function handelIncrement() {
  setCount(count + 1);
}
function handelDecrement() {
  setCount(count - 1);
}
function handelDelete() {
  console.log("Delete");
}

function format() {
  if (count === 0) {
    return "zero";
  } else {
    return count;
  }
}


}
export default Product;
