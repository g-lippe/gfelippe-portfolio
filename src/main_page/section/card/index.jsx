function Card({ item, styles }) {
  return (
    <div className={styles.card}>
      <h5>{item.name}</h5>
    </div>
  )
}

export default Card;