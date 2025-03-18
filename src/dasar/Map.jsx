import React from "react";

const foods = [
  {
    id: 1,
    name: "Nasi goreng",
    price: 10000,
  },
  {
    id: 2,
    name: "Mie goreng",
    price: 12000,
  },
  {
    id: 3,
    name: "Soto",
    price: 15000,
  },
  {
    id: 4,
    name: "Martabak",
    price: 5000,
  },
];

const total_bayar = foods.reduce((total, food) => total + food.price, 0);

const Map = () => {
  return (
    <>
      <h1>Daftar Makanan</h1>
      <ul>
        {foods.map((food) => {
          return (
            <li key={food.id}>
              {food.id}. {food.name} - Harga Rp. {food.price}
            </li>
          );
        })}
      </ul>
      <h2>Map Filters Harga yang lebih dari 11.000</h2>
      <ul>
        {foods
          .filter((food) => food.price > 11000)
          .map((food) => {
            return (
              <li key={food.id}>
                {food.id}. {food.name} - Harga Rp. {food.price}
              </li>
            );
          })}
      </ul>
      <h3>Total harga = {total_bayar}</h3>
    </>
  );
};

export default Map;
