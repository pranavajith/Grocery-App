import React from 'react';

const getData = (item, index) => {
    let newName = item.name;
    let newCat = item.category;
    let newPrice = item.price;
    if (!item.inStock) {
        newName = <span style={{ color: 'red' }}>{newName}</span>;
        newCat = <span style={{ color: 'red' }}>{newCat}</span>;
        newPrice = <span style={{ color: 'red' }}>{newPrice}</span>;
}
        return (
            <tr key={index}>
                <td>{newName}</td>
                <td>{newCat}</td>
                <td>{newPrice}</td>
            </tr>
        );
};

const DisplayItems = ({ items }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            getData(item, index)
          ))}
        </tbody>
      </table>
    );
};

export default DisplayItems;
