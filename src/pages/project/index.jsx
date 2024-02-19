import { useParams } from 'react-router-dom'
import styles from './project.module.scss'
import projects from '../../assets/projects.json'

export default function Project() {

  // const project = projects[useParams(section)][useParams(id)]
  const project = projects[useParams()['category']][useParams()['id']]

  return (
    <div className={styles.cont_main + ' pagina_centro'}>
      <h2>{project.name}</h2>


      <div className={styles.cont_upper}>
        <p>{project.description}</p>
        <video autoPlay muted loop >
          <source src={project.media} type="video/mp4" />
        </video>
      </div>


    </div>
  )
}