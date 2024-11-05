import React, { useState } from "react";

export function ShoppingCart() {
  const [item, setItem] = useState([]);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !quantity || !price) {
      return;
    }

    const newItem = {
      name,
      quantity: parseInt(quantity),
      price: parseInt(price),
    };
    setItem((prev) => [...prev, newItem]);
    setName("");
    setQuantity("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Itemname"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <input
        type="number"
        //   placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Add Item</button>

      <ul>
        {item.map((item, index) => (
          <li key={index}>
            {item.name}-Quantity:{item.quantity}
            Price:{item.price * item.quantity}
          </li>
        ))}
      </ul>
    </form>
  );
}
