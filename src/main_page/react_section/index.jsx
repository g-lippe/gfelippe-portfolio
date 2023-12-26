import styles from './react_section.module.scss'
import projects from './react_projects.json'
import Card from './card';

function ReactSection() {
  return (
    <div className={styles.react_section}>
      <h2 >React Projects</h2>
      <div className={styles.gallery}>
        {projects.map(project => {
          return <Card item={project} styles={styles}/>
        })}
      </div>
    </div>
  )
}

export default ReactSection;