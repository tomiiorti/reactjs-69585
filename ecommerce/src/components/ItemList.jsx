function ItemList ({ items }) {
    return (
        <div>
            {items.map(item => <p key={item.id}>{item.nombre}</p>)}
        </div>
    )
}

export default ItemList