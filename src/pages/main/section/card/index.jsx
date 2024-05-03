import { Link } from "react-router-dom"

export default function Card({ item, category, styles }) {

  let link

  item.internal_route ? link = item.internal_route : link = `/project/${category}/${item.id}`

  return (
    <Link to={link}>
      <div className={styles.card}>
        <h5>{item.name}</h5>
        {item.img && <img src={item.img} alt={item.img} />}
        {item.media &&
          <video autoPlay muted loop >
            <source src={item.media} type="video/mp4" />
          </video>
        }
      </div>
    </Link>
  )
}