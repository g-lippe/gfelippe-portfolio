import HeroBanner from './hero_banner'
import Section from './section'
import projects from '../../assets/projects.json'
import { Fragment } from 'react'
import NavBar from 'components/navbar'

export default function Main() {
  return (
    <Fragment>
      <NavBar />
      <div className='pagina_centro'>
        <HeroBanner />
        <Section title={'React Projects'} list={projects} category={'react'} />
        <Section title={'Other Projects'} list={projects} category={'other'} />
      </div>
    </Fragment>
  )
}