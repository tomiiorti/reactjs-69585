import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
import { getProductById } from '../firebase/db'

export default function ItemDetailContainer() {
    const [detail, setDetail] = useState()
    const { id } = useParams()

    useEffect(() => {
        getProductById(id)
            .then(data => setDetail(data));
    }, [id])
    return (
        <ItemDetail detail={detail} />
    )
}
