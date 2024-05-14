import styles from './section.module.scss'
import Card from './card';

function Section({ title, list, category }) {
  return (
    <div className={styles.react_section}>
      <h2>{title}</h2>
      <div className={styles.gallery}>
        {list[category].map(item => {
          return <Card key={item.id} item={item} category={category} styles={styles} />
        })}
      </div>
    </div>
  )
}

export default Section;