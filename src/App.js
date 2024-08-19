import DisplayItems from "./Components/DisplayItems";
import SearchBar from "./Components/SearchBar";
import React, {useState} from 'react';
import './App.css';

const items = [
  { name: 'Apple', price: 20, category: 'fruit', inStock: true },
  { name: 'Banana', price: 30, category: 'fruit', inStock: false },
  { name: 'Carrot', price: 40, category: 'vegetable', inStock: true },
  { name: 'Broccoli', price: 50, category: 'vegetable', inStock: true },
  { name: 'Cheese', price: 100, category: 'vegetable', inStock: false }
];

const performSearch = (searchTerm, stockedRequired) => {
  let newItems = items;
  console.log("here");
  console.log(stockedRequired);
  if (stockedRequired) newItems = items.filter(item => item.inStock == true);
  if (!searchTerm) return newItems;
  return newItems.filter((item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );
}

function App() {

  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (searchTerm, stockedRequired) => {
    const results = performSearch(searchTerm, stockedRequired);
    setFilteredItems(results);
  }

  return (
    <div>
      <SearchBar performSearch={handleSearch} />
      <DisplayItems items = {filteredItems}/>
    </div>
  );
}

export default App;
