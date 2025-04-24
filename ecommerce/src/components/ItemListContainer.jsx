import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';
import { getProducts, filterByCategory } from '../firebase/db';

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      filterByCategory(id)
        .then(data => setItems(data))
    } else {
      getProducts()
        .then(data => setItems(data))
    }

  }, [id]);
  return (
    <ItemList items={items} />
  )
}
