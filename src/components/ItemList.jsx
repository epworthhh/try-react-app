import React from 'react';
import PropTypes from 'prop-types';

const ItemList = ({ item, removeItem }) => (
  <li>
    <span>{item.text}</span>
    <button className="btn-close" onClick={() => removeItem(item)}>X</button>
  </li>
);

ItemList.propTypes = {
  item: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default ItemList;