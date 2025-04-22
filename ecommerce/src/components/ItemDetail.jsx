import ItemCount from './ItemCount'

export default function ItemDetail({detail}) {
  return (
    <div>
        <img src={detail?.thumbnail} alt={detail?.title} />
        <h3>{detail?.title}</h3>
        <p>{detail?.description}</p>
        <ItemCount product={detail} initial={1} />
    </div>
  )
}
