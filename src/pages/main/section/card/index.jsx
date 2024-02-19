import { Link } from "react-router-dom"

export default function Card({ item, category, styles }) {
  return (
    <div className={styles.card} onClick={() => console.log('Test')}>
      <Link to={`/project/${category}/${item.id}`}>
        <h5>{item.name}</h5>
        <img src={item.img} alt={item.img} />
        <video autoPlay muted loop >
          <source src={item.media} type="video/mp4" />
        </video>
      </Link>
    </div>
  )
}