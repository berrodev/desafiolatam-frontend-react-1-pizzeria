import { useState } from 'react';
import { pizzaCart } from '../pizzas';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const handleChange = (id, count) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count + count } : item
        )
        .filter((item) => item.count > 0); // Filtra las pizzas con count > 0

      return updatedCart;
    });
  };

  return (
    <section className="flex flex-col max-w-6xl gap-6 p-4 m-4 mx-auto ">
      <h2 className="text-2xl font-bold text-gray-800 ">Order Details: </h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between w-full max-w-2xl "
        >
          <div className="flex items-center gap-2">
            <img
              src={item.img}
              alt="Pizza Image"
              className="object-cover h-16"
            />
            <h2 className="mb-2 text-xl font-bold text-gray-800">
              {item.name}
            </h2>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex justify-between gap-2 ">
              <p className="px-4 py-2 text-sm rounded">${item.price}</p>
              <button
                onClick={() => handleChange(item.id, -1)}
                className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
              >
                -
              </button>
              <span className="px-4 py-2 text-sm rounded ">{item.count}</span>
              <button
                onClick={() => handleChange(item.id, 1)}
                className="px-4 py-2 text-sm text-white bg-blue-900 rounded hover:bg-blue-600"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col overflow-hidden">
        <div className="flex flex-col flex-1">
          <h2 className="mb-2 text-xl font-bold text-gray-800">
            Total $
            {cart.reduce((acc, item) => acc + item.price * item.count, 0)}
          </h2>
          <div className="flex justify-between mt-auto">
            <button className="px-4 py-2 text-sm text-white bg-gray-900 rounded hover:bg-gray-600">
              Pagar 💳
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
