import React from "react";
import {datas} from "../data"; 

function ProductsItem(props) { 
  return (
    <div className="product-card">
      <img className="thumnail" src={props.product.image} alt={props.product.meta_description} />
      <div className="content-area">
      <h2>{props.product.name}</h2>
      <p>{props.product.short_description}</p>
      <p>
        <strong>Mã sản phẩm:</strong> {props.product.sku}
    </p>
      <p>
        <strong>Giá:</strong> {props.product.final_price} VNĐ.
      </p>
      <p>
        <strong>Còn lại:</strong> {props.product.stock} Sản Phẩm.
      </p>
      <p>
        <strong>Chất liệu:</strong> {props.product.materials}.
      </p>
      <p>
        <strong>Lưu ý:</strong> {props.product.instruction}
      </p>
      </div>
    </div>
  );
}

const ProductsList = () => {
  return (
    <>
      <h1>Danh sách Sản Phẩm</h1>
      <div className="product-list">
        <div className="row flex-container">
        {datas.map((item) => (
          <ProductsItem key={item.sku} product={item} />
        ))}
        </div>
      </div>
    </>
  );
};

export default ProductsList;