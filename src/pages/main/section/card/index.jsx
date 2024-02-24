import { Link } from "react-router-dom"

export default function Card({ item, category, styles }) {
  return (
    <div className={styles.card}>
      <Link to={`/project/${category}/${item.id}`}>
        <h5>{item.name}</h5>
        {item.img && <img src={item.img} alt={item.img} />}
        {item.media &&
          <video autoPlay muted loop >
            <source src={item.media} type="video/mp4" />
          </video>
        }
      </Link>
    </div>
  )
}