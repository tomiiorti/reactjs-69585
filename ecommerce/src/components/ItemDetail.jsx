import ItemCount from './ItemCount'

export default function ItemDetail({ detail }) {
  return (
    <div>
      <img src={detail?.img} alt={detail?.name} />
      <h3>{detail?.name}</h3>
      <p>{detail?.description}</p>
      <ItemCount product={detail} initial={1} />
    </div>
  )
}
