import styles from './section.module.scss'
import Card from './card';

function Section({title, list}) {
  return (
    <div className={styles.react_section}>
      <h2 >{title}</h2>
      <div className={styles.gallery}>
        {list.map(item => {
          return <Card item={item} styles={styles}/>
        })}
      </div>
    </div>
  )
}

export default Section;