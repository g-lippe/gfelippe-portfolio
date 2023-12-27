import HeroBanner from './hero_banner'
import Section from './section'
import react_projects from './react_projects.json'
import other_projects from './other_projects.json'

export default function MainPage() {
  return (
    <>
      <HeroBanner />
      <Section title={'React Projects'} list={react_projects} />
      <Section title={'Other Projects'} list={other_projects} />
    </>
  )
}