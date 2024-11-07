import React from "react";
import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";

export function Meals() {
  const [items, setItems] = useState([]); // storing all meals

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemList = items.map(({ strMeal, strMealThumb, idMeal }) => (
    <section className="card" key={idMeal}>
      <img src={strMealThumb} alt={strMeal} />
      <p>{strMeal}</p>
      <p>#{idMeal}</p>
    </section>
  ));

  return <div className="items-container">{itemList}</div>;
}
