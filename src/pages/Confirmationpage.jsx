import React from "react";
import { useNavigate } from "react-router-dom";

const Confirmationpage = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your Order</h2>
      <p>Your order has been placed successfully.</p>
      {order && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-100">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          <p>Order Number: {order?.orderNumber || "N/A"}</p>
          <div className="mt-4">
            <h4 className="text-md font-semibold mb-2">Shipping Information</h4>
            <p>{order?.shippingInformation.address || "N/A"}</p>
            <p>{order?.shippingInformation.city || "N/A"}</p>
            <p>{order?.shippingInformation.zip || "N/A"}</p>
          </div>
          <div className="mt-4 f">
            <h4 className="text-md font-semibold mb-2">Products ordered</h4>
            {order.products.map((product) => (
              <div key={product.id} className="flex justify-between mt-2">
                <p>
                  {product.name}X{product.quantity}
                </p>
                <p> FCFA{product.price * product.quantity}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            <span>Total Price:</span>
            <span className="font-semibold ">
              {order?.totalPrice.toFixed(2) || "N/A"}
            </span>
          </div>
        </div>
      )}
      <div className="mt-6">
        <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600">
          Order tracking
        </button>
        <button
          className="ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Confirmationpage;
