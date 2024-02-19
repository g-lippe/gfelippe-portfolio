function Card({ item, styles }) {
  return (
    <div className={styles.card} onClick={() => console.log('Test')}>
      <h5>{item.name}</h5>
      <img src={item.img} alt={item.img} />
        <video autoPlay muted loop >
          <source src={item.media} type="video/mp4" />
        </video>
    </div>
  )
}

export default Card;
