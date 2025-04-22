import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
import { CartContext } from '../context/CartContext'

export default function ItemDetailContainer() {
    const [detail, setDetail] = useState()
    const { id } = useParams()

    const value = useContext(CartContext)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${ id }`)
        .then(res => res.json())
        .then(prod => setDetail(prod))
    }, [id])
    return (
        <ItemDetail detail={detail} />
)
}
