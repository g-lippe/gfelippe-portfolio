import { useRef } from 'react';
import heroImg from '../../../assets/images/ice_cube_transparent.png'
import styles from './hero_banner.module.scss'



function HeroBanner() {
  const boundingRef = useRef()

  console.log(boundingRef)

  return (
    <div className={styles.banner}>
      <div className={styles.hero_text}>
        <h5>Hello there! I am</h5>
        <h1 >Gabriel A. Felippe</h1>
        <h2>
          I combine <span className={styles.art_type}>art</span> and <span className={styles.code_type}>{'<code/>'}</span> into products
        </h2>
        <p className={styles.typewritter}>
          Welcome to my portfolio<br />
          this is a compilation of all my public works and projects<br />
        </p>
      </div>
      <div
        onMouseLeave={() => (boundingRef.current = null)}
        onMouseEnter={(ev) => {
          boundingRef.current = ev.currentTarget.getBoundingClientRect()
        }}
        onMouseMove={(ev) => {
          if (!boundingRef.current) return;
          const x = ev.clientX - boundingRef.current.left;
          const y = ev.clientY - boundingRef.current.top;
          const xPercent = x / boundingRef.current.width;
          const yPercent = y / boundingRef.current.height;
          const xRotation = (xPercent - 0.5) * 40
          const yRotation = (0.5 - yPercent) * 40
          const xRotation_text = (xPercent - 0.5) * -5
          const yRotation_text = (0.5 - yPercent) * -5

          ev.currentTarget.style.setProperty('--x-rotation', `${yRotation}deg`)
          ev.currentTarget.style.setProperty('--y-rotation', `${xRotation}deg`)
          ev.currentTarget.style.setProperty('--xtext-rotation', `${yRotation_text}deg`)
          ev.currentTarget.style.setProperty('--ytext-rotation', `${xRotation_text}deg`)

          console.log(xPercent, yPercent)
        }}

        className={styles.hero_img}
        style={{ transform: `rotatex(var(--x-rotation)) rotateY(var(--y-rotation))`, }}

      >





        <div
          style={{ transform: `rotatex(var(--x-rotation)) rotateY(var(--ytext-rotation))`, position:'absolute', color:'grey' }}
        >
          text
          text
          text
          text
          text
          text
          text
          text
          text
          text
          text
          text
          text
          text
          text
          text
          text
          text
          text
          text
          text
          text
          </div>
        <img src={heroImg} alt="avatar" />

      </div>
    </div>
  )
}

export default HeroBanner;