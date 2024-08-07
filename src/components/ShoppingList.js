import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  function handleChange(event) {
    console.log("Test");
    setSelectedCategory(event.target.value);

  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => {
          return (selectedCategory == "All" || selectedCategory == item.category) ? (
            <Item key={item.id} name={item.name} category={item.category} />
          ) : null;
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
