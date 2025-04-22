import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';
// import withLoading from './withLoading';

// const ItemListWithLoading = withLoading(ItemList);

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const products = 'https://dummyjson.com/products';
    const productsByCategory = `https://dummyjson.com/products/category/${id}`;

    fetch(id ? productsByCategory : products)
      .then(res => res.json())
      .then(data => setItems(data.products))
  }, [id]);
  return (
    <ItemList items={items} />
  )
}
