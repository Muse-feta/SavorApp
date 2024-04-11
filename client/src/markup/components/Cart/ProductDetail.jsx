import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';
const api_url = import.meta.env.VITE_API_URL;
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const ProductDetail = () => {
	const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
	const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
	console.log(items);
	
  return (
    <div>
        <div class="cart-section mt-150 mb-150">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-12">
					<div class="cart-table-wrap">
						<table class="cart-table">
							<thead class="cart-table-head">
								<tr class="table-head-row">
									<th class="product-remove"></th>
									<th class="product-image">Product Image</th>
									<th class="product-name">Name</th>
									<th class="product-price">Price</th>
									<th class="product-quantity">Quantity</th>
									<th class="product-total">Total</th>
								</tr>
							</thead>
							{items.map((item, index) => {
								return (
                  <tbody class="cart-table-body">
                    <tr class="table-body-row">
                      <td class="product-remove">
                        <button onClick={() => removeItem(item.id)}>
                          <i class="far fa-window-close"></i>
                        </button>
                      </td>
                      <td class="product-image">
                        <img
                          src={`${api_url}/images/${item.image_url}`}
                          alt=""
                        />
                      </td>
                      <td class="product-name">{item.name}</td>
                      <td class="product-price">${item.price}</td>
                      <td class="product-quantity">
                        {" "}
                        <button
                          className=""
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <FaMinusCircle />
                        </button>{" "}
                        <span className=" text-lg">{item.quantity}</span>{" "}
                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                          <FaPlusCircle />{" "}
                        </button>
                      </td>

                      <td class="product-total">
                        ${item.price * item.quantity}
                      </td>
                    </tr>
                  </tbody>
                );
							})}
						</table>
					</div>
				</div>

				<div class="col-lg-4">
					<div class="total-section">
						<table class="total-table">
							<thead class="total-table-head">
								<tr class="table-total-row">
									<th>Total</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								{/* <tr class="total-data">
									<td><strong>Subtotal: </strong></td>
									<td>{totalUniqueItems}</td>
								</tr> */}
								{/* <tr class="total-data">
									<td><strong>Shipping: </strong></td>
									<td>$45</td>
								</tr> */}
								<tr class="total-data">
									<td><strong>Total: </strong></td>
									<td>ETB {total}</td>
								</tr>
							</tbody>
						</table>
						<div class="cart-buttons">
							{/* <a href="cart.html" class="boxed-btn">Update Cart</a> */}
							<Link to="/check-out" class="boxed-btn black">Check Out</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default ProductDetail