import React from 'react';

function ItemList(props) {
  const item = props.item;
  
  return (
    <li>
      <span>{item.text}</span>
      <button className="btn-close" onClick={() => props.removeItem(item)}>X</button>
    </li>
  );
}

export default ItemList;